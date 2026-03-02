import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  tags,
}: {
  slug: string
  title: string
  excerpt: string
  date?: string
  tags?: string[]
}) {
  const { t } = useI18n()
  return (
    <article className="group rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-8 flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="flex gap-2 mb-4">
        {tags?.map((tag) => (
          <span key={tag} className="text-[10px] font-bold rounded-full bg-primary/10 text-primary-dark dark:text-primary-light px-2.5 py-1 uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-heading font-bold mb-3 dark:text-neutral-100 group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
      {date ? <p className="text-xs font-mono text-neutral-500 mb-4">{date}</p> : null}

      <p className="text-base text-neutral-600 dark:text-neutral-400 mt-2 flex-1 leading-relaxed line-clamp-3 mb-6">
        {excerpt}
      </p>

      <div className="mt-auto pt-6 border-t border-neutral-100 dark:border-neutral-800/80">
        <Link to={`/blog/${slug}`} className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors group-hover:translate-x-1 transform duration-300">
          {t('blog.read_more')} <span>→</span>
        </Link>
      </div>
    </article>
  )
}
