import Hero from '../components/Hero'
import Section from '../components/Section'
import FeatureCard from '../components/FeatureCard'
import { useI18n } from '../i18n'

export default function Home() {
  const { t } = useI18n()
  return (
    <>
      <Hero />
      <section className="container py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
            <div className="rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800/80 aspect-[4/3] flex items-center justify-center p-8 relative z-10 border border-neutral-200/50 dark:border-neutral-700/50 shadow-2xl">
              <img
                src="/project-mockup.svg"
                alt="Goals System Mockup"
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 dark:text-white tracking-tight">{t('home.what_is.title')}</h2>
            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p className="font-medium text-neutral-800 dark:text-neutral-200">{t('home.what_is.p1')}</p>
              <p>{t('home.what_is.p2')}</p>
              <p>{t('home.what_is.p3')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-neutral-900 dark:bg-black text-white py-24 md:py-32">
        <Section title={t('home.features.title')} className="dark">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
            <FeatureCard
              title={t('feature.categories.title')}
              description={t('feature.categories.desc')}
              icon="📁"
            />
            <FeatureCard
              title={t('feature.cards.title')}
              description={t('feature.cards.desc')}
              icon="💳"
            />
            <FeatureCard
              title={t('feature.budget.title')}
              description={t('feature.budget.desc')}
              icon="📊"
            />
            <FeatureCard
              title={t('feature.transactions.title')}
              description={t('feature.transactions.desc')}
              icon="💸"
            />
            <FeatureCard
              title={t('feature.dashboard.title')}
              description={t('feature.dashboard.desc')}
              icon="📈"
            />
            <FeatureCard
              title={t('feature.privacy.title')}
              description={t('feature.privacy.desc')}
              icon="🔒"
            />
          </div>
        </Section>
      </div>

      <Section title={t('home.start.how_title')} className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {[1, 2, 3, 4].map((n) => {
              const title = t(`home.start.step${n}.title`)
              const desc = t(`home.start.step${n}.desc`)
              return (
                <div key={n} className="flex items-start gap-6 group">
                  <span className="h-12 w-12 shrink-0 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    {n}
                  </span>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2 dark:text-neutral-100">{title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{desc}</p>
                  </div>
                </div>
              )
            })}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://fernandofedora.github.io/goal-document/user/guia-inicio/" className="btn btn-outline text-lg h-14 px-8">{t('home.start.full_guide')}</a>
              <a href="/download" className="btn btn-primary text-lg h-14 px-8 shadow-lg shadow-primary/25">{t('home.start.download')}</a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-50"></div>
            <img
              src="/how-to-start.svg"
              alt={t('home.start.how_title')}
              className="w-full h-full object-cover p-12 group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
