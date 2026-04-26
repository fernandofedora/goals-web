const fs = require('fs')
const path = require('path')
const fm = require('front-matter')

const SITE_URL = 'https://goalssis.org'
const TODAY = new Date().toISOString().split('T')[0]

// Static pages
const basePages = [
  { url: '', priority: '1.0', changefreq: 'monthly' },
  { url: '/download', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.9', changefreq: 'weekly' },
  { url: '/team', priority: '0.6', changefreq: 'monthly' },
  { url: '/donate', priority: '0.5', changefreq: 'monthly' },
]

const languages = ['es', 'en']
const staticPages = []

// Generate static pages for each language
for (const lang of languages) {
  for (const page of basePages) {
    staticPages.push({
      url: `/${lang}${page.url}`,
      priority: page.priority,
      changefreq: page.changefreq,
      // Need alternative paths for hreflang
      esUrl: `/es${page.url}`,
      enUrl: `/en${page.url}`,
    })
  }
}

// Dynamic blog post pages
const blogPages = []
const contentDir = path.resolve(__dirname, '..', 'src', 'content', 'blog')

for (const lang of languages) {
  const dir = path.join(contentDir, lang)
  if (!fs.existsSync(dir)) continue

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))
  for (const file of files) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    const { attributes } = fm(raw)
    const slug = file.replace('.md', '')
    blogPages.push({
      url: `/${lang}/blog/${slug}`,
      lastmod: attributes.date || TODAY,
      priority: '0.7',
      changefreq: 'monthly',
      // We don't have automatic translations between blog posts (slugs differ),
      // so we don't add hreflang for blog posts yet, or we'd need to map them.
      esUrl: null,
      enUrl: null,
    })
  }
}

const allPages = [...staticPages, ...blogPages]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages.map(p => {
  let item = `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${p.lastmod || TODAY}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>`
  if (p.esUrl && p.enUrl) {
    item += `
    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}${p.esUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${p.enUrl}" />`
  }
  item += `\n  </url>`
  return item
}).join('\n')}
</urlset>
`

const outPath = path.resolve(__dirname, '..', 'public', 'sitemap.xml')
fs.writeFileSync(outPath, xml)
console.log(`✓ Sitemap generated with ${allPages.length} URLs`)
