// auth-service.ts
import httpRequest from '@/services/api'
import { ENDPOINTS } from '@/constants/endpoints'
import { AuthResponse, ChangePasswordData, LoginResponse, MeResponse, RegisterResponse, ResetPasswordData } from '@/types/auth'

type LoginCredentials = {
  email: string
  password: string
}

type RegisterData = {
  email: string
  password: string
  name: string
  // Thêm các trường khác nếu cần
}

export const AuthService = {
  // Login
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const { data } = await httpRequest.post(ENDPOINTS.AUTH.LOGIN, credentials)
    return data
  },

  // Register
  register: async (userData: RegisterData): Promise<RegisterResponse> => {
    const { data } = await httpRequest.post(ENDPOINTS.AUTH.REGISTER, userData)
    return data
  },

  // Logout
  logout: async (): Promise<void> => {
    const { data } = await httpRequest.post(ENDPOINTS.AUTH.LOGOUT)
    return data
  },

  // Refresh Token 
  refreshToken: async (): Promise<AuthResponse> => {
    const { data } = await httpRequest.post(`${ENDPOINTS.AUTH.REFRESH}`)
    return data
  },

  getCurrentUser: async (): Promise<MeResponse> => {
    const { data } = await httpRequest.get(ENDPOINTS.AUTH.ME)
    return data
  },

  changePassword: async (passwords: ChangePasswordData): Promise<void> => {
    await httpRequest.post(ENDPOINTS.AUTH.CHANGE_PASSWORD, passwords)
  },

  resetPassword: async (resetData: ResetPasswordData): Promise<void> => {
    await httpRequest.post(ENDPOINTS.AUTH.RESET_PASSWORD, resetData)
  }
}