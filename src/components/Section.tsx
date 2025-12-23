export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div>{children}</div>
    </section>
  )
}
