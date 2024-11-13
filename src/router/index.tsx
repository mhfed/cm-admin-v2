import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { RootLayout } from '@/components/layout/root'
import { AuthLayout } from '@/components/auth'
import { ProtectedRoute } from '@/components/auth/protected-route'
import { routes } from './routes'

// Public routes
const publicRoutes: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordPage />
      }
    ]
  }
]

// Protected routes with layout
const protectedRoutes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: routes
      }
    ]
  }
]

export const router = createBrowserRouter([
  ...publicRoutes,
  ...protectedRoutes
]) 