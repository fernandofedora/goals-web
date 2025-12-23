import { useI18n } from '../i18n'

export default function Donate() {
  const { t } = useI18n()
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold mb-4">{t('donate.title')}</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mb-8">{t('donate.desc')}</p>

      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
        <h2 className="text-xl font-semibold mb-3">{t('donate.preferred')}</h2>
        <a href="#" className="btn btn-primary">{t('donate.paypal')}</a>
      </div>

      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 mt-6">
        <h2 className="text-xl font-semibold mb-3">{t('donate.additional')}</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm">
          <li>{t('donate.additional.crypto')}</li>
          <li>{t('donate.additional.promo')}</li>
        </ul>
      </div>
    </section>
  )
}
