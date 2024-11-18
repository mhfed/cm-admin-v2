import httpRequest from '@/services/api'
import type { Collection } from '@/types/collection'

export const CollectionService = {
  // Get collections
  getCollections: async (query?: string) => {
    const { data } = await httpRequest.get(`/collections${query ? `?${query}` : ''}`)
    return data
  },

  // Get collection tree
  getCollectionTree: async () => {
    const { data } = await httpRequest.get('/collections/tree')
    return data
  },

  // Update collection
  updateCollection: async (id: string, data: Partial<Collection>) => {
    const response = await httpRequest.put(`/collections/${id}`, data)
    return response.data
  }
}