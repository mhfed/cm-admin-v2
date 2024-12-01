import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'
import { CreditCardIcon, DollarSignIcon, Info, LogOutIcon } from 'lucide-react'


export function OverviewCard() {
  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      <Card className='text-white bg-primary'>
        <CardHeader className='flex flex-row items-center justify-between gap-2 pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium uppercase'>
            Doanh thu
          </CardTitle>
          <DollarSignIcon size={16} />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold text-right'>628.804.555đ</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-end gap-2 pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium uppercase'>
            Chờ thanh toán
          </CardTitle>
          <LogOutIcon size={16} />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold text-right'>441.465.772đ</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-end gap-2 pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium uppercase'>Đã thanh toán</CardTitle>
          <CreditCardIcon size={16} />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold text-right'>187.338.783đ</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className='flex flex-row items-center justify-end gap-2 pb-2 space-y-0'>
          <CardTitle className='text-sm font-medium text-red-500 uppercase'>
            Đã hủy
          </CardTitle>
          <Info size={16} className='text-red-500' />
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold text-right text-red-500'>52.928.000đ</div>
        </CardContent>
      </Card>
    </div>
  )
}
