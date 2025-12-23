import BlogCard from '../components/BlogCard'
import { useI18n } from '../i18n'
import { getPosts } from '../data/blog'

export default function Blog() {
  const { t, lang } = useI18n()
  const posts = getPosts(lang)
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">{t('blog.title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <BlogCard key={p.slug} slug={p.slug} title={p.title} excerpt={p.excerpt} date={p.date} tags={p.tags} />
        ))}
      </div>
    </section>
  )
}
