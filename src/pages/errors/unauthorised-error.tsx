import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/custom/button'

export default function UnauthorisedError() {
  const navigate = useNavigate()
  return (
    <div className='h-svh'>
      <div className='flex flex-col items-center justify-center w-full h-full gap-2 m-auto'>
        <h1 className='text-[7rem] font-bold leading-tight'>401</h1>
        <span className='font-medium'>
          Rất tiếc! Bạn không có quyền truy cập trang này.
        </span>
        <p className='text-center text-muted-foreground'>
          Có vẻ như bạn đang cố truy cập vào tài nguyên yêu cầu xác thực. <br />
          Vui lòng đăng nhập với thông tin đăng nhập phù hợp.
        </p>
        <div className='flex gap-4 mt-6'>
          <Button variant='outline' onClick={() => navigate(-1)}>
            Quay Lại
          </Button>
          <Button onClick={() => navigate('/')}>Về Trang Chủ</Button>
        </div>
      </div>
    </div>
  )
}
