const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export const ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: `${API_URL}/auth/login`,
    REGISTER: `${API_URL}/auth/register`,
    LOGOUT: `${API_URL}/auth/logout`,
    REFRESH: `${API_URL}/auth/refresh`,
    ME: `${API_URL}/auth/me`,
    CHANGE_PASSWORD: `${API_URL}/auth/change-password`,
    RESET_PASSWORD: `${API_URL}/auth/reset-password`,
  },

  // Users
  USERS: {
    LIST: `${API_URL}/users`,
    GET: (id: string) => `${API_URL}/users/${id}`,
    CREATE: `${API_URL}/users`,
    UPDATE: (id: string) => `${API_URL}/users/${id}`,
    DELETE: (id: string) => `${API_URL}/users/${id}`,
  },

  // Collections
  COLLECTIONS: {
    LIST: `${API_URL}/collections`,
    GET: (id: string) => `${API_URL}/collections/${id}`,
    CREATE: `${API_URL}/collections`,
    UPDATE: (id: string) => `${API_URL}/collections/${id}`,
    DELETE: (id: string) => `${API_URL}/collections/${id}`,
  },

  // Categories
  CATEGORIES: {
    LIST: `${API_URL}/categories`,
    GET: (id: string) => `${API_URL}/categories/${id}`,
  },

  // Products
  PRODUCTS: {
    LIST: `${API_URL}/products`,
    GET: (id: string) => `${API_URL}/products/${id}`,
    CREATE: `${API_URL}/products`,
    UPDATE: (id: string) => `${API_URL}/products/${id}`,
    DELETE: (id: string) => `${API_URL}/products/${id}`,
  },

  // Orders
  ORDERS: {
    LIST: `${API_URL}/orders`,
    GET: (id: string) => `${API_URL}/orders/${id}`,
  },

  // Reviews
  REVIEWS: {
    LIST: `${API_URL}/reviews`,
    GET: (id: string) => `${API_URL}/reviews/${id}`,
  },

  // Blogs
  BLOGS: {
    LIST: `${API_URL}/blogs`,
    GET: (id: string) => `${API_URL}/blogs/${id}`,
    CREATE: `${API_URL}/blogs`,
    UPDATE: (id: string) => `${API_URL}/blogs/${id}`,
    DELETE: (id: string) => `${API_URL}/blogs/${id}`,
  },

  // Articles
  ARTICLES: {
    LIST: `${API_URL}/articles`,
    GET: (id: string) => `${API_URL}/articles/${id}`,
  },

  // Dashboard
  DASHBOARD: {
    ORDER_REPORT: `${API_URL}/dashboard/order-report`,
    PRODUCT_REPORT: `${API_URL}/dashboard/product-report`,
  },
}
