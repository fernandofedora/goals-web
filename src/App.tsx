import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useParams, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useI18n } from './i18n'

// Lazy-loaded pages — separate chunks, downloaded only when visited
const Download = lazy(() => import('./pages/Download'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Team = lazy(() => import('./pages/Team'))
const Donate = lazy(() => import('./pages/Donate'))

function PageLoader() {
  return (
    <div className="flex-1 flex items-center justify-center py-20">
      <div className="w-8 h-8 border-3 border-neutral-300 border-t-primary rounded-full animate-spin"></div>
    </div>
  )
}

function LanguageWrapper() {
  const { lang } = useParams()
  const { setLang, lang: currentLang } = useI18n()

  useEffect(() => {
    if ((lang === 'es' || lang === 'en') && lang !== currentLang) {
      setLang(lang)
    }
  }, [lang, setLang, currentLang])

  if (lang !== 'es' && lang !== 'en') {
    return <Navigate to="/es" replace />
  }

  return <Outlet />
}

function RootRedirect() {
  const stored = localStorage.getItem('lang')
  const browserLang = navigator.language.startsWith('es') ? 'es' : 'en'
  const lang = (stored === 'es' || stored === 'en') ? stored : browserLang
  return <Navigate to={`/${lang}`} replace />
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<RootRedirect />} />
            <Route path="/:lang" element={<LanguageWrapper />}>
              <Route index element={<Home />} />
              <Route path="download" element={<Download />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogPost />} />
              <Route path="team" element={<Team />} />
              <Route path="donate" element={<Donate />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
