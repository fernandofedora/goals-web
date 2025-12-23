import React from 'react'

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  content: React.ReactNode
}

function esPosts(): BlogPost[] {
  return [
    {
      slug: 'configura-presupuesto-mensual',
      title: 'Configura tu presupuesto mensual',
      excerpt: 'Aprende a definir un presupuesto por mes y año para controlar el gasto.',
      date: '2025-12-22',
      tags: ['presupuesto', 'consejos'],
      content: (
        <>
          <p className="mb-4">Un buen presupuesto mensual te ayuda a controlar tus finanzas y a cumplir tus metas.</p>
          <h3 className="text-lg font-semibold mt-4">Pasos recomendados</h3>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Define tus ingresos y gastos fijos.</li>
            <li>Asigna montos por categoría según tus prioridades.</li>
            <li>Revisa el gasto real semanalmente y ajusta el presupuesto.</li>
            <li>Reserva un monto para ahorro y emergencias.</li>
          </ol>
          <p className="mt-4">Al cierre del mes, compara presupuesto vs. gasto y aplica mejoras.</p>
        </>
      ),
    },
    {
      slug: 'buenas-practicas-categorias',
      title: 'Buenas prácticas para categorías',
      excerpt: 'Organiza tus categorías con colores y nombres consistentes.',
      date: '2025-12-22',
      tags: ['categorías'],
      content: (
        <>
          <p className="mb-4">Una buena organización por categorías facilita el análisis de tus gastos.</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Usa nombres claros y evita duplicados.</li>
            <li>Asigna colores para identificar rápidamente cada categoría.</li>
            <li>Agrupa categorías relacionadas bajo una misma familia.</li>
            <li>Revisa y depura categorías cada trimestre.</li>
          </ul>
        </>
      ),
    },
    {
      slug: 'planes-de-ahorro-metas-progreso',
      title: 'Planes de ahorro: metas y progreso',
      excerpt: 'Crea metas de ahorro, registra contribuciones y sigue tu avance.',
      date: '2025-12-22',
      tags: ['ahorro', 'metas'],
      content: (
        <>
          <p className="mb-4">Define metas alcanzables, plazos claros y contribuciones periódicas.</p>
          <h3 className="text-lg font-semibold mt-4">Cómo empezar</h3>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Establece el monto objetivo y la fecha meta.</li>
            <li>Programa aportes semanales o mensuales.</li>
            <li>Mide el avance y ajusta el plan cuando sea necesario.</li>
          </ol>
        </>
      ),
    },
    {
      slug: 'exporta-datos-excel',
      title: 'Exporta tus datos a Excel',
      excerpt: 'Exporta tu historial y reportes para compartir o analizar.',
      date: '2025-12-22',
      tags: ['exportación'],
      content: (
        <>
          <p className="mb-4">Exportar a Excel te permite compartir informes y hacer análisis personalizados.</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Filtra el período y tipos de transacciones.</li>
            <li>Incluye columnas relevantes como categoría y notas.</li>
            <li>Verifica el formato y realiza copias de respaldo.</li>
          </ul>
        </>
      ),
    },
  ]
}

function enPosts(): BlogPost[] {
  return [
    {
      slug: 'set-your-monthly-budget',
      title: 'Set your monthly budget',
      excerpt: 'Learn how to define a monthly budget by month and year.',
      date: '2025-12-22',
      tags: ['budget', 'tips'],
      content: (
        <>
          <p className="mb-4">A good monthly budget helps you control your finances and meet your goals.</p>
          <h3 className="text-lg font-semibold mt-4">Recommended steps</h3>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Define your income and fixed expenses.</li>
            <li>Assign amounts per category based on priorities.</li>
            <li>Review actual spending weekly and adjust budget.</li>
            <li>Reserve an amount for savings and emergencies.</li>
          </ol>
          <p className="mt-4">At month end, compare budget vs. spend and improve.</p>
        </>
      ),
    },
    {
      slug: 'category-best-practices',
      title: 'Category best practices',
      excerpt: 'Organize your categories with consistent names and colors.',
      date: '2025-12-22',
      tags: ['categories'],
      content: (
        <>
          <p className="mb-4">Good category organization makes spending analysis easier.</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Use clear names and avoid duplicates.</li>
            <li>Assign colors to quickly identify each category.</li>
            <li>Group related categories under one family.</li>
            <li>Review and clean up categories quarterly.</li>
          </ul>
        </>
      ),
    },
    {
      slug: 'saving-plans-goals-progress',
      title: 'Saving plans: goals and progress',
      excerpt: 'Create saving goals, record contributions and track your progress.',
      date: '2025-12-22',
      tags: ['saving', 'goals'],
      content: (
        <>
          <p className="mb-4">Define achievable goals, clear timelines and periodic contributions.</p>
          <h3 className="text-lg font-semibold mt-4">How to start</h3>
          <ol className="list-decimal ml-5 space-y-2">
            <li>Set the target amount and due date.</li>
            <li>Schedule weekly or monthly contributions.</li>
            <li>Measure progress and adjust the plan as needed.</li>
          </ol>
        </>
      ),
    },
    {
      slug: 'export-your-data-to-excel',
      title: 'Export your data to Excel',
      excerpt: 'Export your history and reports to share or analyze.',
      date: '2025-12-22',
      tags: ['export'],
      content: (
        <>
          <p className="mb-4">Exporting to Excel lets you share reports and run custom analyses.</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Filter the period and transaction types.</li>
            <li>Include relevant columns like category and notes.</li>
            <li>Verify format and keep backups.</li>
          </ul>
        </>
      ),
    },
  ]
}

export function getPosts(lang: 'es' | 'en'): BlogPost[] {
  return lang === 'en' ? enPosts() : esPosts()
}

export function getPostBySlug(lang: 'es' | 'en', slug: string): BlogPost | undefined {
  const list = getPosts(lang)
  return list.find((p) => p.slug === slug)
}
