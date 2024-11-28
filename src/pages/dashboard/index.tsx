import { Layout } from '@components/custom/layout'
import { Button } from '@components/custom/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { Search } from '@components/common/search'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import ThemeSwitch from '@components/common/theme-switch'
import { TopNav } from '@components/layout/top-nav'
import { UserNav } from '@components/layout/user-nav'
import { RecentSales } from './components/recent-sales'
import { Overview } from './components/overview'
import Notification from '@components/layout/notification'

const DollarIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    className='w-4 h-4 text-muted-foreground'
  >
    <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
  </svg>
)

const UsersIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    className='w-4 h-4 text-muted-foreground'
  >
    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
    <circle cx='9' cy='7' r='4' />
    <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
  </svg>
)

const CreditCardIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    className='w-4 h-4 text-muted-foreground'
  >
    <rect width='20' height='14' x='2' y='5' rx='2' />
    <path d='M2 10h20' />
  </svg>
)

const ActivityIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    className='w-4 h-4 text-muted-foreground'
  >
    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
  </svg>
)

export default function Dashboard() {
  return (
    <Layout>
      {/* ===== Phần đầu ===== */}
      <Layout.Header>
        <TopNav links={topNav} />
        <div className='flex items-center ml-auto space-x-4'>
          <Search />
          <Notification />  
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      {/* ===== Nội dung chính ===== */}
      <Layout.Body>
        <div className='flex items-center justify-between mb-2 space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Bảng điều khiển</h1>
          <div className='flex items-center space-x-2'>
            <Button>Tải xuống</Button>
          </div>
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <div className='w-full pb-2 overflow-x-auto'>
            <TabsList>
              <TabsTrigger value='overview'>Tổng quan</TabsTrigger>
              <TabsTrigger value='analytics'>Phân tích</TabsTrigger>
              <TabsTrigger value='reports'>Báo cáo</TabsTrigger>
              <TabsTrigger value='notifications'>Thông báo</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
                  <CardTitle className='text-sm font-medium'>
                    Tổng doanh thu
                  </CardTitle>
                  <DollarIcon />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>$45,231.89</div>
                  <p className='text-xs text-muted-foreground'>
                    +20.1% so với tháng trước
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
                  <CardTitle className='text-sm font-medium'>
                    Đăng ký
                  </CardTitle>
                  <UsersIcon />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>+2350</div>
                  <p className='text-xs text-muted-foreground'>
                    +180.1% so với tháng trước
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
                  <CardTitle className='text-sm font-medium'>Doanh số</CardTitle>
                  <CreditCardIcon />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>+12,234</div>
                  <p className='text-xs text-muted-foreground'>
                    +19% so với tháng trước
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
                  <CardTitle className='text-sm font-medium'>
                    Đang hoạt động
                  </CardTitle>
                  <ActivityIcon />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>+573</div>
                  <p className='text-xs text-muted-foreground'>
                    +201 trong giờ qua
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4'>
                <CardHeader>
                  <CardTitle>Tổng quan</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Overview />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Doanh số gần đây</CardTitle>
                  <CardDescription>
                    Bạn đã thực hiện 265 giao dịch trong tháng này.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Layout.Body>
    </Layout>
  )
}

const topNav = [
  {
    title: 'Tổng quan',
    href: 'dashboard/overview',
    isActive: true,
  },
  {
    title: 'Khách hàng',
    href: 'dashboard/customers',
    isActive: false,
  },
  {
    title: 'Sản phẩm',
    href: 'dashboard/products',
    isActive: false,
  },
  {
    title: 'Cài đặt',
    href: 'dashboard/settings',
    isActive: false,
  },
]
