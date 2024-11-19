import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { CollectionService } from '@services/collection-service'
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

// Get Single Collection
export function useCollection(id: string) {
  return useQuery({
    queryKey: ['collections', id],
    queryFn: () => CollectionService.getCollection(id),
    enabled: !!id
  })
}

// Create Collection
export function useCreateCollection() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (collection: Partial<Collection>) => 
      CollectionService.createCollection(collection),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    }
  })
}

// Update Collection
export function useUpdateCollection() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Collection> }) => 
      CollectionService.updateCollection(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['collections'] })
      queryClient.invalidateQueries({ queryKey: ['collections', variables.id] })
    }
  }) 
}

// Delete Collection
export function useDeleteCollection() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: (id: string) => CollectionService.deleteCollection(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    }
  })
}