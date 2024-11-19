import { useNavigate } from 'react-router-dom'
import { Button } from '@components/custom/button'

export default function NotFoundError() {
  const navigate = useNavigate()
  return (
    <div className='h-svh'>
      <div className='flex flex-col items-center justify-center w-full h-full gap-2 m-auto'>
        <h1 className='text-[7rem] font-bold leading-tight'>404</h1>
        <span className='font-medium'>Rất tiếc! Không tìm thấy trang!</span>
        <p className='text-center text-muted-foreground'>
          Có vẻ như trang bạn đang tìm kiếm <br />
          không tồn tại hoặc đã bị xóa.
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
