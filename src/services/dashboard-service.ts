import httpRequest from '@services/api'
import { ENDPOINTS } from '@constants/endpoints'
import type { 
  OrderReportResponse, 
  ProductReportResponse,
  DashboardFilters 
} from '@/types/dashboard'

export const DashboardService = {
  // Get order report
  getOrderReport: async (filters?: DashboardFilters): Promise<OrderReportResponse> => {
    const params = new URLSearchParams(filters as Record<string, string>)
    const { data } = await httpRequest.get(
      `${ENDPOINTS.DASHBOARD.ORDER_REPORT}?${params}`
    )
    return data
  },

  // Get product report
  getProductReport: async (filters?: DashboardFilters): Promise<ProductReportResponse> => {
    const params = new URLSearchParams(filters as Record<string, string>)
    const { data } = await httpRequest.get(
      `${ENDPOINTS.DASHBOARD.PRODUCT_REPORT}?${params}`
    )
    return data
  }
}
