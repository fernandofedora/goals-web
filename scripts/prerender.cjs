/**
 * Post-build prerender script.
 * 
 * Reads the built dist/index.html, injects pre-rendered meta tags and
 * structured content for each route so crawlers see real content instead
 * of an empty <div id="root"></div>.
 * 
 * This is a lightweight approach that doesn't require Puppeteer or SSR.
 * It creates route-specific HTML files with proper <title>, <meta>,
 * Open Graph tags, and a <noscript> content fallback.
 */
const fs = require('fs')
const path = require('path')
const fm = require('front-matter')

const SITE_URL = 'https://goalssis.org'
const DIST = path.resolve(__dirname, '..', 'dist')
const CONTENT_DIR = path.resolve(__dirname, '..', 'src', 'content', 'blog')

// Read the base HTML template
const baseHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8')

function createPage({ route, title, description, ogType = 'website', article = null, esUrl = null, enUrl = null }) {
  let html = baseHtml

  // Replace <title>
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${escapeHtml(title)}</title>`
  )

  // Replace or add meta description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  )

  // Add OG tags + canonical + hreflang before </head>
  const seoTags = `
    <link rel="canonical" href="${SITE_URL}${route}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${SITE_URL}${route}" />
    <meta property="og:site_name" content="Goals System" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    ${esUrl ? `<link rel="alternate" hreflang="es" href="${SITE_URL}${esUrl}" />` : ''}
    ${enUrl ? `<link rel="alternate" hreflang="en" href="${SITE_URL}${enUrl}" />` : ''}`

  // Add article-specific meta + JSON-LD
  let articleTags = ''
  if (article) {
    articleTags = `
    <meta property="article:published_time" content="${article.date}" />
    <meta property="article:author" content="${escapeHtml(article.author)}" />
    <meta property="article:section" content="${escapeHtml(article.category)}" />
    <script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "author": { "@type": "Person", "name": article.author },
      "datePublished": article.date,
      "articleSection": article.category,
      "keywords": (article.tags || []).join(', '),
      "url": `${SITE_URL}${route}`,
      "publisher": { "@type": "Organization", "name": "Goals System" }
    })}</script>`
  }

  // Add noscript fallback with real content for crawlers
  let noscriptContent = ''
  if (article && article.body) {
    noscriptContent = `<noscript><article><h1>${escapeHtml(article.title)}</h1><p>${escapeHtml(article.excerpt)}</p><div>${markdownToBasicHtml(article.body)}</div></article></noscript>`
  }

  html = html.replace('</head>', `${seoTags}${articleTags}\n  </head>`)

  // Add noscript content inside the root div
  if (noscriptContent) {
    html = html.replace('<div id="root"></div>', `<div id="root">${noscriptContent}</div>`)
  }

  return html
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function markdownToBasicHtml(md) {
  // Very basic markdown to HTML for noscript fallback
  return escapeHtml(md)
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br/>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

function writeRoute(route, html) {
  if (route === '/') {
    fs.writeFileSync(path.join(DIST, 'index.html'), html)
  } else {
    const dir = path.join(DIST, route)
    ensureDir(dir)
    fs.writeFileSync(path.join(dir, 'index.html'), html)
  }
}

// ─── Static Pages ───
const staticPages = [
  {
    route: '/',
    title: 'Goals System - Control de finanzas personales, open source',
    description: 'Goals System es una herramienta open source para registrar ingresos y gastos, definir presupuestos mensuales y visualizar reportes claros. Sin publicidad.',
  },
  {
    route: '/download',
    title: 'Descarga | Goals System',
    description: 'Descarga Goals System gratis. Sigue los pasos para instalar el servidor y cliente, o prueba la versión en línea.',
  },
  {
    route: '/blog',
    title: 'Blog | Goals System',
    description: 'Guías, consejos y novedades sobre finanzas personales y Goals System.',
  },
  {
    route: '/team',
    title: 'Equipo | Goals System',
    description: 'Conoce al equipo detrás de Goals System y descubre cómo contribuir al proyecto open source.',
  },
  {
    route: '/donate',
    title: 'Donar | Goals System',
    description: 'Apoya Goals System. Tu donación ayuda a cubrir costos de infraestructura y desarrollo.',
  },
]

let count = 0

// Prerender static pages
const languages = ['es', 'en']
for (const lang of languages) {
  for (const page of staticPages) {
    const route = `/${lang}${page.route}`
    const html = createPage({
      ...page,
      route,
      esUrl: `/es${page.route}`,
      enUrl: `/en${page.route}`
    })
    writeRoute(route, html)
    count++
  }
}

// ─── Blog Posts ───
for (const lang of languages) {
  const dir = path.join(CONTENT_DIR, lang)
  if (!fs.existsSync(dir)) continue

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    const { attributes, body } = fm(raw)
    const slug = file.replace('.md', '')
    const route = `/${lang}/blog/${slug}`

    const html = createPage({
      route,
      title: `${attributes.title || slug} | Goals System`,
      description: attributes.excerpt || '',
      ogType: 'article',
      article: {
        title: attributes.title || slug,
        excerpt: attributes.excerpt || '',
        date: attributes.date || '',
        author: attributes.author || 'Goals Team',
        category: attributes.category || 'General',
        tags: attributes.tags || [],
        body,
      },
    })

    writeRoute(route, html)
    count++
  }
}

console.log(`✓ Pre-rendered ${count} pages with SEO meta tags`)
