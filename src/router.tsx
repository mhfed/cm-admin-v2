import { createBrowserRouter } from 'react-router-dom'
import GeneralError from './pages/errors/general-error'
import NotFoundError from './pages/errors/not-found-error'
import MaintenanceError from './pages/errors/maintenance-error'
import UnauthorisedError from './pages/errors/unauthorised-error.tsx'
import ProtectedRoute from './components/guard/protected-route.tsx'

const router = createBrowserRouter([
  // Auth routes
  ...['/login', '/sign-in'].map(path => ({
    path,
    lazy: async () => ({
      Component: (await import('./pages/auth/login/index.tsx')).default,
      }),
  })),
  ...['/register', '/sign-up'].map(path => ({
    path,
    lazy: async () => ({
      Component: (await import('./pages/auth/register/index.tsx')).default,
    }),
  })),
  {
    path: '/forgot-password',
    lazy: async () => ({
      Component: (await import('./pages/auth/forgot-password')).default,
    }),
  },
  {
    path: '/otp',
    lazy: async () => ({
      Component: (await import('./pages/auth/otp')).default,
    }),
  },

  // Main routes
  {
    path: '/',
    lazy: async () => {
      const AppShell = await import('./components/common/app-shell.tsx')
      return { 
        Component: () => (
          <ProtectedRoute>
            <AppShell.default />
          </ProtectedRoute>
        )
      }
    },
    errorElement: <GeneralError />,
    children: [
      // Dashboard
      {
        index: true,
        lazy: async () => {
          const Component = (await import('./pages/dashboard')).default
          return {
            Component: () => (
              <ProtectedRoute requiredPermissions={['view_dashboard']}>
                <Component />
              </ProtectedRoute>
            )
          }
        },
      },
      // Orders routes
      {
        path: 'orders',
        children: [
          {
            index: true,
            lazy: async () => {
              const Component = (await import('@pages/orders')).default
              return {
                Component: () => (
                  <ProtectedRoute requiredPermissions={['view_order']}>
                    <Component />
                  </ProtectedRoute>
                )
              }
            },
          },
          {
            path: 'assigned',
            lazy: async () => {
              const Component = (await import('@pages/orders/assigned')).default
              return {
                Component: () => (
                  <ProtectedRoute requiredPermissions={['view_order', 'edit_order']}>
                    <Component />
                  </ProtectedRoute>
                )
              }
            },
          },
        ],
      },
      // Products routes
      {
        path: 'products',
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('@pages/products')).default,
            }),
          },
          {
            path: 'list',
            lazy: async () => ({
              Component: (await import('@pages/products/list')).default,
            }),
          },
          {
            path: 'category',
            lazy: async () => ({
              Component: (await import('@pages/products/category')).default,
            }),
          },
          {
            path: 'tags',
            lazy: async () => ({
              Component: (await import('@pages/products/tags')).default,
            }),
          },
        ],
      },
      // Categories route
      {
        path: 'categories',
        lazy: async () => ({
          Component: (await import('@pages/categories')).default,
        }),
      },
      // Collections route  
      {
        path: 'collections',
        lazy: async () => ({
          Component: (await import('@pages/collections')).default,
        }),
      },
      // Discounts route
      {
        path: 'discounts',
        lazy: async () => ({
          Component: (await import('@pages/discounts')).default,
        }),
      },
      // Pages route
      {
        path: 'pages',
        lazy: async () => ({
          Component: (await import('@pages/pages')).default,
        }),
      },
      // Articles routes
      {
        path: 'articles',
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('@pages/articles')).default,
            }),
          },
          {
            path: 'seo',
            lazy: async () => ({
              Component: (await import('@pages/articles/seo')).default,
            }),
          },
        ],
      },
      // Blogs route
      {
        path: 'blogs',
        lazy: async () => ({
          Component: (await import('@pages/blogs')).default,
        }),
      },
      // Customers routes
      {
        path: 'customers',
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('@pages/customers')).default,
            }),
          },
          {
            path: 'tich-diem',
            lazy: async () => ({
              Component: (await import('@pages/customers/tich-diem')).default,
            }),
          },
          {
            path: 'opt-out',
            lazy: async () => ({
              Component: (await import('@pages/customers/opt-out')).default,
            }),
          },
        ],
      },
      // Reports routes
      {
        path: 'reports',
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('@pages/reports')).default,
            }),
          },
          {
            path: 'top-staffs',
            lazy: async () => ({
              Component: (await import('@pages/reports/top-staffs')).default,
            }),
          },
          {
            path: 'products',
            lazy: async () => ({
              Component: (await import('@pages/reports/products')).default,
            }),
          },
        ],
      },
      // Reviews route
      {
        path: 'reviews',
        lazy: async () => ({
          Component: (await import('@pages/reviews')).default,
        }),
      },
      // SEO routes
      {
        path: 'seo-redirect',
        lazy: async () => ({
          Component: (await import('@pages/seo-redirect')).default,
        }),
      },
      {
        path: 'seo',
        lazy: async () => ({
          Component: (await import('@pages/seo')).default,
        }),
      },
      // Tool routes
      {
        path: 'tool',
        children: [
          {
            path: 'audit-aff',
            lazy: async () => ({
              Component: (await import('@pages/tool/audit-aff')).default,
            }),
          },
          {
            path: 'vietful-cxp',
            lazy: async () => ({
              Component: (await import('@pages/tool/vietful-cxp')).default,
            }),
          },
          {
            path: 'mapping',
            children: [
              {
                path: 'san',
                lazy: async () => ({
                  Component: (await import('@pages/tool/mapping/san')).default,
                }),
              },
              {
                path: 'import-product',
                lazy: async () => ({
                  Component: (await import('@pages/tool/mapping/import-product')).default,
                }),
              },
              {
                path: 'swap-barcode',
                lazy: async () => ({
                  Component: (await import('@pages/tool/mapping/swap-barcode')).default,
                }),
              },
            ],
          },
        ],
      },
      // Settings routes
      {
        path: 'settings',
        children: [
          {
            path: 'general',
            lazy: async () => ({
              Component: (await import('@pages/settings/general')).default,
            }),
          },
        ],
      },
      // Background job route
      {
        path: 'background-job',
        lazy: async () => ({
          Component: (await import('@pages/background-job')).default,
        }),
      },
      // Staffs route
      {
        path: 'staffs',
        lazy: async () => ({
          Component: (await import('@pages/staffs')).default,
        }),
      },
      // Giữ lại các routes cũ
      {
        path: 'tasks',
        lazy: async () => ({
          Component: (await import('@pages/tasks')).default,
        }),
      },
      // ... giữ nguyên các routes cũ khác
    ],
  },

  // Error routes
  { path: '/500', Component: GeneralError },
  { path: '/404', Component: NotFoundError },
  { path: '/503', Component: MaintenanceError },
  { path: '/401', Component: UnauthorisedError },

  // Fallback 404 route
  { path: '*', Component: NotFoundError },
])

export default router
