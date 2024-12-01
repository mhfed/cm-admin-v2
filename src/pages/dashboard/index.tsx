import { Search } from '@components/common/search'
import ThemeSwitch from '@components/common/theme-switch'
import { Button } from '@components/custom/button'
import { Layout } from '@components/custom/layout'
import Notification from '@components/layout/notification'
import { TopNav } from '@components/layout/top-nav'
import { UserNav } from '@components/layout/user-nav'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
// import { DailyRevenueChart } from '@pages/dashboard/components/daily-revenue-chart'
import { CalendarDateRangePicker } from '@pages/dashboard/components/date-range-picker'
import { Overview } from '@pages/dashboard/components/overview'
import { OverviewCard } from '@pages/dashboard/components/overview-card'
import { RecentSales } from '@pages/dashboard/components/recent-sales'


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
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
          <div className='flex items-center space-x-2'>
            <CalendarDateRangePicker />
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

            <OverviewCard />

            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
              <Card className='col-span-1 lg:col-span-2'>
                <CardHeader>
                  <CardTitle className='uppercase'>Doanh thu theo ngày</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  
                  <Overview />

                  {/* <DailyRevenueChart /> */}
                  
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-1 h-fit'>
                <CardHeader>
                  <CardTitle>Đơn hàng mới</CardTitle>
                  <CardDescription>
                    1.735
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
