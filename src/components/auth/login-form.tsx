// Example of a login form
import { useAuthStore } from '@stores/auth'
import { useUIStore } from '@stores/ui'

export function LoginForm() {
  const { login, isLoading } = useAuthStore()
  const { showToast } = useUIStore()

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await login(values.email, values.password)
      showToast({ 
        message: 'Login successful!',
        type: 'success'
      })
    } catch (error) {
      showToast({
        message: 'Login failed',
        type: 'error'
      })
    }
  }

  return (
    // Form implementation
  )
} 