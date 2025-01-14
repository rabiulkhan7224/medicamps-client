import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/router'
import AuthProvider from './Providers/AuthProvider'

createRoot(document.getElementById('root')).render(
  <div className='container mx-auto '>

  <StrictMode>
    <AuthProvider>

    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
  </div>
)
