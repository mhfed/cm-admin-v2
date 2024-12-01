import { Outlet } from 'react-router-dom'
import Sidebar from '@components/layout/sidebar'
import useIsCollapsed from '@hooks/common/use-is-collapsed'
import SkipToMain from '@components/layout/skip-to-main'

export default function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()
  return (
    <div className='relative h-full overflow-hidden bg-background'>
      <SkipToMain />
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        id='content'
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
      >
        <Outlet />
      </main>
    </div>
  )
}