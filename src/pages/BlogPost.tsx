import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useI18n } from '../i18n'
import { getPostMeta, getPostContent } from '../data/blog'

export default function BlogPost() {
  const { slug = '' } = useParams()
  const { lang, t } = useI18n()
  const post = getPostMeta(lang, slug)

  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    getPostContent(lang, slug).then((body) => {
      if (!cancelled) {
        setContent(body)
        setLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [lang, slug])

  if (!post) {
    return (
      <section className="container py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-7xl font-heading font-black mb-4 text-primary">404</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">{t('blog.not_found')}</p>
        <Link to="/blog" className="btn btn-primary h-12 px-8">{t('blog.back')}</Link>
      </section>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": { "@type": "Person", "name": post.author },
    "datePublished": post.date,
    "articleSection": post.category,
    "keywords": post.tags.join(', ')
  }

  return (
    <>
      <title>{post.title} | Goals System</title>
      <meta name="description" content={post.excerpt} />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <section className="container py-20 animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          {/* Header — renders instantly from cached metadata */}
          <div className="mb-10">
            <div className="flex items-center gap-x-4 text-sm mb-6">
              <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 font-medium text-neutral-600 dark:text-neutral-300">
                {post.category}
              </span>
              <time dateTime={post.date} className="text-neutral-500">
                {formattedDate}
              </time>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-500 font-medium">{post.author}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-6 leading-tight dark:text-white">
              {post.title}
            </h1>
          </div>

          <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 mb-10"></div>

          {/* Content — loaded lazily */}
          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-4/6"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-3/6"></div>
            </div>
          ) : (
            <article className="prose prose-lg md:prose-xl dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-2xl max-w-none mb-16">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content || ''}
              </ReactMarkdown>
            </article>
          )}

          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-start">
            <Link to="/blog" className="btn btn-outline h-12 px-8 flex items-center gap-2">
              <span>←</span> {t('blog.back')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
