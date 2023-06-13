import { BrowserRouter } from 'react-router-dom'
import '@/app/styles/index.scss'
import { createRoot } from 'react-dom/client'

import { App } from './app/App'
import { ThemeProvider } from './app/providers/ThemeProvider'

import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { StoreProvider } from '@/app/providers/StoreProvider'

import '@/shared/config/i18n/i18n'

const container = document.getElementById('root')

if (!container) {
    throw new Error('container root not found')
}

const root = createRoot(container)
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
)
