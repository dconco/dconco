import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { portfolioTheme } from './theme/portfolioTheme'
import { CartProvider } from './contexts/CartContext'
import App from './App'
import 'aos/dist/aos.css'
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
