import { useState, useMemo } from 'react'
import BlogCard from '../components/BlogCard'
import { useI18n } from '../i18n'
import { getPosts, getCategories } from '../data/blog'
import { useDebounce } from '../hooks/useDebounce'

const POSTS_PER_PAGE = 9

export default function Blog() {
  const { t, lang } = useI18n()
  const posts = getPosts(lang)
  const categories = getCategories(lang)

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const debouncedSearch = useDebounce(searchQuery, 300)

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const q = debouncedSearch.toLowerCase()
      const matchesSearch = post.title.toLowerCase().includes(q) ||
                            post.excerpt.toLowerCase().includes(q)
      const matchesCategory = selectedCategory ? post.category === selectedCategory : true
      return matchesSearch && matchesCategory
    })
  }, [posts, debouncedSearch, selectedCategory])

  // Reset to page 1 when filters change
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const safePage = Math.min(currentPage, totalPages)
  const paginatedPosts = filteredPosts.slice((safePage - 1) * POSTS_PER_PAGE, safePage * POSTS_PER_PAGE)

  const handleCategoryChange = (cat: string | null) => {
    setSelectedCategory(cat)
    setCurrentPage(1)
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  return (
    <>
      <title>{t('blog.title')} | Goals System</title>
      <meta name="description" content={t('blog.subtitle') || 'Read the latest updates and guides.'} />

      <section className="container py-20 animate-fade-in-up">
        <div className="max-w-5xl mx-auto">
          {/* Hidden h1 for SEO — the nav already tells the user where they are */}
          <h1 className="sr-only">{t('blog.title')} | Goals System</h1>

          {/* Compact header — no redundant "Blog" title */}
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 font-medium max-w-xl">
            {t('blog.subtitle')}
          </p>

          {/* Filters and Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === null
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700'
                }`}
              >
                {lang === 'es' ? 'Todos' : 'All'}
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <input
                type="search"
                placeholder={lang === 'es' ? 'Buscar artículos...' : 'Search articles...'}
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((p) => (
                <BlogCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  date={p.date}
                  category={p.category}
                  author={p.author}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-neutral-500">
                {lang === 'es' ? 'No se encontraron artículos.' : 'No articles found.'}
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={safePage <= 1}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-neutral-200 dark:border-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    safePage === page
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                      : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={safePage >= totalPages}
                className="px-4 py-2 rounded-lg text-sm font-medium border border-neutral-200 dark:border-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                →
              </button>
            </nav>
          )}
        </div>
      </section>
    </>
  )
}
