import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { portfolioTheme } from './theme/portfolioTheme'
import { CartProvider } from './contexts/CartContext'
import App from './App'
import 'aos/dist/aos.css'
import "@fontsource/syne/400.css"
import "@fontsource/syne/700.css"
import "@fontsource/syne/800.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/jetbrains-mono/400.css"
import "@fontsource/jetbrains-mono/600.css"
import "@fontsource/noto-serif"
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={portfolioTheme}>
			<BrowserRouter>
   			<CartProvider>
   				<App />
   			</CartProvider>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
)
