import { User } from "@/types/user"

export type LoginCredentials = {
  email: string
  password: string
}

export type RegisterData = {
  email: string
  password: string
  name: string
}

export type AuthResponse = {
  user: User
  token: string
  refreshToken?: string
}

export type ChangePasswordData = {
  currentPassword: string
  newPassword: string
}

export type ResetPasswordData = {
  email: string
}

// Response types
export type LoginResponse = AuthResponse
export type RegisterResponse = AuthResponse
export type MeResponse = User
