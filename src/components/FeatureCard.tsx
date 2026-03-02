export default function FeatureCard({ title, description, icon }: { title: string; description: string; icon?: string }) {
  return (
    <div className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 group-hover:rotate-12 duration-500">
        {icon && <div className="text-8xl">{icon}</div>}
      </div>
      <div className="relative z-10">
        {icon ? <div className="mb-6 text-primary h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">{icon}</div> : null}
        <h3 className="text-xl font-heading font-bold mb-3 dark:text-neutral-100 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  )
}
