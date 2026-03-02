import { useI18n } from '../i18n'

export default function Download() {
  const { t } = useI18n()
  return (
    <section className="container py-20 animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-6 dark:text-white text-center md:text-left">{t('download.title')}</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 font-medium text-center md:text-left">{t('download.intro')}</p>

        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-8 md:p-10 mb-8 shadow-sm">
          <h2 className="text-2xl font-heading font-bold mb-4 dark:text-neutral-100">{t('download.source.title')}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">{t('download.source.desc')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-50 dark:bg-black rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800 group hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">{t('download.source.frontend')}</span>
                <a href="https://github.com/fernandofedora/goals-client" target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-1 transition-colors">
                  {t('download.view_github')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <code className="block bg-neutral-200/50 dark:bg-neutral-900 px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm overflow-x-auto font-mono text-neutral-700 dark:text-neutral-300 select-all">
                git clone https://github.com/fernandofedora/goals-client.git
              </code>
            </div>

            <div className="bg-neutral-50 dark:bg-black rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800 group hover:border-primary/30 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">{t('download.source.backend')}</span>
                <a href="https://github.com/fernandofedora/goals-server" target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary hover:text-primary-dark flex items-center gap-1 transition-colors">
                  {t('download.view_github')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <code className="block bg-neutral-200/50 dark:bg-neutral-900 px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm overflow-x-auto font-mono text-neutral-700 dark:text-neutral-300 select-all">
                git clone https://github.com/fernandofedora/goals-server.git
              </code>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <a href="https://fernandofedora.github.io/goal-document/user/guia-inicio/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-bold text-lg transition-colors group">
              {t('download.source.full_guide')} <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-8 shadow-sm">
            <h2 className="text-xl font-heading font-bold mb-4">{t('download.requirements')}</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">✓</span>
                {t('download.req.node')}
              </li>
              <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">✓</span>
                {t('download.req.browser')}
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8">
            <h2 className="text-xl font-heading font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🚧</span> {t('download.soon')}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 font-medium">{t('download.soon.desc')}</p>
          </div>
        </div>

        <div className="rounded-3xl border border-primary/20 p-8 md:p-10 bg-primary/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-2 text-primary-dark dark:text-primary-light">{t('download.online.title')}</h2>
              <p className="text-neutral-700 dark:text-neutral-300 max-w-xl text-lg">{t('download.online.note')}</p>
            </div>
            <a
              href="https://goals.zeabur.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary whitespace-nowrap text-lg h-14 px-8 shadow-lg shadow-primary/25"
            >
              {t('download.online.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
