import {
  IconApps,
  IconChartBar,
  IconChartHistogram,
  IconChecklist,
  IconComponents,
  IconDots,
  IconCircleDotFilled,
  IconExclamationCircle,
  IconFileText,
  IconGift,
  IconHome,
  IconLayoutDashboard,
  IconLink,
  IconMessages,
  IconRouteAltLeft,
  IconSettings,
  IconShoppingBag,
  IconShoppingCart,
  IconStar,
  IconTool,
  IconUser,
  IconUserShield,
  IconUsers
} from '@tabler/icons-react'

export interface SideLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
  sub?: SideLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Trang tổng quan',
    label: '',
    href: '/',
    icon: <IconHome size={18} />,
  },
  {
    title: 'Đơn đặt hàng',
    label: '',
    href: '/orders',
    icon: <IconShoppingCart size={18} />,
    sub: [
      {
        title: 'Tất cả đơn hàng',
        href: '/orders',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Đơn đặt hàng được phân công',
        href: '/orders/assigned',
        icon: <IconCircleDotFilled size={18} />,
      }
    ]
  },
  {
    title: 'Sản phẩm',
    label: '',
    href: '/products',
    icon: <IconShoppingBag size={18} />,
    sub: [
      {
        title: 'Tất cả sản phẩm',
        href: '/products',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Danh mục',
        href: '/categories',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Nhóm sản phẩm',
        href: '/collections',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Phân loại sản phẩm',
        href: '/products/category',
        icon: <IconCircleDotFilled size={18} />,
        sub: [
          {
            title: 'Product Category',
            href: '/products/category',
            icon: <IconDots size={18} />,
          },
          {
            title: 'Products',
            href: '/products/list',
            icon: <IconDots size={18} />,
          },
          {
            title: 'Product Tags',
            href: '/products/tags',
            icon: <IconDots size={18} />,
          }
        ]
      }
    ]
  },
  {
    title: 'Mã giảm giá',
    label: '',
    href: '/discounts',
    icon: <IconGift size={18} />,
  },
  {
    title: 'Trang',
    label: '',
    href: '/pages',
    icon: <IconFileText size={18} />,
  },
  {
    title: 'Bài viết',
    label: '',
    href: '/articles',
    icon: <IconFileText size={18} />,
    sub: [
      {
        title: 'Tất cả bài viết',
        href: '/articles',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Danh mục bài viết',
        href: '/blogs',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Quản lý SEO',
        href: '/articles/seo',
        icon: <IconCircleDotFilled size={18} />,
      }
    ]
  },
  {
    title: 'Khách hàng',
    label: '',
    href: '/customers',
    icon: <IconUser size={18} />,
    sub: [
      {
        title: 'Tất cả khách hàng',
        href: '/customers',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Tích điểm Coolclub',
        href: '/customers/tich-diem',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Loại bỏ thông báo',
        href: '/customers/opt-out',
        icon: <IconCircleDotFilled size={18} />,
      }
    ]
  },
  {
    title: 'Báo cáo',
    label: '',
    href: '/reports',
    icon: <IconChartBar size={18} />,
    sub: [
      {
        title: 'Báo cáo tổng quan',
        href: '/reports',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Top nhân viên',
        href: '/reports/top-staffs',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Sản phẩm theo đơn',
        href: '/reports/products',
        icon: <IconCircleDotFilled size={18} />,
      }
    ]
  },
  {
    title: 'Đánh giá',
    label: '',
    href: '/reviews',
    icon: <IconStar size={18} />,
  },
  {
    title: 'Quản lý link SEO',
    label: '',
    href: '/seo-redirect',
    icon: <IconLink size={18} />,
    sub: [
      {
        title: 'SEO Redirects',
        href: '/seo-redirect',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Quản lý SEO',
        href: '/seo',
        icon: <IconCircleDotFilled size={18} />,
      }
    ]
  },
  {
    title: 'Công cụ',
    label: '',
    href: '/tool',
    icon: <IconTool size={18} />,
    sub: [
      {
        title: 'Đối soát Aff',
        href: '/tool/audit-aff',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'VietFul CXP',
        href: '/tool/vietful-cxp',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Mapping',
        href: '/tool/mapping',
        icon: <IconCircleDotFilled size={18} />,
        sub: [
          {
            title: 'Mapping Sàn',
            href: '/tool/mapping/san',
            icon: <IconDots size={18} />,
          },
          {
            title: 'Import file sản phẩm',
            href: '/tool/mapping/import-product',
            icon: <IconDots size={18} />,
          },
          {
            title: 'Swap Barcode',
            href: '/tool/mapping/swap-barcode',
            icon: <IconDots size={18} />,
          }
        ]
      }
    ]
  },
  {
    title: 'Quản lý',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
    sub: [
      {
        title: 'Tác vụ ngầm',
        href: '/background-job',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Cài đặt chung',
        href: '/settings/general',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Nhân viên',
        href: '/staffs',
        icon: <IconCircleDotFilled size={18} />,
      }
    ]
  },

  {
    title: 'Tổng quan',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Công việc',
    label: '3',
    href: '/tasks',
    icon: <IconChecklist size={18} />,
  },
  {
    title: 'Tin nhắn',
    label: '9',
    href: '/chats',
    icon: <IconMessages size={18} />,
  },
  {
    title: 'Ứng dụng',
    label: '',
    href: '/apps',
    icon: <IconApps size={18} />,
  },
  {
    title: 'Xác thực',
    label: '',
    href: '',
    icon: <IconUserShield size={18} />,
    sub: [
      {
        title: 'Đăng nhập (email + mật khẩu)',
        label: '',
        href: '/sign-in',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Đăng nhập (Box)',
        label: '',
        href: '/sign-in-2',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Đăng ký',
        label: '',
        href: '/sign-up',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Quên mật khẩu',
        label: '',
        href: '/forgot-password',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Mã OTP',
        label: '',
        href: '/otp',
        icon: <IconCircleDotFilled size={18} />,
      },
    ],
  },
  {
    title: 'Người dùng',
    label: '',
    href: '/users',
    icon: <IconUsers size={18} />,
  },
  {
    title: 'Yêu cầu',
    label: '10',
    href: '/requests',
    icon: <IconRouteAltLeft size={18} />,
    sub: [
      {
        title: 'Xe tải',
        label: '9',
        href: '/trucks',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Hàng hóa',
        label: '',
        href: '/cargos',
        icon: <IconCircleDotFilled size={18} />,
      },
    ],
  },
  {
    title: 'Phân tích',
    label: '',
    href: '/analysis',
    icon: <IconChartHistogram size={18} />,
  },
  {
    title: 'Thành phần bổ sung',
    label: '',
    href: '/extra-components',
    icon: <IconComponents size={18} />,
  },
  {
    title: 'Trang lỗi',
    label: '',
    href: '',
    icon: <IconExclamationCircle size={18} />,
    sub: [
      {
        title: 'Không tìm thấy',
        label: '',
        href: '/404',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Lỗi máy chủ',
        label: '',
        href: '/500',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Đang bảo trì',
        label: '',
        href: '/503',
        icon: <IconCircleDotFilled size={18} />,
      },
      {
        title: 'Không được phép',
        label: '',
        href: '/401',
        icon: <IconCircleDotFilled size={18} />,
      },
    ],
  },
  {
    title: 'Cài đặt',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
]
