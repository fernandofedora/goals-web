import { useTheme } from '../theme/ThemeProvider'
import { useI18n } from '../i18n'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useI18n()
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-neutral-600 dark:text-neutral-300">{t('nav.theme')}</span>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
        className="text-sm border border-neutral-300 dark:border-neutral-700 rounded-md px-2 py-1 bg-white dark:bg-neutral-900"
      >
        <option value="light">{t('theme.light')}</option>
        <option value="dark">{t('theme.dark')}</option>
        <option value="system">{t('theme.system')}</option>
      </select>
    </div>
  )
}
