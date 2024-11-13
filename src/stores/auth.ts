import { create } from 'zustand'
import { api } from '@/lib/api'

interface User {
  id: string
  email: string
  role: string
  permissions: string[]
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
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null })
      const { data } = await api.post('/auth/login', { email, password })
      
      localStorage.setItem('token', data.token)
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
    }
  },

  logout: () => {
    localStorage.removeItem('token')
    set({ user: null, token: null })
  },

  checkAuth: async () => {
    try {
      set({ isLoading: true })
      const { data } = await api.get('/auth/me')
      set({ user: data, isLoading: false })
    } catch (error) {
      set({ 
        user: null, 
        token: null,
        isLoading: false 
      })
    }
  },
})) 