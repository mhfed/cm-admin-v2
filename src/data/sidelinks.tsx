import {
  IconChartBar,
  IconDots,
  IconCircleDotFilled,
  IconFileText,
  IconGift,
  IconHome,
  IconLink,
  IconSettings,
  IconShoppingBag,
  IconShoppingCart,
  IconStar,
  IconTool,
  IconUser,
  IconPalette,
} from '@tabler/icons-react'
import { checkPermission } from '@utils/permission'

export interface SideLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
  sub?: SideLink[]
  permissions?: string[]
}

const createSideLink = (
  title: string,
  href: string,
  icon: JSX.Element,
  permissions?: string[],
  sub?: SideLink[],
  label?: string,
): SideLink => ({
  title,
  href,
  icon,
  permissions,
  sub,
  label,
})

const createPermissionLink = (
  permission: string | string[],
  permissions: string[],
  link: SideLink,
  invert: boolean = false
): SideLink | null => {
  return link // Tạm thời cho phép tất cả, sau xóa

  const hasPermission = checkPermission(
    Array.isArray(permission) ? permission : [permission],
    permissions,
    invert
  )
  return hasPermission ? link : null  
}

export const getSidelinks = (permissions: string[], userId: string) => {
  const links: (SideLink | null)[] = [
    createPermissionLink('view_dashboard', permissions,
      createSideLink('Trang tổng quan', '/', <IconHome size={18} />, ['view_dashboard'])
    ),
    
    createPermissionLink('view_order', permissions,
      createSideLink('Đơn đặt hàng', '/orders', <IconShoppingCart size={18} />, ['view_order'], [
        createSideLink('Tất cả đơn hàng', '/orders', <IconCircleDotFilled size={18} />),
        createSideLink(
          'Đơn đặt hàng được phân công', 
          `/orders/assigned?staff_id_shift=${userId}`,
          <IconCircleDotFilled size={18} />
        ),
      ])
    ),

    createPermissionLink('view_product', permissions,
      createSideLink('Sản phẩm', '/products', <IconShoppingBag size={18} />, ['view_product'], [
        createSideLink('Tất cả sản phẩm', '/products', <IconCircleDotFilled size={18} />),
        createSideLink('Danh mục', '/categories', <IconCircleDotFilled size={18} />),
        createSideLink('Nhóm sản phẩm', '/collections', <IconCircleDotFilled size={18} />),
        createSideLink('Phân loại sản phẩm', '/products/category', <IconCircleDotFilled size={18} />, [], [
          createSideLink('Product Category', '/products/category', <IconDots size={18} />),
          createSideLink('Products', '/products/list', <IconDots size={18} />),
          createSideLink('Product Tags', '/products/tags', <IconDots size={18} />),
        ]),
      ])
    ),

    createPermissionLink('view_discount', permissions,
      createSideLink('Mã giảm giá', '/discounts', <IconGift size={18} />, ['view_discount'])
    ),

    createPermissionLink('view_page', permissions,
      createSideLink('Trang', '/pages', <IconFileText size={18} />, ['view_page'])
    ),

    createPermissionLink('view_article', permissions,
      createSideLink('Bài viết', '/articles', <IconFileText size={18} />, ['view_article'], [
        createSideLink('Tất cả bài viết', '/articles', <IconCircleDotFilled size={18} />),
        createPermissionLink('view_cate_articles', permissions,
          createSideLink('Danh mục bài viết', '/blogs', <IconCircleDotFilled size={18} />, ['view_cate_articles'])
        ) as SideLink,
        createPermissionLink('view_cate_articles', permissions,
          createSideLink('Quản lý SEO', '/articles/seo', <IconCircleDotFilled size={18} />, ['view_cate_articles'])
        ) as SideLink,
      ])
    ),

    createPermissionLink('view_customer', permissions,
      createSideLink('Khách hàng', '/customers', <IconUser size={18} />, ['view_customer'], [
        createSideLink('Tất cả khách hàng', '/customers', <IconCircleDotFilled size={18} />),
        createSideLink('Tích điểm Coolclub', '/customers/tich-diem', <IconCircleDotFilled size={18} />),
        createSideLink('Loại bỏ thông báo', '/customers/opt-out', <IconCircleDotFilled size={18} />),
      ])
    ),

    createPermissionLink('view_report', permissions,
      createSideLink('Báo cáo', '/reports', <IconChartBar size={18} />, ['view_report'], [
        createSideLink('Báo cáo tổng quan', '/reports', <IconCircleDotFilled size={18} />),
        createSideLink('Top nhân viên', '/reports/top-staffs', <IconCircleDotFilled size={18} />),
        createSideLink('Sản phẩm theo đơn', '/reports/products', <IconCircleDotFilled size={18} />),
      ])
    ),

    createPermissionLink('view_reviews', permissions,
      createSideLink('Đánh giá', '/reviews', <IconStar size={18} />, ['view_reviews'])
    ),

    createPermissionLink('view_seo_link', permissions,
      createSideLink('Quản lý link SEO', '/seo-redirect', <IconLink size={18} />, ['view_seo_link'], [
        createSideLink('SEO Redirects', '/seo-redirect', <IconCircleDotFilled size={18} />),
        createSideLink('Quản lý SEO', '/seo', <IconCircleDotFilled size={18} />),
      ])
    ),

    createPermissionLink('view_tools', permissions,
      createSideLink('Công cụ', '/tool', <IconTool size={18} />, ['view_tools'], [
        createSideLink('Đối soát Aff', '/tool/audit-aff', <IconCircleDotFilled size={18} />),
        createSideLink('VietFul CXP', '/tool/vietful-cxp', <IconCircleDotFilled size={18} />),
        createSideLink('Mapping', '/tool/mapping', <IconCircleDotFilled size={18} />, [], [
          createSideLink('Mapping Sàn', '/tool/mapping/san', <IconDots size={18} />),
          createSideLink('Import file sản phẩm', '/tool/mapping/import-product', <IconDots size={18} />),
          createSideLink('Swap Barcode', '/tool/mapping/swap-barcode', <IconDots size={18} />),
        ]),
      ])
    ),

    createPermissionLink(['content_member_article'], permissions,
      createSideLink('Quản lý', '/settings', <IconSettings size={18} />, [], [
        createPermissionLink('manage', permissions,
          createSideLink('Tác vụ ngầm', '/background-job', <IconCircleDotFilled size={18} />, ['manage'])
        ) as SideLink,
        createSideLink('Cài đặt chung', '/settings/general', <IconCircleDotFilled size={18} />),
        createPermissionLink('manage', permissions,
          createSideLink('Nhân viên', '/staffs', <IconCircleDotFilled size={18} />, ['manage'])
        ) as SideLink,
      ]),
      true
    ),
    
    createSideLink('UI', '', <IconPalette size={18} />, [], [
      createSideLink('Công việc', '/tasks', <IconCircleDotFilled size={18} />, []),
      createSideLink('Tin nhắn', '/chats', <IconCircleDotFilled size={18} />, []),
      createSideLink('Ứng dụng', '/apps', <IconCircleDotFilled size={18} />),
      createSideLink('Xác thực', '', <IconCircleDotFilled size={18} />, [], [
        createSideLink('Đăng nhập (email + mật khẩu)', '/sign-in', <IconCircleDotFilled size={18} />),
        createSideLink('Đăng nhập (Box)', '/sign-in-2', <IconCircleDotFilled size={18} />),
        createSideLink('Đăng ký', '/sign-up', <IconCircleDotFilled size={18} />),
        createSideLink('Quên mật khẩu', '/forgot-password', <IconCircleDotFilled size={18} />),
        createSideLink('Mã OTP', '/otp', <IconCircleDotFilled size={18} />),
      ]),
      createSideLink('Người dùng', '/users', <IconCircleDotFilled size={18} />),
      createSideLink('Yêu cầu', '/requests', <IconCircleDotFilled size={18} />, [], [
        createSideLink('Xe tải', '/trucks', <IconCircleDotFilled size={18} />, [], [], '9'),
        createSideLink('Hàng hóa', '/cargos', <IconCircleDotFilled size={18} />),
      ], '10'),
      createSideLink('Phân tích', '/analysis', <IconCircleDotFilled size={18} />),
      createSideLink('Thành phần bổ sung', '/extra-components', <IconCircleDotFilled size={18} />),
      createSideLink('Trang lỗi', '', <IconCircleDotFilled size={18} />, [], [
        createSideLink('Không tìm thấy', '/404', <IconCircleDotFilled size={18} />),
        createSideLink('Lỗi máy chủ', '/500', <IconCircleDotFilled size={18} />),
        createSideLink('Đang bảo trì', '/503', <IconCircleDotFilled size={18} />),
        createSideLink('Không được phép', '/401', <IconCircleDotFilled size={18} />),
      ]),
    ]),
  ]

  return links.filter((link): link is SideLink => link !== null)
}
