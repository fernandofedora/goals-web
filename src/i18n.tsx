import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'

type Lang = 'es' | 'en'

type Dict = Record<string, string>

const dictionaries: Record<Lang, Dict> = {
  es: {
    'nav.download': 'Descarga',
    'nav.blog': 'Blog',
    'nav.team': 'Equipo',
    'nav.donate': 'Donar',
    'nav.language': 'Idioma',
    'nav.theme': 'Tema',
    'theme.light': 'Claro',
    'theme.dark': 'Oscuro',
    'theme.system': 'Sistema',
    'download.title': 'Descarga',
    'download.intro': 'Sigue estos pasos para empezar con Goals System en tu entorno local.',
    'download.getting_started': 'Cómo empezar',
    'download.step.clone': 'Clona los repositorios del servidor y del cliente.',
    'download.step.install': 'Instala dependencias con npm install.',
    'download.step.env': 'Configura variables necesarias y ejecuta el servidor.',
    'download.step.client': 'Levanta el cliente web y accede al dashboard.',
    'download.guide': 'Ver guía de inicio',
    'download.requirements': 'Requisitos',
    'download.req.node': 'Node.js y npm recientes',
    'download.req.browser': 'Navegador moderno',
    'download.soon': 'Próximamente',
    'download.soon.desc': 'Binarios e instaladores empaquetados para diferentes plataformas.',
    'download.online.title': 'Usar versión en línea',
    'download.online.note': 'Puedes usar la versión en línea en producción. Como es un proyecto de código abierto, está limitado a 100 transacciones al mes. Gracias por tu comprensión.',
    'download.online.button': 'Abrir versión en línea',
    'blog.title': 'Blog',
    'blog.read_more': 'Leer más',
    'blog.back': 'Volver al blog',
    'blog.not_found': 'No se encontró el artículo.',
    'hero.title': 'Controla tus finanzas con claridad',
    'hero.subtitle': 'Goals System es una herramienta open source, sin publicidad, para registrar ingresos y gastos, definir presupuestos mensuales y visualizar reportes claros.',
    'hero.badge.os': 'Open Source',
    'hero.badge.noads': 'Sin publicidad',
    'hero.badge.privacy': 'Privacidad primero',
    'hero.docs': 'Ver documentación',
    'hero.donate': 'Donar',
    'home.what_is.title': '¿Qué es Goals System?',
    'home.what_is.desc': 'Una herramienta para registrar ingresos y gastos, controlar presupuestos mensuales y visualizar reportes claros. Ideal para el control personal de finanzas. Open source, sin publicidad y con enfoque en privacidad.',
    'home.features.title': 'Características principales',
    'feature.categories.title': 'Categorías',
    'feature.categories.desc': 'Crea categorías de gasto e ingreso y asigna un color para identificarlas fácilmente.',
    'feature.cards.title': 'Tarjetas',
    'feature.cards.desc': 'Registra tus tarjetas con nombre y últimos 4 dígitos; asigna un color para distinguirlas.',
    'feature.budget.title': 'Presupuesto',
    'feature.budget.desc': 'Define un monto mensual por mes/año para controlar el consumo y comparar resultados.',
    'feature.transactions.title': 'Transacciones',
    'feature.transactions.desc': 'Registra gastos o ingresos con descripción, monto, fecha, categoría y método de pago.',
    'feature.dashboard.title': 'Dashboard',
    'feature.dashboard.desc': 'Visualiza balance, distribución por categorías y consumo por tarjeta; exporta a Excel.',
    'feature.privacy.title': 'Privacidad',
    'feature.privacy.desc': 'Sin publicidad y open source. Control total de tus datos.',
    'home.start.title': 'Empieza ahora',
    'home.start.guide': 'Guía de inicio',
    'home.start.download': 'Descarga',
    'home.start.how_title': 'Cómo empezar',
    'home.start.full_guide': 'Ver Guía Completa',
    'home.start.step1.title': 'Crear tu cuenta',
    'home.start.step1.desc': 'Regístrate con tu nombre, correo y una contraseña segura. Tu sesión permanece activa y protegida.',
    'home.start.step2.title': 'Configuración básica',
    'home.start.step2.desc': 'Crea categorías de gasto e ingreso, registra tus tarjetas y define tu presupuesto mensual.',
    'home.start.step3.title': 'Registrar transacciones',
    'home.start.step3.desc': 'Añade tus gastos e ingresos con descripción, monto, fecha y categoría. Elige el método de pago.',
    'home.start.step4.title': 'Visualizar y exportar',
    'home.start.step4.desc': 'Consulta tu dashboard con balance, distribución por categorías y exporta a Excel para análisis.',
    'team.title': 'Equipo',
    'team.member.role': 'Colaborador',
    'team.contribute.title': 'Contribuye',
    'team.contribute.desc': 'Nos encanta la colaboración. Visita el repositorio para participar.',
    'team.contribute.cta': 'Ir al repositorio',
    'team.join.title': '¿Quieres unirte al equipo?',
    'team.join.desc': 'Goals System es un proyecto de código abierto y siempre estamos buscando colaboradores apasionados. Ya seas desarrollador, diseñador o simplemente un entusiasta de las finanzas personales, ¡tu contribución es bienvenida!',
    'team.join.cta': 'Contribuir en GitHub',
    'team.contact.title': 'Contacto',
    'team.contact.desc': 'Puedes contactarnos a través de GitHub. Tenemos canales para preguntas de usuarios y discusiones relacionadas con el desarrollo:',
    'team.contact.issues.title': 'GitHub Issues',
    'team.contact.issues.desc': 'Para reportar bugs, solicitar características o hacer preguntas técnicas',
    'team.contact.issues.cta': 'Abrir un Issue',
    'team.contact.discussions.title': 'GitHub Discussions',
    'team.contact.discussions.desc': 'Para discusiones generales, ideas y compartir experiencias con la comunidad',
    'team.contact.discussions.cta': 'Unirse a la Discusión',
    'team.contact.note': 'Nota: Por favor, sé paciente al hacer una pregunta. Puede que no obtengas una respuesta inmediata, pero alguien te responderá eventualmente.',
    'donate.title': 'Donar',
    'donate.desc': 'Goals System es gratuito y open source. Tu apoyo ayuda a cubrir costos de infraestructura, herramientas de desarrollo y tiempo de mantenimiento.',
    'donate.preferred': 'Método preferido',
    'donate.paypal': 'Donar con PayPal',
    'donate.additional': 'Métodos adicionales',
    'donate.additional.crypto': 'Criptomonedas (próximamente)',
    'donate.additional.promo': 'Promoción del proyecto en redes o en tu trabajo',
    'footer.docs': 'Documentación',
    'footer.repo': 'Repositorio',
  },
  en: {
    'nav.download': 'Download',
    'nav.blog': 'Blog',
    'nav.team': 'Team',
    'nav.donate': 'Donate',
    'nav.language': 'Language',
    'nav.theme': 'Theme',
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
    'download.title': 'Download',
    'download.intro': 'Follow these steps to get started with Goals System locally.',
    'download.getting_started': 'Getting started',
    'download.step.clone': 'Clone the server and client repositories.',
    'download.step.install': 'Install dependencies with npm install.',
    'download.step.env': 'Configure required variables and run the server.',
    'download.step.client': 'Start the web client and access the dashboard.',
    'download.guide': 'Open getting started guide',
    'download.requirements': 'Requirements',
    'download.req.node': 'Recent Node.js and npm',
    'download.req.browser': 'Modern browser',
    'download.soon': 'Coming soon',
    'download.soon.desc': 'Packaged binaries and installers for different platforms.',
    'download.online.title': 'Use online version',
    'download.online.note': 'You can use the production online version. As an open-source project, it is limited to 100 transactions per month. Thank you for your understanding.',
    'download.online.button': 'Open online version',
    'blog.title': 'Blog',
    'blog.read_more': 'Read more',
    'blog.back': 'Back to blog',
    'blog.not_found': 'Article not found.',
    'hero.title': 'Manage your finances clearly',
    'hero.subtitle': 'Goals System is an open-source, ad-free tool to record income/expenses, set monthly budgets, and visualize clear reports.',
    'hero.badge.os': 'Open Source',
    'hero.badge.noads': 'Ad-free',
    'hero.badge.privacy': 'Privacy first',
    'hero.docs': 'View documentation',
    'hero.donate': 'Donate',
    'home.what_is.title': 'What is Goals System?',
    'home.what_is.desc': 'A tool to record income and expenses, control monthly budgets, and visualize clear reports. Ideal for personal finance control. Open source, ad-free, and privacy-focused.',
    'home.features.title': 'Main features',
    'feature.categories.title': 'Categories',
    'feature.categories.desc': 'Create income/expense categories and assign a color to identify them easily.',
    'feature.cards.title': 'Cards',
    'feature.cards.desc': 'Register your cards with name and last 4 digits; assign a color to distinguish them.',
    'feature.budget.title': 'Budget',
    'feature.budget.desc': 'Define a monthly amount per month/year to control spending and compare results.',
    'feature.transactions.title': 'Transactions',
    'feature.transactions.desc': 'Record expenses or income with description, amount, date, category, and payment method.',
    'feature.dashboard.title': 'Dashboard',
    'feature.dashboard.desc': 'See balance, category distribution, and card spending; export to Excel.',
    'feature.privacy.title': 'Privacy',
    'feature.privacy.desc': 'Ad-free and open source. Full control of your data.',
    'home.start.title': 'Get started',
    'home.start.guide': 'Getting started guide',
    'home.start.download': 'Download',
    'home.start.how_title': 'How to start',
    'home.start.full_guide': 'View Full Guide',
    'home.start.step1.title': 'Create your account',
    'home.start.step1.desc': 'Sign up with your name, email, and a secure password. Your session stays active and protected.',
    'home.start.step2.title': 'Basic setup',
    'home.start.step2.desc': 'Create income/expense categories, register your cards, and define your monthly budget.',
    'home.start.step3.title': 'Record transactions',
    'home.start.step3.desc': 'Add expenses and income with description, amount, date, and category. Choose the payment method.',
    'home.start.step4.title': 'Visualize and export',
    'home.start.step4.desc': 'Check your dashboard for balance and category distribution and export to Excel for analysis.',
    'team.title': 'Team',
    'team.member.role': 'Contributor',
    'team.contribute.title': 'Contribute',
    'team.contribute.desc': 'We love collaboration. Visit the repository to participate.',
    'team.contribute.cta': 'Go to repository',
    'team.join.title': 'Want to join the team?',
    'team.join.desc': 'Goals System is an open-source project and we are always looking for passionate contributors. Whether you are a developer, designer, or simply a personal finance enthusiast, your contribution is welcome!',
    'team.join.cta': 'Contribute on GitHub',
    'team.contact.title': 'Contact',
    'team.contact.desc': 'You can reach us via GitHub. We have channels for user questions and development-related discussions:',
    'team.contact.issues.title': 'GitHub Issues',
    'team.contact.issues.desc': 'For reporting bugs, requesting features, or asking technical questions',
    'team.contact.issues.cta': 'Open an Issue',
    'team.contact.discussions.title': 'GitHub Discussions',
    'team.contact.discussions.desc': 'For general discussions, ideas, and sharing experiences with the community',
    'team.contact.discussions.cta': 'Join the Discussion',
    'team.contact.note': 'Note: Please be patient when asking a question. You may not get an immediate response, but someone will reply eventually.',
    'donate.title': 'Donate',
    'donate.desc': 'Goals System is free and open source. Your support helps cover infrastructure costs, development tools, and maintenance time.',
    'donate.preferred': 'Preferred method',
    'donate.paypal': 'Donate with PayPal',
    'donate.additional': 'Additional methods',
    'donate.additional.crypto': 'Cryptocurrencies (coming soon)',
    'donate.additional.promo': 'Promote the project on social or at work',
    'footer.docs': 'Documentation',
    'footer.repo': 'Repository',
  },
}

type I18nContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const stored = localStorage.getItem('lang')
    if (stored === 'es' || stored === 'en') setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  const t = useMemo(() => {
    const dict = dictionaries[lang]
    return (key: string) => dict[key] ?? key
  }, [lang])

  const value: I18nContextValue = { lang, setLang, t }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('I18nProvider missing')
  return ctx
}
