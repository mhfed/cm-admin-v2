import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'

export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Nguyễn Văn An</p>
          <p className='text-sm text-muted-foreground'>
            nguyenvanan@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>+45.000.000đ</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='flex items-center justify-center space-y-0 border h-9 w-9'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>TH</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Trần Thị Hoa</p>
          <p className='text-sm text-muted-foreground'>tranhoa@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+900.000đ</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Lê Minh</p>
          <p className='text-sm text-muted-foreground'>
            leminh@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>+6.900.000đ</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>PH</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Phạm Hoàng</p>
          <p className='text-sm text-muted-foreground'>phamhoang@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+2.300.000đ</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>TT</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Trương Thanh</p>
          <p className='text-sm text-muted-foreground'>truongthanh@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+900.000đ</div>
      </div>
    </div>
  )
}
