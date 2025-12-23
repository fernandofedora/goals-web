import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { I18nProvider } from './i18n'
import { ThemeProvider } from './theme/ThemeProvider'

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(
  <I18nProvider>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </I18nProvider>
)
