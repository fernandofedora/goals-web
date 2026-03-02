import { useI18n } from '../i18n'

export default function Team() {
  const { t } = useI18n()
  return (
    <section className="container py-20 animate-fade-in-up">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-12 text-center">{t('team.title')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <article className="group rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-10 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
            <img src="https://github.com/solinkp.png" alt="solinkp" className="h-32 w-32 rounded-3xl mb-6 shadow-xl object-cover" />
            <h3 className="text-2xl font-bold mb-2">solinkp</h3>
            <p className="text-primary font-medium mb-8">{t('team.member.role')}</p>
            <a href="https://github.com/solinkp" target="_blank" rel="noreferrer" className="btn btn-outline w-full rounded-xl">GitHub Profile</a>
          </article>
          <article className="group rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-10 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors"></div>
            <img src="https://github.com/gonlex.png" alt="gonlex" className="h-32 w-32 rounded-3xl mb-6 shadow-xl object-cover" />
            <h3 className="text-2xl font-bold mb-2">Henry González</h3>
            <p className="text-primary font-medium mb-8">{t('team.member.role')}</p>
            <a href="https://github.com/gonlex" target="_blank" rel="noreferrer" className="btn btn-outline w-full rounded-xl">GitHub Profile</a>
          </article>
        </div>

        <div className="rounded-[40px] bg-neutral-900 dark:bg-black text-white p-12 md:p-16 mb-20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">{t('team.join.title')}</h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed">{t('team.join.desc')}</p>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn-primary text-lg h-14 px-10 shadow-lg shadow-primary/25">{t('team.join.cta')}</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-start">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-4">{t('team.contact.title')}</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              {t('team.contact.desc')}
            </p>
            <div className="rounded-2xl border border-yellow-200/50 bg-yellow-50/50 dark:bg-yellow-900/10 dark:border-yellow-700/30 text-yellow-800 dark:text-yellow-500 p-6 text-sm font-medium">
              {t('team.contact.note')}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-6 flex items-start gap-6 hover:border-primary/30 transition-colors">
              <span className="h-14 w-14 shrink-0 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-2xl">🐛</span>
              <div>
                <h3 className="text-xl font-bold mb-2">{t('team.contact.issues.title')}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">{t('team.contact.issues.desc')}</p>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-primary font-bold hover:text-primary-dark transition-colors">{t('team.contact.issues.cta')} →</a>
              </div>
            </div>
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-6 flex items-start gap-6 hover:border-primary/30 transition-colors">
              <span className="h-14 w-14 shrink-0 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-2xl">💬</span>
              <div>
                <h3 className="text-xl font-bold mb-2">{t('team.contact.discussions.title')}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">{t('team.contact.discussions.desc')}</p>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-primary font-bold hover:text-primary-dark transition-colors">{t('team.contact.discussions.cta')} →</a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">{t('team.faq.title')}</h2>
          <div className="space-y-6">
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-900/50">
              <h3 className="text-xl font-bold mb-4">{t('team.faq.contribute.question')}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                {t('team.faq.contribute.answer')}
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-900/50">
              <h3 className="text-xl font-bold mb-4">{t('team.faq.free.question')}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                {t('team.faq.free.answer')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
