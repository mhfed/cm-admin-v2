import {
  IconApps,
  IconBarrierBlock,
  IconBoxSeam,
  IconChartHistogram,
  IconChecklist,
  IconComponents,
  IconError404,
  IconExclamationCircle,
  IconHexagonNumber1,
  IconHexagonNumber2,
  IconHexagonNumber3,
  IconHexagonNumber4,
  IconHexagonNumber5,
  IconLayoutDashboard,
  IconMessages,
  IconRouteAltLeft,
  IconServerOff,
  IconSettings,
  IconTruck,
  IconUserShield,
  IconUsers,
  IconLock,
  IconHome,
  IconShoppingCart,
  IconGift,
  IconFileText,
  IconUser,
  IconChartBar,
  IconStar,
  IconTool,
  IconLink,
  IconShoppingBag,
  // IconEye,
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
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Đơn đặt hàng được phân công',
        href: '/orders/assigned',
        icon: <IconHexagonNumber2 size={18} />,
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
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Danh mục',
        href: '/categories',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Nhóm sản phẩm',
        href: '/collections',
        icon: <IconHexagonNumber3 size={18} />,
      },
      {
        title: 'Phân loại sản phẩm',
        href: '/products/category',
        icon: <IconHexagonNumber4 size={18} />,
        sub: [
          {
            title: 'Product Category',
            href: '/products/category',
            icon: <IconHexagonNumber1 size={18} />,
          },
          {
            title: 'Products',
            href: '/products/list',
            icon: <IconHexagonNumber2 size={18} />,
          },
          {
            title: 'Product Tags',
            href: '/products/tags',
            icon: <IconHexagonNumber3 size={18} />,
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
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Danh mục bài viết',
        href: '/blogs',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Quản lý SEO',
        href: '/articles/seo',
        icon: <IconHexagonNumber3 size={18} />,
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
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Tích điểm Coolclub',
        href: '/customers/tich-diem',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Loại bỏ thông báo',
        href: '/customers/opt-out',
        icon: <IconHexagonNumber3 size={18} />,
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
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Top nhân viên',
        href: '/reports/top-staffs',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Sản phẩm theo đơn',
        href: '/reports/products',
        icon: <IconHexagonNumber3 size={18} />,
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
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Quản lý SEO',
        href: '/seo',
        icon: <IconHexagonNumber2 size={18} />,
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
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'VietFul CXP',
        href: '/tool/vietful-cxp',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Mapping',
        href: '/tool/mapping',
        icon: <IconHexagonNumber3 size={18} />,
        sub: [
          {
            title: 'Mapping Sàn',
            href: '/tool/mapping/san',
            icon: <IconHexagonNumber1 size={18} />,
          },
          {
            title: 'Import file sản phẩm',
            href: '/tool/mapping/import-product',
            icon: <IconHexagonNumber2 size={18} />,
          },
          {
            title: 'Swap Barcode',
            href: '/tool/mapping/swap-barcode',
            icon: <IconHexagonNumber3 size={18} />,
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
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Cài đặt chung',
        href: '/settings/general',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Nhân viên',
        href: '/staffs',
        icon: <IconHexagonNumber3 size={18} />,
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
        icon: <IconHexagonNumber1 size={18} />,
      },
      {
        title: 'Đăng nhập (Box)',
        label: '',
        href: '/sign-in-2',
        icon: <IconHexagonNumber2 size={18} />,
      },
      {
        title: 'Đăng ký',
        label: '',
        href: '/sign-up',
        icon: <IconHexagonNumber3 size={18} />,
      },
      {
        title: 'Quên mật khẩu',
        label: '',
        href: '/forgot-password',
        icon: <IconHexagonNumber4 size={18} />,
      },
      {
        title: 'Mã OTP',
        label: '',
        href: '/otp',
        icon: <IconHexagonNumber5 size={18} />,
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
        icon: <IconTruck size={18} />,
      },
      {
        title: 'Hàng hóa',
        label: '',
        href: '/cargos',
        icon: <IconBoxSeam size={18} />,
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
        icon: <IconError404 size={18} />,
      },
      {
        title: 'Lỗi máy chủ',
        label: '',
        href: '/500',
        icon: <IconServerOff size={18} />,
      },
      {
        title: 'Đang bảo trì',
        label: '',
        href: '/503',
        icon: <IconBarrierBlock size={18} />,
      },
      {
        title: 'Không được phép',
        label: '',
        href: '/401',
        icon: <IconLock size={18} />,
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
