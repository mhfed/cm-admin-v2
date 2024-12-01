import { Navigate } from 'react-router-dom'
import { useAuth } from '@/stores/auth'
import { checkPermission } from '@/lib/utils/permission'
import { Permission, PERMISSIONS } from '@constants/permissions'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredPermissions?: Permission[]
}

export default function ProtectedRoute({ 
  children, 
  requiredPermissions = [] 
}: ProtectedRouteProps) {
  const { isAuthenticated, role } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />
  }

  if (requiredPermissions.length > 0 && role) {
    const permissions = PERMISSIONS[role]
    const hasPermission = checkPermission(requiredPermissions, permissions)
    
    if (!hasPermission) {
      return <Navigate to="/401" replace />
    }
  }

  return <>{children}</>
} 