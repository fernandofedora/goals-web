import { useI18n } from '../i18n'

export default function Donate() {
  const { t } = useI18n()
  return (
    <section className="container py-20 animate-fade-in-up">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tighter mb-10 text-center dark:text-white">{t('donate.title')}</h1>

        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-8 md:p-12 mb-16 shadow-sm text-center">
          <div className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 space-y-6 leading-relaxed max-w-3xl mx-auto font-medium">
            {t('donate.intro.full').split('\n').filter(Boolean).map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold mb-8 dark:text-white text-center">{t('donate.methods.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-center">
          <div className="group rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-16 w-16 mx-auto rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center text-3xl font-bold mb-6 group-hover:scale-110 transition-transform">P</div>
            <h3 className="text-2xl font-bold mb-3 dark:text-neutral-100">{t('donate.methods.paypal.title')}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">{t('donate.methods.paypal.desc')}</p>
            <a href="#" className="btn btn-primary w-full h-12 text-lg shadow-md">{t('donate.methods.paypal.cta')}</a>
          </div>
          <div className="group rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <span className="text-8xl font-black">Pa</span>
            </div>
            <div className="relative z-10">
              <div className="h-16 w-16 mx-auto rounded-2xl bg-[#ff424d]/10 text-[#ff424d] flex items-center justify-center text-3xl font-bold mb-6 group-hover:scale-110 transition-transform">Pa</div>
              <h3 className="text-2xl font-bold mb-3 dark:text-neutral-100">{t('donate.methods.patreon.title')}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">{t('donate.methods.patreon.desc')}</p>
              <a href="#" className="btn w-full h-12 text-lg text-white bg-[#ff424d] hover:bg-[#e63b45] shadow-md">{t('donate.methods.patreon.cta')}</a>
            </div>
          </div>
          <div className="group rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="h-16 w-16 mx-auto rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white flex items-center justify-center text-3xl font-bold mb-6 group-hover:scale-110 transition-transform">GH</div>
            <h3 className="text-2xl font-bold mb-3 dark:text-neutral-100">{t('donate.methods.sponsors.title')}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">{t('donate.methods.sponsors.desc')}</p>
            <a href="#" className="btn w-full h-12 text-lg bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 shadow-md">{t('donate.methods.sponsors.cta')}</a>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold mb-4 dark:text-white">{t('donate.other.title')}</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">{t('donate.other.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: '↗', title: t('donate.other.share.title'), desc: t('donate.other.share.desc') },
            { icon: '<>', title: t('donate.other.code.title'), desc: t('donate.other.code.desc') },
            { icon: '🌍', title: t('donate.other.translate.title'), desc: t('donate.other.translate.desc') },
            { icon: '📘', title: t('donate.other.docs.title'), desc: t('donate.other.docs.desc') }
          ].map((item, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-6 flex gap-6 items-start hover:border-primary/30 transition-colors">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-2xl font-bold">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-neutral-100 mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
