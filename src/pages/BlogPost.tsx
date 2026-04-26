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
        <Link to={`/${lang}/blog`} className="btn btn-primary h-12 px-8">{t('blog.back')}</Link>
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

      <section className="container py-16 md:py-24 animate-fade-in-up">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
              <span className="rounded-full bg-primary/10 text-primary dark:bg-primary/15 dark:text-primary-light px-3.5 py-1 font-semibold tracking-wide uppercase text-xs">
                {post.category}
              </span>
              <span className="text-neutral-400 dark:text-neutral-600">·</span>
              <time dateTime={post.date} className="text-neutral-500 dark:text-neutral-400">
                {formattedDate}
              </time>
              <span className="text-neutral-400 dark:text-neutral-600">·</span>
              <span className="text-neutral-500 dark:text-neutral-400">{post.author}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight mb-5 leading-[1.1] text-neutral-900 dark:text-white">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {post.excerpt}
            </p>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="text-xs font-medium text-neutral-500 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800/60 rounded-md px-2.5 py-1">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent mb-12"></div>

          {/* Content */}
          {loading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-5/6"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-4/6"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-full"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-3/6"></div>
            </div>
          ) : (
            <article className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-2xl max-w-none mb-16">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content || ''}
              </ReactMarkdown>
            </article>
          )}

          <div className="mt-20 pt-8 border-t border-neutral-200/60 dark:border-neutral-800/60 flex justify-center">
            <Link to={`/${lang}/blog`} className="btn btn-outline h-12 px-8 flex items-center gap-2">
              <span>←</span> {t('blog.back')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
