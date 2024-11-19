import httpRequest from '@/services/api'
import { ENDPOINTS } from '@/constants/endpoints'
import type { Collection } from '@/types/collection'

export const CollectionService = {
  // Get collections
  getCollections: async (query?: string) => {
    const { data } = await httpRequest.get(
      `${ENDPOINTS.COLLECTIONS.LIST}${query ? `?${query}` : ''}`
    )
    return data
  },

  // Get collection tree
  getCollectionTree: async () => {
    const { data } = await httpRequest.get(`${ENDPOINTS.COLLECTIONS.LIST}/tree`)
    return data
  },

  // Update collection
  updateCollection: async (id: string, data: Partial<Collection>) => {
    const response = await httpRequest.put(ENDPOINTS.COLLECTIONS.UPDATE(id), data)
    return response.data
  },

  // Thêm các methods khác để đồng bộ với ENDPOINTS
  createCollection: async (collection: Partial<Collection>) => {
    const { data } = await httpRequest.post(ENDPOINTS.COLLECTIONS.CREATE, collection)
    return data
  },

  getCollection: async (id: string) => {
    const { data } = await httpRequest.get(ENDPOINTS.COLLECTIONS.GET(id))
    return data
  },

  deleteCollection: async (id: string) => {
    const { data } = await httpRequest.delete(ENDPOINTS.COLLECTIONS.DELETE(id))
    return data
  }
}