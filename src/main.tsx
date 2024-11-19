import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@components/ui/toaster'
import { ThemeProvider } from '@components/common/theme-provider'
import router from '@/router'
import '@/styles/index.css'
import { QueryProvider } from '@/lib/providers/query-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </QueryProvider>
  </React.StrictMode>
)
