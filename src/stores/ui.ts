import { create } from 'zustand'

type ToastType = 'success' | 'error' | 'info' | 'warning'

interface Toast {
  id?: string
  message: string
  type: ToastType
  duration?: number
}

interface Modal {
  id: string
  component: React.ReactNode
  props?: Record<string, unknown>
}

interface UIState {
  // Sidebar
  isSidebarOpen: boolean
  toggleSidebar: () => void
  
  // Toast notifications
  toasts: Toast[]
  showToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
  
  // Modal management
  activeModals: Modal[]
  openModal: (modal: Omit<Modal, 'id'>) => void
  closeModal: (id: string) => void
  
  // Loading states
  globalLoading: boolean
  setGlobalLoading: (loading: boolean) => void
  
  // Theme
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const useUIStore = create<UIState>((set) => ({
  // Sidebar
  isSidebarOpen: true,
  toggleSidebar: () => set(state => ({ 
    isSidebarOpen: !state.isSidebarOpen 
  })),

  // Toast notifications
  toasts: [],
  showToast: (toast) => set(state => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }
    
    // Auto remove toast after duration
    setTimeout(() => {
      set(state => ({
        toasts: state.toasts.filter(t => t.id !== id)
      }))
    }, toast.duration || 3000)
    
    return { 
      toasts: [...state.toasts, newToast]
    }
  }),
  removeToast: (id) => set(state => ({
    toasts: state.toasts.filter(t => t.id !== id)
  })),

  // Modal management  
  activeModals: [],
  openModal: (modal) => set(state => {
    const id = Math.random().toString(36).substr(2, 9)
    return {
      activeModals: [...state.activeModals, { ...modal, id }]
    }
  }),
  closeModal: (id) => set(state => ({
    activeModals: state.activeModals.filter(m => m.id !== id)
  })),

  // Loading state
  globalLoading: false,
  setGlobalLoading: (loading) => set({ globalLoading: loading }),

  // Theme
  theme: 'light',
  toggleTheme: () => set(state => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  }))
})) 