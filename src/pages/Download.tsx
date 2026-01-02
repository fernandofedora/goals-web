import { useI18n } from '../i18n'

export default function Download() {
  const { t } = useI18n()
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">{t('download.title')}</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mb-8">{t('download.intro')}</p>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
        <h2 className="text-xl font-semibold mb-3">{t('download.source.title')}</h2>
        <p className="text-neutral-700 dark:text-neutral-300 mb-6">{t('download.source.desc')}</p>
        
        <div className="space-y-4">
          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-sm">{t('download.source.frontend')}</span>
              <a href="https://github.com/fernandofedora/goals-client" target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline flex items-center gap-1">
                {t('download.view_github')}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
            <code className="block bg-white dark:bg-black p-3 rounded border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm overflow-x-auto font-mono text-neutral-600 dark:text-neutral-400">
              git clone https://github.com/fernandofedora/goals-client.git
            </code>
          </div>

          <div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-sm">{t('download.source.backend')}</span>
              <a href="https://github.com/fernandofedora/goals-server" target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline flex items-center gap-1">
                {t('download.view_github')}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
            <code className="block bg-white dark:bg-black p-3 rounded border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm overflow-x-auto font-mono text-neutral-600 dark:text-neutral-400">
              git clone https://github.com/fernandofedora/goals-server.git
            </code>
          </div>
        </div>

        <div className="mt-6">
          <a href="https://fernandofedora.github.io/goal-document/user/guia-inicio/" className="text-primary hover:underline flex items-center gap-1 font-medium text-sm">
            {t('download.source.full_guide')} <span className="text-lg">→</span>
          </a>
        </div>
      </div>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 mt-6">
        <h2 className="text-xl font-semibold mb-3">{t('download.requirements')}</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>{t('download.req.node')}</li>
          <li>{t('download.req.browser')}</li>
        </ul>
      </div>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 mt-6">
        <h2 className="text-xl font-semibold mb-3">{t('download.soon')}</h2>
        <p className="text-sm">{t('download.soon.desc')}</p>
      </div>
      <div className="rounded-xl border border-primary/20 p-6 mt-6 bg-primary/5">
        <h2 className="text-xl font-semibold mb-3">{t('download.online.title')}</h2>
        <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">{t('download.online.note')}</p>
        <a
          href="https://goals.zeabur.app/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          {t('download.online.button')}
        </a>
      </div>
    </section>
  )
}
