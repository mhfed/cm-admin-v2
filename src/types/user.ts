export type User = {
  _id: string
  email: string
  name: string
  role: 'admin' | 'user' | 'staff'
  status: 'active' | 'inactive'
  avatar?: string
  phone?: string
  address?: string
  createdAt: Date
  updatedAt: Date
}

export type UserFilters = {
  keyword?: string
  role?: string
  status?: string
  page?: number
  limit?: number
}

// Response types
export type UsersResponse = {
  users: User[]
  total: number
  page: number
  limit: number
}

export type UserResponse = User