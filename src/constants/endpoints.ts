const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export const ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_URL}/auth/login`,
    REGISTER: `${API_URL}/auth/register`,
    LOGOUT: `${API_URL}/auth/logout`,
  },
  USERS: {
    LIST: `${API_URL}/users`,
    GET: (id: string) => `${API_URL}/users/${id}`,
    CREATE: `${API_URL}/users`,
    UPDATE: (id: string) => `${API_URL}/users/${id}`,
    DELETE: (id: string) => `${API_URL}/users/${id}`,
  }
  // Thêm các endpoint khác
}