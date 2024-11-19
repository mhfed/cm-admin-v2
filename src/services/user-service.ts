import httpRequest from '@services/api'
import { ENDPOINTS } from '@constants/endpoints'
import type { 
  User, 
  UserFilters, 
  UsersResponse, 
  UserResponse 
} from '@/types/user'

export const UserService = {
  // Get all users with filters
  getUsers: async (filters?: UserFilters): Promise<UsersResponse> => {
    const params = new URLSearchParams(filters as Record<string, string>)
    const { data } = await httpRequest.get(`${ENDPOINTS.USERS.LIST}?${params}`)
    return data
  },

  // Get single user
  getUser: async (id: string): Promise<UserResponse> => {
    const { data } = await httpRequest.get(ENDPOINTS.USERS.GET(id))
    return data
  },

  // Create new user
  createUser: async (userData: Partial<User>): Promise<UserResponse> => {
    const { data } = await httpRequest.post(ENDPOINTS.USERS.CREATE, userData)
    return data
  },

  // Update user
  updateUser: async (id: string, userData: Partial<User>): Promise<UserResponse> => {
    const { data } = await httpRequest.put(ENDPOINTS.USERS.UPDATE(id), userData)
    return data
  },

  // Delete user
  deleteUser: async (id: string): Promise<void> => {
    await httpRequest.delete(ENDPOINTS.USERS.DELETE(id))
  }
}
