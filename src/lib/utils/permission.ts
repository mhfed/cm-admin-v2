import { Permission } from "@constants/permissions"

/**
 * Kiểm tra quyền truy cập
 * @param needles Mảng các quyền cần kiểm tra
 * @param haystack Mảng các quyền hiện có
 * @param skipAdmin Bỏ qua quyền admin (mặc định: false)
 * @returns boolean
 */
export function checkPermission(
  needles: Permission[], 
  haystack: Permission[], 
  skipAdmin: boolean = false
): boolean {
  if (!Array.isArray(haystack)) return false
  if (haystack.includes('all') && !skipAdmin) return true
  
  return needles.every(needle => haystack.includes(needle))
}
