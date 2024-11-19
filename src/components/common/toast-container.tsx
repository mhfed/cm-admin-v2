// chưa biết dùng toast nào
import { useUIStore } from '@stores/ui'

export function ToastContainer() {
  const { toasts, removeToast } = useUIStore()

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={() => removeToast(toast.id!)}
        />
      ))}
    </div>
  )
} 