import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/router'
import AuthProvider from './Providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient=new QueryClient()

createRoot(document.getElementById('root')).render(
  <div className='container mx-auto '>

  <StrictMode>
    <AuthProvider>

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    <Toaster position='top-right' reverseOrder={false} />
    </AuthProvider>
  </StrictMode>,
  </div>
)
