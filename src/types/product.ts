export type ProductStatus = 'active' | 'inactive' | 'draft'

export type ProductFilters = {
  keyword?: string
  collection?: string
  status?: ProductStatus
}

export type Product = {
  _id: string
  title: string
  sku: string
  price: number
  status: ProductStatus
  createdAt: Date
  updatedAt: Date
}

// Utility types
export type ProductUpdateData = Partial<Omit<Product, '_id' | 'createdAt' | 'updatedAt'>>
export type CreateProduct = Omit<Product, '_id' | 'createdAt' | 'updatedAt'>
