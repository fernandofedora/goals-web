import { useParams, Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { getPostBySlug } from '../data/blog'

export default function BlogPost() {
  const { slug = '' } = useParams()
  const { lang, t } = useI18n()
  const post = getPostBySlug(lang, slug)
  if (!post) {
    return (
      <section className="container py-12">
        <h1 className="text-3xl font-bold mb-4">404</h1>
        <p className="mb-6">{t('blog.not_found')}</p>
        <Link to="/blog" className="btn btn-outline">{t('blog.back')}</Link>
      </section>
    )
  }
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-xs text-neutral-500 mt-1">{post.date}</p>
      <div className="mt-4 flex gap-2">
        {post.tags.map((t) => (
          <span key={t} className="text-xs rounded-full bg-primary/10 text-primary px-2 py-1">{t}</span>
        ))}
      </div>
      <article className="prose dark:prose-invert max-w-none mt-6">
        {post.content}
      </article>
      <div className="mt-8">
        <Link to="/blog" className="btn btn-outline">{t('blog.back')}</Link>
      </div>
    </section>
  )
}
