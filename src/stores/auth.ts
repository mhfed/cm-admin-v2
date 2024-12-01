import { Role } from '@constants/permissions'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  name: string
  email: string
  role: Role
}

interface Credentials {
  email: string
  password: string
}

interface AuthState {
  user: User | null
  role: Role | null
  isAuthenticated: boolean
  token: string | null
  
  // Actions
  login: (credentials: Credentials) => Promise<void>
  logout: () => void
  updateUser: (user: Partial<User>) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      role: null,
      isAuthenticated: false,
      token: null,

      login: async (credentials) => {
        try {
          // Gọi API login
          const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          })

          if (!response.ok) {
            throw new Error('Login failed')
          }

          const data = await response.json()
          
          set({
            user: data.user,
            role: data.user.role,
            isAuthenticated: true,
            token: data.token,
          })
        } catch (error) {
          console.error('Login error:', error)
          throw error
        }
      },

      logout: () => {
        set({
          user: null,
          role: null,
          isAuthenticated: false,
          token: null,
        })
      },

      updateUser: (userData) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        }))
      },
    }),
    {
      name: 'auth-storage', // tên unique cho localStorage
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
)

// Custom hook để sử dụng auth store
export function useAuth() {
  const { user, role, isAuthenticated, login, logout, updateUser } = useAuthStore()
  return { user, role, isAuthenticated, login, logout, updateUser }
} 