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
    <article className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 flex flex-col">
      <h3 className="text-lg font-semibold">{title}</h3>
      {date ? <p className="text-xs text-neutral-500">{date}</p> : null}
      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-3 flex-1">{excerpt}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          {tags?.map((t) => (
            <span key={t} className="text-xs rounded-full bg-primary/10 text-primary px-2 py-1">
              {t}
            </span>
          ))}
        </div>
        <Link to={`/blog/${slug}`} className="btn btn-outline">{t('blog.read_more')}</Link>
      </div>
    </article>
  )
}
