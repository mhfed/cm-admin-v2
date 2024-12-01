import { LoginForm } from './components/login-form'
import CMLogo from '@/assets/images/logo.png'
import { useAuthStore } from '@/stores/auth'

export default function SignIn() {
  const setUserRole = useAuthStore(state => state.setUserRole)

  const handleLogin = async (data: LoginFormData) => {
    try {
      const response = await loginApi(data)
      // Giả sử response trả về role của user
      setUserRole(response.role)
      // Xử lý redirect sau khi login thành công
    } catch (error) {
      // Xử lý error
    }
  }

  return (
    <>
      <div className='container relative grid flex-col items-center justify-center h-svh lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <div className='relative flex-col hidden h-full p-10 text-white bg-muted dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium text-blue-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-6 h-6 mr-2'
            >
              <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
            </svg>
            Coolmate Admin
          </div>

          <img
            src={CMLogo}
            className='relative m-auto'
            width={301}
            height={60}
            alt='Vite'
          />

          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-center'>
                “Một mình chúng ta làm được rất ít, <br />
                Cùng nhau, chúng ta sẽ làm được những điều lớn lao”
              </p>
              <p className='italic text-md'>
                &ldquo;Chúng ta là một tập thể của những con người Việt Nam bình thường, nhưng nếu cùng nhau, cùng nỗ lực và dấn thân, chúng ta sẽ tạo nên những điều phi thường.&rdquo;
              </p>
              <footer className='text-sm'>Pham Chi Nhu</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-left'>
              <h1 className='text-2xl font-semibold tracking-tight'>Đăng nhập</h1>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}
