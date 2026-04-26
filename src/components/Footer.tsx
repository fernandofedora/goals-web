import { useI18n } from '../i18n'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t, lang } = useI18n()
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black py-12 md:py-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to={`/${lang}`} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
            <Logo size={28} rounded />
            <span className="text-lg font-heading font-bold tracking-tight text-neutral-900 dark:text-white">Goals System</span>
          </Link>
          <p className="text-sm text-neutral-500 font-medium">© {new Date().getFullYear()} Goals System</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold">
          <a href="https://fernandofedora.github.io/goal-document/user/guia-inicio/" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary-light transition-colors">{t('footer.docs')}</a>
          <a href="https://github.com/fernandofedora/goals-client" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary-light transition-colors">GitHub Frontend</a>
          <a href="https://github.com/fernandofedora/goals-server" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary-light transition-colors">GitHub Backend</a>
        </div>
      </div>
    </footer>
  )
}
