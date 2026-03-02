import BlogCard from '../components/BlogCard'
import { useI18n } from '../i18n'
import { getPosts } from '../data/blog'

export default function Blog() {
  const { t, lang } = useI18n()
  const posts = getPosts(lang)
  return (
    <section className="container py-20 animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-4 dark:text-white">{t('blog.title')}</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 font-medium">{t('blog.subtitle') || 'Read the latest updates and guides.'}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <BlogCard key={p.slug} slug={p.slug} title={p.title} excerpt={p.excerpt} date={p.date} tags={p.tags} />
          ))}
        </div>
      </div>
    </section>
  )
}
