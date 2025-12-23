import { useI18n } from '../i18n'

export default function Donate() {
  const { t } = useI18n()
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6 dark:text-neutral-100">{t('donate.title')}</h1>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 mb-10">
        <div className="text-neutral-700 dark:text-neutral-300 space-y-4">
          {t('donate.intro.full').split('\n').filter(Boolean).map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 dark:text-neutral-100">{t('donate.methods.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center text-xl mb-4">P</div>
          <h3 className="text-lg font-semibold mb-2 dark:text-neutral-100">{t('donate.methods.paypal.title')}</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">{t('donate.methods.paypal.desc')}</p>
          <a href="#" className="btn btn-primary">{t('donate.methods.paypal.cta')}</a>
        </div>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center text-xl mb-4">Pa</div>
          <h3 className="text-lg font-semibold mb-2 dark:text-neutral-100">{t('donate.methods.patreon.title')}</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">{t('donate.methods.patreon.desc')}</p>
          <a href="#" className="btn btn-primary">{t('donate.methods.patreon.cta')}</a>
        </div>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center text-xl mb-4">GH</div>
          <h3 className="text-lg font-semibold mb-2 dark:text-neutral-100">{t('donate.methods.sponsors.title')}</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">{t('donate.methods.sponsors.desc')}</p>
          <a href="#" className="btn btn-primary">{t('donate.methods.sponsors.cta')}</a>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-2 dark:text-neutral-100">{t('donate.other.title')}</h2>
      <p className="text-neutral-700 dark:text-neutral-300 mb-6">{t('donate.other.subtitle')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <div className="h-10 w-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center mb-4">↗</div>
          <h3 className="text-lg font-semibold dark:text-neutral-100 mb-1">{t('donate.other.share.title')}</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{t('donate.other.share.desc')}</p>
        </div>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <div className="h-10 w-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center mb-4">{'<>'}</div>
          <h3 className="text-lg font-semibold dark:text-neutral-100 mb-1">{t('donate.other.code.title')}</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{t('donate.other.code.desc')}</p>
        </div>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <div className="h-10 w-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center mb-4">🌍</div>
          <h3 className="text-lg font-semibold dark:text-neutral-100 mb-1">{t('donate.other.translate.title')}</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{t('donate.other.translate.desc')}</p>
        </div>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <div className="h-10 w-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center mb-4">📘</div>
          <h3 className="text-lg font-semibold dark:text-neutral-100 mb-1">{t('donate.other.docs.title')}</h3>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{t('donate.other.docs.desc')}</p>
        </div>
      </div>
    </section>
  )
}
