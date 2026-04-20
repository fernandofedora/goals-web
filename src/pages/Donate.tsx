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

        <h2 className="text-3xl font-heading font-bold mb-10 dark:text-white text-center">{t('donate.methods.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-3xl mx-auto">

          {/* PayPal Card */}
          <a
            href="https://paypal.me/fernoel95"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-[#003087] via-[#009cde] to-[#00457c] hover:shadow-2xl hover:shadow-[#009cde]/25 hover:-translate-y-2 transition-all duration-500 block"
          >
            <div className="rounded-[22px] bg-white dark:bg-neutral-950 p-8 h-full text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#003087]/5 via-transparent to-[#009cde]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="h-20 w-20 mx-auto rounded-2xl bg-gradient-to-br from-[#003087] to-[#009cde] text-white flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-[#009cde]/30">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 dark:text-neutral-100">{t('donate.methods.paypal.title')}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8 text-lg">{t('donate.methods.paypal.desc')}</p>
                <span className="inline-flex items-center justify-center gap-2 w-full h-14 text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-[#003087] to-[#009cde] group-hover:shadow-lg group-hover:shadow-[#009cde]/30 transition-all duration-300">
                  {t('donate.methods.paypal.cta')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </div>
            </div>
          </a>

          {/* GitHub Sponsors Card */}
          <a
            href="https://github.com/sponsors/fernandofedora"
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-3xl p-[2px] bg-gradient-to-br from-[#2d333b] via-[#444c56] to-[#1a1e24] dark:from-[#c9d1d9] dark:via-[#8b949e] dark:to-[#c9d1d9] hover:shadow-2xl hover:shadow-neutral-500/20 hover:-translate-y-2 transition-all duration-500 block"
          >
            <div className="rounded-[22px] bg-white dark:bg-neutral-950 p-8 h-full text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-100/50 via-transparent to-neutral-200/30 dark:from-neutral-800/30 dark:to-neutral-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="h-20 w-20 mx-auto rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-950 dark:from-white dark:to-neutral-200 text-white dark:text-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg shadow-neutral-500/30">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 dark:text-neutral-100">{t('donate.methods.sponsors.title')}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 mb-8 text-lg">{t('donate.methods.sponsors.desc')}</p>
                <span className="inline-flex items-center justify-center gap-2 w-full h-14 text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-neutral-800 to-neutral-950 dark:from-white dark:to-neutral-200 dark:text-neutral-900 group-hover:shadow-lg group-hover:shadow-neutral-500/20 transition-all duration-300">
                  <svg className="w-5 h-5 text-pink-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  {t('donate.methods.sponsors.cta')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </div>
            </div>
          </a>

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
