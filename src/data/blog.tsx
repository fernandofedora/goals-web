import fm from 'front-matter'
import { blogIndex, type BlogPostMeta } from './blogIndex'

export type { BlogPostMeta }

export type BlogPost = BlogPostMeta & {
  content: string
}

// Lazy content loaders — each .md becomes its own chunk, NOT in the main bundle
const contentLoaders: Record<string, Record<string, () => Promise<string>>> = {
  es: import.meta.glob('../content/blog/es/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>,
  en: import.meta.glob('../content/blog/en/*.md', { query: '?raw', import: 'default' }) as Record<string, () => Promise<string>>,
}

// In-memory cache for loaded content
const contentCache: Record<string, string> = {}

/** Synchronous — metadata comes from the tiny pre-generated index */
export function getPosts(lang: 'es' | 'en'): BlogPostMeta[] {
  return blogIndex[lang] || []
}

/** Synchronous — metadata lookup */
export function getPostMeta(lang: 'es' | 'en', slug: string): BlogPostMeta | undefined {
  return getPosts(lang).find((p) => p.slug === slug)
}

/** Async — loads the .md chunk on demand, caches the result */
export async function getPostContent(lang: 'es' | 'en', slug: string): Promise<string | null> {
  const cacheKey = `${lang}/${slug}`
  if (contentCache[cacheKey]) return contentCache[cacheKey]

  const loaders = contentLoaders[lang]
  const matchingKey = Object.keys(loaders).find((k) => k.includes(`/${slug}.md`))
  if (!matchingKey) return null

  const raw = await loaders[matchingKey]()
  const { body } = fm<Record<string, unknown>>(raw)
  contentCache[cacheKey] = body
  return body
}

export function getCategories(lang: 'es' | 'en'): string[] {
  const list = getPosts(lang)
  const categories = new Set(list.map((p) => p.category))
  return Array.from(categories).sort()
}
