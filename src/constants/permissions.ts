export const PERMISSIONS = {
  ADMIN: ['all'],
  MANAGER: [
    'view_order', 'edit_order',
    'view_product', 'edit_product',
    'view_customer', 'edit_customer',
    'view_report', 'manage',
    // ... other permissions
  ],
  STAFF: [
    'view_order',
    'view_product',
    'view_customer',
    // ... limited permissions
  ],
  CUSTOMER_SERVICE: [
    'view_order',
    'view_customer',
    'view_reviews',
    // ... CS specific permissions
  ],
  // ... other roles
} as const

export type Permission = keyof typeof PERMISSIONS 