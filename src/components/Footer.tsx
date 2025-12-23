import { useI18n } from '../i18n'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} Goals System</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://fernandofedora.github.io/goal-document/user/guia-inicio/" target="_blank" rel="noreferrer" className="text-primary">{t('footer.docs')}</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-primary">{t('footer.repo')}</a>
        </div>
      </div>
    </footer>
  )
}
