import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

// Lazy load components
const Dashboard = lazy(() => import('@pages/dashboard'))
const Products = lazy(() => import('@pages/products'))
const Orders = lazy(() => import('@pages/orders'))
// ... other imports

interface ProtectedRouteConfig extends RouteObject {
  permissions?: string[]
}

export const routes: ProtectedRouteConfig[] = [
  {
    path: '/',
    element: <Dashboard />,
    permissions: ['view_dashboard']
  },
  {
    path: 'orders',
    children: [
      {
        index: true,
        element: <Orders />,
        permissions: ['view_order']
      },
      {
        path: ':id',
        element: <OrderDetail />,
        permissions: ['view_order']
      }
    ]
  },
  {
    path: 'products',
    children: [
      {
        index: true,
        element: <Products />,
        permissions: ['view_product']
      },
      {
        path: 'categories',
        element: <Categories />,
        permissions: ['view_product']
      },
      {
        path: 'collections',
        element: <Collections />,
        permissions: ['view_product']
      },
      // ... other product routes
    ]
  },
  {
    path: 'customers',
    children: [
      {
        index: true,
        element: <Customers />,
        permissions: ['view_customer']
      },
      {
        path: 'tich-diem',
        element: <CoolClub />,
        permissions: ['view_customer']
      }
    ]
  },
  // ... other routes
] 