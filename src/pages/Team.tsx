import { useI18n } from '../i18n'

export default function Team() {
  const { t } = useI18n()
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-6">{t('team.title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col items-center text-center">
          <img src="https://github.com/solinkp.png" alt="solinkp" className="h-20 w-20 rounded-full mb-3" />
          <h3 className="text-lg font-semibold">solinkp</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">{t('team.member.role')}</p>
          <a href="https://github.com/solinkp" target="_blank" rel="noreferrer" className="btn btn-outline mt-4">GitHub</a>
        </article>
      </div>
      <div className="rounded-xl bg-neutral-50 dark:bg-neutral-900 p-10 mt-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('team.join.title')}</h2>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto mb-6">{t('team.join.desc')}</p>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn-primary">{t('team.join.cta')}</a>
      </div>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 mt-10">
        <h2 className="text-2xl font-bold mb-4">{t('team.contact.title')}</h2>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mb-6">
          {t('team.contact.desc')}
        </p>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">🐛</span>
            <div>
              <h3 className="text-base font-semibold">{t('team.contact.issues.title')}</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">{t('team.contact.issues.desc')}</p>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-primary text-sm mt-1 inline-block">{t('team.contact.issues.cta')}</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">💬</span>
            <div>
              <h3 className="text-base font-semibold">{t('team.contact.discussions.title')}</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">{t('team.contact.discussions.desc')}</p>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-primary text-sm mt-1 inline-block">{t('team.contact.discussions.cta')}</a>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 text-yellow-800 p-4 mt-6 text-sm">
          {t('team.contact.note')}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">{t('team.faq.title')}</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-neutral-100">{t('team.faq.contribute.question')}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t('team.faq.contribute.answer')}
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 shadow-sm">
            <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-neutral-100">{t('team.faq.free.question')}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {t('team.faq.free.answer')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
