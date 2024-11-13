import { useInfiniteQuery } from '@tanstack/react-query'
import { PaginatedResponse } from '@/types/api'

interface UseInfiniteQueryOptions<T> {
  queryKey: string
  url: string
  limit?: number
  filters?: Record<string, any>
}

export function useInfiniteQueryWithParams<T>({
  queryKey,
  url,
  limit = 20,
  filters = {},
}: UseInfiniteQueryOptions<T>) {
  return useInfiniteQuery<PaginatedResponse<T>>({
    queryKey: [queryKey, filters],
    queryFn: async ({ pageParam = 1 }) => {
      const params = new URLSearchParams({
        page: pageParam.toString(),
        limit: limit.toString(),
        ...filters,
      })
      
      const { data } = await api.get(`${url}?${params}`)
      return data
    },
    getNextPageParam: (lastPage) => {
      const totalPages = Math.ceil(lastPage.total / lastPage.limit)
      if (lastPage.page < totalPages) return lastPage.page + 1
      return undefined
    },
  })
} 