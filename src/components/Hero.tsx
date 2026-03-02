import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useI18n } from '../i18n'

export default function Hero() {
  const { t } = useI18n()
  return (
    <section className="container py-24 md:py-32 text-center flex flex-col items-center justify-center min-h-[80vh] animate-fade-in-up">
      <div className="flex justify-center mb-10 relative">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"></div>
        <div className="relative">
          <Logo size={96} rounded />
        </div>
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter mb-6 dark:text-white max-w-4xl mx-auto leading-[1.1]">
        {t('hero.title')}
      </h1>
      <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
        {t('hero.subtitle')}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        <span className="rounded-full bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary-light px-4 py-1.5 text-sm font-bold tracking-wide uppercase">{t('hero.badge.os')}</span>
        <span className="rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase">{t('hero.badge.noads')}</span>
        <span className="rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase">{t('hero.badge.privacy')}</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <a href="https://fernandofedora.github.io/goal-document/user/guia-inicio/" className="btn btn-outline w-full sm:w-auto text-lg h-14 px-8">{t('hero.docs')}</a>
        <Link to="/download" className="btn btn-primary w-full sm:w-auto text-lg h-14 px-8 shadow-lg shadow-primary/25">{t('hero.start')}</Link>
      </div>
    </section>
  )
}
