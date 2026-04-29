const fs = require('fs')
const path = require('path')
const fm = require('front-matter')

// Configuration
const API_URL = 'https://api.x.ai/v1/chat/completions'
const MODEL = 'grok-4-latest'
const PROMPT_FILE = path.resolve(__dirname, 'prompts', 'blog-writer.txt')
const CONTENT_ES_DIR = path.resolve(__dirname, '..', 'src', 'content', 'blog', 'es')
const CONTENT_EN_DIR = path.resolve(__dirname, '..', 'src', 'content', 'blog', 'en')

async function run() {
  const apiKey = process.env.XAI_API_KEY
  if (!apiKey) {
    console.error('Error: XAI_API_KEY environment variable is missing.')
    process.exit(1)
  }

  console.log('1. Reading existing posts to prevent duplicates...')
  const existingPosts = []
  if (fs.existsSync(CONTENT_ES_DIR)) {
    const files = fs.readdirSync(CONTENT_ES_DIR).filter(f => f.endsWith('.md'))
    for (const file of files) {
      const raw = fs.readFileSync(path.join(CONTENT_ES_DIR, file), 'utf-8')
      const { attributes } = fm(raw)
      if (attributes.title) {
        existingPosts.push(`- ${attributes.title} (Categoría: ${attributes.category})`)
      }
    }
  }

  console.log(`Found ${existingPosts.length} existing posts.`)

  console.log('2. Loading base prompt...')
  let promptText = fs.readFileSync(PROMPT_FILE, 'utf-8')
  
  // Inject existing posts
  const postsList = existingPosts.length > 0 ? existingPosts.join('\n') : '- (Aún no hay posts publicados)'
  promptText += `\n${postsList}`

  console.log('3. Requesting new article from Grok (xAI API)...')
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: 'Eres un escritor experto que genera estrictamente objetos JSON válidos y sin formato adicional.'
        },
        {
          role: 'user',
          content: promptText
        }
      ],
      temperature: 0.7
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`API Error: ${response.status} ${response.statusText}`)
    console.error(errorText)
    process.exit(1)
  }

  const data = await response.json()
  if (!data.choices || !data.choices[0]) {
    console.error('API response format unexpected:', JSON.stringify(data, null, 2))
    process.exit(1)
  }
  let resultText = data.choices[0].message.content.trim()

  // Clean up if Grok accidentally wrapped it in markdown code blocks
  if (resultText.startsWith('```json')) {
    resultText = resultText.replace(/^```json\n/, '').replace(/\n```$/, '')
  } else if (resultText.startsWith('```')) {
    resultText = resultText.replace(/^```\n/, '').replace(/\n```$/, '')
  }

  let generatedData
  try {
    generatedData = JSON.parse(resultText)
  } catch (error) {
    console.error('Failed to parse JSON response from Grok:', error)
    console.error('Raw response:', resultText)
    process.exit(1)
  }

  console.log('\n--- Análisis SEO ---')
  console.log(`Keyword: ${generatedData.seo_analysis.main_keyword}`)
  console.log(`Ángulo: ${generatedData.seo_analysis.angle}`)
  console.log('--------------------\n')

  // Fix literal \n characters that the LLM might have output as text instead of true line breaks
  if (generatedData.es_content) {
    generatedData.es_content = generatedData.es_content.replace(/\\n/g, '\n')
  }
  if (generatedData.en_content) {
    generatedData.en_content = generatedData.en_content.replace(/\\n/g, '\n')
  }

  const slug = generatedData.slug || `post-${Date.now()}`
  
  // Ensure directories exist
  if (!fs.existsSync(CONTENT_ES_DIR)) fs.mkdirSync(CONTENT_ES_DIR, { recursive: true })
  if (!fs.existsSync(CONTENT_EN_DIR)) fs.mkdirSync(CONTENT_EN_DIR, { recursive: true })

  const today = new Date().toISOString().split('T')[0]

  // Build Markdown files
  const buildMarkdown = (frontmatter, content) => {
    // Override date to today
    frontmatter.date = today
    
    let md = '---\n'
    for (const [key, value] of Object.entries(frontmatter)) {
      if (Array.isArray(value)) {
        md += `${key}:\n${value.map(v => `  - ${v}`).join('\n')}\n`
      } else {
        md += `${key}: "${String(value).replace(/"/g, '\\"')}"\n`
      }
    }
    md += '---\n\n'
    md += content
    return md
  }

  const esMarkdown = buildMarkdown(generatedData.es_frontmatter, generatedData.es_content)
  const enMarkdown = buildMarkdown(generatedData.en_frontmatter, generatedData.en_content)

  const esPath = path.join(CONTENT_ES_DIR, `${slug}.md`)
  const enPath = path.join(CONTENT_EN_DIR, `${slug}.md`)

  fs.writeFileSync(esPath, esMarkdown)
  fs.writeFileSync(enPath, enMarkdown)

  console.log(`✓ Español guardado: ${esPath}`)
  console.log(`✓ Inglés guardado: ${enPath}`)
  console.log('\nArtículos generados exitosamente. El proceso de GitHub Actions puede hacer el commit ahora.')
}

run().catch(console.error)
