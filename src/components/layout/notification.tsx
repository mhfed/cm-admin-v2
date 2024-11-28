import React from 'react'

import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover'
import { IconBell } from '@tabler/icons-react'
import { Button } from '@components/custom/button'

const Notification = () => {
  return (
    <Popover>
    <PopoverTrigger asChild>
      <Button variant='ghost' size='icon' className='relative'>
        <IconBell className="w-5 h-5" />
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
          4
        </span>
      </Button>
    </PopoverTrigger>
    <PopoverContent className="p-0 w-96" align="end">
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="font-semibold">Thông báo</div>
        <Button variant="ghost" size="sm">
          Đánh dấu tất cả là đã đọc
        </Button>
      </div>
      <div className="max-h-[300px] overflow-y-auto">
        {[1, 2, 3, 4,5,6,7,8,9,10].map((_, i) => (
          <div
            key={i}
            className="flex items-start gap-4 px-4 py-3 hover:bg-muted/50"
          >
            <span className="flex w-2 h-2 mt-1 rounded-full shrink-0 bg-sky-500" />
            <div className="grid gap-1">
              <div className="text-sm">
                <span className="font-semibold">James Smith</span> đã mời
                bạn tham gia nhóm
              </div>
              <div className="text-xs text-muted-foreground">
                2 giờ trước
              </div>
            </div>
          </div>
        ))}
      </div>
    </PopoverContent>
    </Popover>
  )
}

export default Notification