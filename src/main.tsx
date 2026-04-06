import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const query = new QueryClient();

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <QueryClientProvider client={query}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
