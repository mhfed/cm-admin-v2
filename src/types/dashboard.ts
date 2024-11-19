export type DashboardFilters = {
  startDate?: string
  endDate?: string
  period?: 'day' | 'week' | 'month' | 'year'
}

// Order Report Types
export type OrderStats = {
  total: number
  pending: number
  processing: number
  completed: number
  cancelled: number
}

export type OrderRevenueData = {
  date: string
  revenue: number
  orders: number
}

export type OrderReportResponse = {
  stats: OrderStats
  revenueData: OrderRevenueData[]
  totalRevenue: number
  totalOrders: number
  averageOrderValue: number
}

// Product Report Types
export type TopProduct = {
  _id: string
  name: string
  sku: string
  sold: number
  revenue: number
}

export type ProductStats = {
  total: number
  active: number
  outOfStock: number
  lowStock: number
}

export type ProductReportResponse = {
  stats: ProductStats
  topProducts: TopProduct[]
  totalSold: number
  totalRevenue: number
} 