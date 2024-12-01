import { ScrollArea } from "@components/ui/scroll-area"

export function RecentSales() {
  return (
    <ScrollArea className="h-[200px]">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Chờ xác nhận</p>
            <p className="text-sm text-blue-500 underline cursor-pointer">
              Check ngay
            </p>
          </div>
          <p className="text-2xl font-bold">887</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium leading-none">Đã xác nhận</p>
          <p className="text-2xl font-bold">649</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium leading-none">Đơn đã hoàn thành</p>
          <p className="text-2xl font-bold">649</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm font-medium leading-none">Đã hủy</p>
          <p className="text-2xl font-bold text-red-500">844</p>
        </div>
      </div>
    </ScrollArea>
  )
}