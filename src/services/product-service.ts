// product-service.ts
import httpRequest from '@/services/api'
import { ProductFilters, Product } from '@/types/product' // sửa lại type

export const ProductService = {
  // Get all products
  getProducts: async (filters?: ProductFilters) => {
    const params = new URLSearchParams(filters as Record<string, string>)
    const { data } = await httpRequest.get(`/products?${params}`)
    return data
  },

  // Get single product
  getProduct: async (id: string) => {
    const { data } = await httpRequest.get(`/products/${id}`)
    return data
  },

  // Create product
  createProduct: async (product: Partial<Product>) => {
    const { data } = await httpRequest.post('/products', product)
    return data
  },

  // Update product
  updateProduct: async (id: string, data: Partial<Product>) => {
    const response = await httpRequest.put(`/products/${id}`, data)
    return response.data
  }
}