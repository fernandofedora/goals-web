import React from 'react'

export default function Section({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`container py-12 ${className}`}>
      <h2 className={`text-3xl font-heading font-bold mb-8 tracking-tight ${className.includes('dark') ? 'text-white' : 'dark:text-neutral-100'}`}>{title}</h2>
      <div>{children}</div>
    </section>
  )
}
