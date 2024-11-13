import { create } from 'zustand'

interface Toast {
  message: string
  type: 'success' | 'error' | 'info'
}

interface UIState {
  isSidebarOpen: boolean
  toast: Toast | null
  
  // Actions
  toggleSidebar: () => void
  showToast: (toast: Toast) => void
  hideToast: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: true,
  toast: null,

  toggleSidebar: () => set(state => ({ 
    isSidebarOpen: !state.isSidebarOpen 
  })),

  showToast: (toast: Toast) => {
    set({ toast })
    // Auto hide after 3 seconds
    setTimeout(() => {
      set({ toast: null })
    }, 3000)
  },

  hideToast: () => set({ toast: null }),
})) 