import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import httpRequest from '@services/api'

interface User {
  id: string
  email: string
  role: string
  permissions: string[]
  name?: string
  avatar?: string
}

interface AuthState {
  user: User | null
  token: string | null
  isLoading: boolean
  error: string | null

  // Actions
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  checkAuth: () => Promise<void>
  checkPermission: (needles: string[], skipAdmin?: boolean) => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        try {
          set({ isLoading: true, error: null })
          const { data } = await httpRequest.post('/auth/login', { email, password })
          
          set({ 
            user: data.user,
            token: data.token,
            isLoading: false 
          })
        } catch (error) {
          set({ 
            error: 'Login failed. Please check your credentials.',
            isLoading: false 
          })
          throw error
        }
      },

      logout: () => {
        set({ user: null, token: null })
      },

      checkAuth: async () => {
        try {
          set({ isLoading: true })
          const { data } = await httpRequest.get('/auth/me')
          set({ user: data, isLoading: false })
        } catch (error) {
          set({ 
            user: null, 
            token: null,
            isLoading: false 
          })
          throw error
        }
      },

      // Migrate từ utils.js checkPermission
      checkPermission: (needles: string[], skipAdmin = false) => {
        const { user } = get()
        if (!user?.permissions) return false
        
        if (user.permissions.includes('all') && !skipAdmin) return true
        
        return needles.every(permission => 
          user.permissions.includes(permission)
        )
      }
    }),
    {
      name: 'auth-storage', // unique name for localStorage
      partialize: (state) => ({ token: state.token }) // chỉ lưu token vào localStorage
    }
  )
) 