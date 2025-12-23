import { useI18n } from '../i18n'

export default function Download() {
  const { t } = useI18n()
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">{t('download.title')}</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mb-8">{t('download.intro')}</p>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
        <h2 className="text-xl font-semibold mb-3">{t('download.getting_started')}</h2>
        <ol className="list-decimal ml-5 space-y-2 text-sm">
          <li>{t('download.step.clone')}</li>
          <li>{t('download.step.install')}</li>
          <li>{t('download.step.env')}</li>
          <li>{t('download.step.client')}</li>
        </ol>
        <div className="mt-6">
          <a href="https://fernandofedora.github.io/goal-document/user/guia-inicio/" className="btn btn-outline">{t('download.guide')}</a>
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
