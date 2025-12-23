import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useI18n } from '../i18n'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="container py-20 text-center">
      <div className="flex justify-center mb-6">
        <Logo size={80} rounded />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t('hero.title')}</h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
        {t('hero.subtitle')}
      </p>
      <div className="flex items-center justify-center gap-3 mt-8">
        <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">{t('hero.badge.os')}</span>
        <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">{t('hero.badge.noads')}</span>
        <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">{t('hero.badge.privacy')}</span>
      </div>
      <div className="mt-10 flex items-center justify-center gap-4">
        <a href="https://fernandofedora.github.io/goal-document/user/guia-inicio/" className="btn btn-outline">{t('hero.docs')}</a>
        <Link to="/donate" className="btn btn-primary">{t('hero.donate')}</Link>
      </div>
    </section>
  )
}
