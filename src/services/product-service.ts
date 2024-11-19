// product-service.ts
import httpRequest from '@services/api'
import { ENDPOINTS } from '@/constants/endpoints'
import type { ProductFilters, Product } from '@/types/product'

export const ProductService = {
  // Get all products
  getProducts: async (filters?: ProductFilters) => {
    const params = new URLSearchParams(filters as Record<string, string>)
    const { data } = await httpRequest.get(`${ENDPOINTS.PRODUCTS.LIST}?${params}`)
    return data
  },

  // Get single product
  getProduct: async (id: string) => {
    const { data } = await httpRequest.get(ENDPOINTS.PRODUCTS.GET(id))
    return data
  },

  // Create product
  createProduct: async (product: Partial<Product>) => {
    const { data } = await httpRequest.post(ENDPOINTS.PRODUCTS.CREATE, product)
    return data
  },

  // Update product
  updateProduct: async (id: string, data: Partial<Product>) => {
    const response = await httpRequest.put(ENDPOINTS.PRODUCTS.UPDATE(id), data)
    return response.data
  },

  // Delete product (thêm mới nếu cần)
  deleteProduct: async (id: string) => {
    const { data } = await httpRequest.delete(ENDPOINTS.PRODUCTS.DELETE(id))
    return data
  }
}