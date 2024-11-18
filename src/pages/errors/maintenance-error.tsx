import { Button } from '@/components/custom/button'

export default function MaintenanceError() {
  return (
    <div className='h-svh'>
      <div className='flex flex-col items-center justify-center w-full h-full gap-2 m-auto'>
        <h1 className='text-[7rem] font-bold leading-tight'>503</h1>
        <span className='font-medium'>Trang web đang được bảo trì!</span>
        <p className='text-center text-muted-foreground'>
          Trang web hiện không khả dụng. <br />
          Chúng tôi sẽ sớm hoạt động trở lại.
        </p>
        <div className='flex gap-4 mt-6'>
          <Button variant='outline'>Tìm hiểu thêm</Button>
        </div>
      </div>
    </div>
  )
}
