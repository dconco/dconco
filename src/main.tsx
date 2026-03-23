import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import './index.css'
import App from './App.tsx'
import { portfolioTheme } from './theme/portfolioTheme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={portfolioTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
