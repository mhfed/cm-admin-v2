import { useProducts, useCreateProduct } from '@/hooks/queries/products'
import { useUIStore } from '@/stores/ui'

export function ProductsPage() {
  const { showToast } = useUIStore()
  const { data: products, isLoading } = useProducts()
  const { mutate: createProduct, isLoading: isCreating } = useCreateProduct()

  const handleCreate = async (data: any) => {
    try {
      await createProduct(data)
      showToast({
        type: 'success',
        message: 'Product created successfully'
      })
    } catch (error) {
      showToast({
        type: 'error',
        message: 'Failed to create product'
      })
    }
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h1>Products</h1>
      {/* Product list UI */}
      <Button 
        onClick={handleCreate} 
        disabled={isCreating}
      >
        Create Product
      </Button>
    </div>
  )
} 