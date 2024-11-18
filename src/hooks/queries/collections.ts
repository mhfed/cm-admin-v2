import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { CollectionService } from '@/services/collection-service'
import type { Collection } from '@/types/collection'

// Get Collections
export function useCollections(query?: string) {
  return useQuery({
    queryKey: ['collections', query],
    queryFn: () => CollectionService.getCollections(query)
  })
}

// Get Collection Tree
export function useCollectionTree() {
  return useQuery({
    queryKey: ['collections', 'tree'],
    queryFn: () => CollectionService.getCollectionTree()
  })
}

// Update Collection
export function useUpdateCollection() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Collection> }) => 
      CollectionService.updateCollection(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    }
  }) 
}