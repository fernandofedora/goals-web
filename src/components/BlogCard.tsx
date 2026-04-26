import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'

export default function BlogCard({
  slug,
  title,
  excerpt,
  date,
  category,
  author,
}: {
  slug: string
  title: string
  excerpt: string
  date?: string
  category?: string
  author?: string
}) {
  const { lang } = useI18n()

  // Format date correctly based on language
  const formattedDate = date 
    ? new Date(date).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    : ''

  return (
    <article className="group relative flex flex-col items-start justify-between rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/50 dark:bg-neutral-900/20 p-6 sm:p-8 hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors duration-300">
      <Link to={`/${lang}/blog/${slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View Article</span>
      </Link>
      
      <div className="flex items-center gap-x-4 text-xs mb-4">
        {category && (
          <span className="relative z-20 rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 font-medium text-neutral-600 dark:text-neutral-300">
            {category}
          </span>
        )}
        {formattedDate && (
          <time dateTime={date} className="text-neutral-500">
            {formattedDate}
          </time>
        )}
      </div>

      <div className="group relative">
        <h3 className="mt-3 text-xl font-semibold leading-snug text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-4 line-clamp-3 text-sm/relaxed text-neutral-600 dark:text-neutral-400">
          {excerpt}
        </p>
      </div>

      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">
            {author && <span className="absolute inset-0" />}
            {author || 'Goals Team'}
          </p>
        </div>
      </div>
    </article>
  )
}

