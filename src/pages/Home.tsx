import Hero from '../components/Hero'
import Section from '../components/Section'
import FeatureCard from '../components/FeatureCard'
import { useI18n } from '../i18n'

export default function Home() {
  const { t } = useI18n()
  return (
    <>
      <Hero />
      <Section title={t('home.what_is.title')}>
        <p className="text-neutral-700 dark:text-neutral-300 max-w-3xl">
          {t('home.what_is.desc')}
        </p>
      </Section>
      <Section title={t('home.features.title')}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title={t('feature.categories.title')}
            description={t('feature.categories.desc')}
          />
          <FeatureCard
            title={t('feature.cards.title')}
            description={t('feature.cards.desc')}
          />
          <FeatureCard
            title={t('feature.budget.title')}
            description={t('feature.budget.desc')}
          />
          <FeatureCard
            title={t('feature.transactions.title')}
            description={t('feature.transactions.desc')}
          />
          <FeatureCard
            title={t('feature.dashboard.title')}
            description={t('feature.dashboard.desc')}
          />
          <FeatureCard
            title={t('feature.privacy.title')}
            description={t('feature.privacy.desc')}
          />
        </div>
      </Section>
      <Section title={t('home.start.how_title')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            {[1,2,3,4].map((n) => {
              const title = t(`home.start.step${n}.title`)
              const desc = t(`home.start.step${n}.desc`)
              return (
                <div key={n} className="flex items-start gap-4 mb-6">
                  <span className="h-8 w-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm">{n}</span>
                  <div>
                    <h3 className="text-base font-semibold">{title}</h3>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">{desc}</p>
                  </div>
                </div>
              )
            })}
            <div className="mt-6 flex gap-4">
              <a href="https://fernandofedora.github.io/goal-document/user/guia-inicio/" className="btn btn-outline">{t('home.start.full_guide')}</a>
              <a href="/download" className="btn btn-primary">{t('home.start.download')}</a>
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-0 overflow-hidden bg-emerald-50 dark:bg-neutral-900">
            <img
              src="/how-to-start.svg"
              alt={t('home.start.how_title')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
