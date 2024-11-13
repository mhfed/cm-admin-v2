import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@/lib/api'

interface Collection {
  _id: string
  title: string
  seo_alias: string
  parent?: string
  childrens?: Collection[]
}

// Get Collections
export function useCollections(query?: string) {
  return useQuery({
    queryKey: ['collections', query],
    queryFn: async () => {
      const { data } = await api.get(`/collections${query ? `?${query}` : ''}`)
      return data
    }
  })
}

// Get Collection Tree
export function useCollectionTree() {
  return useQuery({
    queryKey: ['collections', 'tree'],
    queryFn: async () => {
      const { data } = await api.get('/collections/tree')
      return data
    }
  })
}

// Update Collection
export function useUpdateCollection() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: Partial<Collection> }) => {
      const response = await api.put(`/collections/${id}`, data)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    }
  }) 
} 