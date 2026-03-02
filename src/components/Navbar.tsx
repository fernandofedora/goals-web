import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import { useI18n } from '../i18n'
import ThemeToggle from './ThemeToggle'

function NavItem({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white'}`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header className="border-b border-neutral-200/60 dark:border-neutral-800/60 sticky top-0 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl z-50">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="transition-transform group-hover:scale-105">
            <Logo size={36} rounded />
          </div>
          <span className="text-xl font-heading font-bold tracking-tight text-neutral-900 dark:text-white">Goals System</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/download">{t('nav.download')}</NavItem>
          <NavItem to="/blog">{t('nav.blog')}</NavItem>
          <NavItem to="/team">{t('nav.team')}</NavItem>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'es' | 'en')}
              className="text-sm border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900 font-medium focus:ring-2 focus:ring-primary/20 outline-none transition-shadow"
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </div>
          <ThemeToggle />
          <Link to="/donate" className="btn btn-primary">{t('nav.donate')}</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-neutral-800 dark:text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Expansion */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4 animate-fade-in-up">
          <nav className="flex flex-col gap-2 mb-6">
            <NavItem to="/download" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.download')}</NavItem>
            <NavItem to="/blog" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.blog')}</NavItem>
            <NavItem to="/team" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.team')}</NavItem>
          </nav>

          <div className="flex flex-col gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{t('nav.language')}</span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as 'es' | 'en')}
                className="text-sm border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-1.5 bg-neutral-50 dark:bg-neutral-900 font-medium focus:ring-2 focus:ring-primary/20 outline-none"
              >
                <option value="es">Español</option>
                <option value="en">English</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Theme</span>
              <ThemeToggle />
            </div>

            <Link to="/donate" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary w-full mt-2 text-center h-11">{t('nav.donate')}</Link>
          </div>
        </div>
      )}
    </header>
  )
}
