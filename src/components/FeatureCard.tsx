export default function FeatureCard({ title, description, icon }: { title: string; description: string; icon?: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
      {icon ? <div className="mb-3 text-primary">{icon}</div> : null}
      <h3 className="text-lg font-semibold mb-2 dark:text-neutral-100">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-300 text-sm">{description}</p>
    </div>
  )
}
