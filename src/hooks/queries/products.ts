import { ProductService } from '@/services/product-service'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import type { Product, ProductFilters } from '@/types/product'

// Get Products
export function useProducts(filters?: ProductFilters) {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => ProductService.getProducts(filters)
  })
}

// Get Single Product
export function useProduct(id: string) {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => ProductService.getProduct(id),
    enabled: !!id
  })
}

// Create Product
export function useCreateProduct() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ProductService.createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    }
  })
}

// Update Product
export function useUpdateProduct() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Product> }) => 
      ProductService.updateProduct(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      queryClient.invalidateQueries({ queryKey: ['products', variables.id] })
    }
  })
} 