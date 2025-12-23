import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import { useI18n } from '../i18n'

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary' : 'text-neutral-700 dark:text-neutral-300'}`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 sticky top-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo size={32} rounded />
          <span className="text-lg font-semibold">Goals System</span>
        </Link>
        <nav className="flex items-center gap-2">
          <NavItem to="/download">{t('nav.download')}</NavItem>
          <NavItem to="/blog">{t('nav.blog')}</NavItem>
          <NavItem to="/team">{t('nav.team')}</NavItem>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-600 dark:text-neutral-300">{t('nav.language')}</span>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'es' | 'en')}
              className="text-sm border border-neutral-300 dark:border-neutral-700 rounded-md px-2 py-1 bg-white dark:bg-neutral-900"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
          <Link to="/donate" className="btn btn-primary">{t('nav.donate')}</Link>
        </div>
      </div>
    </header>
  )
}
