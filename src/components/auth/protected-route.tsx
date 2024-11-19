import { Navigate, Outlet, useLocation, useMatches } from 'react-router-dom'
import { useAuthStore } from '@stores/auth'
import type { ProtectedRouteConfig } from '@/router/routes'

export function ProtectedRoute() {
  const { user, token, checkPermission } = useAuthStore()
  const location = useLocation()
  const matches = useMatches() as { route: ProtectedRouteConfig }[]

  // Check if not logged in
  if (!token || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Get required permissions from current route
  const currentRoute = matches[matches.length - 1]?.route
  const requiredPermissions = currentRoute?.permissions || []

  // Check permissions
  if (requiredPermissions.length > 0 && !checkPermission(requiredPermissions)) {
    return <Navigate to="/unauthorized" replace />
  }

  return <Outlet />
} 