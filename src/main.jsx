import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router'
import AuthProvider from './Page/Authentication/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CartProvider } from './Page/Cart/CartContext'
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <CartProvider>

       <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
    </CartProvider>
        </QueryClientProvider>
    </AuthProvider>
          </StrictMode>,
)
