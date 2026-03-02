import { useParams, Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { getPostBySlug } from '../data/blog'

export default function BlogPost() {
  const { slug = '' } = useParams()
  const { lang, t } = useI18n()
  const post = getPostBySlug(lang, slug)

  if (!post) {
    return (
      <section className="container py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-7xl font-heading font-black mb-4 text-primary">404</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">{t('blog.not_found')}</p>
        <Link to="/blog" className="btn btn-primary h-12 px-8">{t('blog.back')}</Link>
      </section>
    )
  }

  return (
    <section className="container py-20 animate-fade-in-up">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <div className="flex justify-center gap-2 mb-6">
            {post.tags.map((t) => (
              <span key={t} className="text-xs font-bold rounded-full bg-primary/10 text-primary-dark dark:text-primary-light px-3 py-1 uppercase tracking-wider">{t}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-6 leading-tight dark:text-white">{post.title}</h1>
          <p className="text-lg font-mono text-neutral-500">{post.date}</p>
        </div>

        <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 mb-10"></div>

        <article className="prose prose-lg md:prose-xl dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-2xl max-w-none mb-16">
          {post.content}
        </article>

        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-center">
          <Link to="/blog" className="btn btn-outline h-12 px-8 flex items-center gap-2">
            <span>←</span> {t('blog.back')}
          </Link>
        </div>
      </div>
    </section>
  )
}
