"use client"

import * as React from "react"
import { format, subDays, startOfWeek, endOfWeek, startOfMonth, endOfMonth, subWeeks, subMonths } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { vi } from "date-fns/locale"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@components/ui/popover"
import { Button } from "@components/custom/button"
import { Calendar } from "@components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select"

export function CalendarDateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const today = new Date()
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: today,
    to: today,
  })

  const handleSelect = (value: string) => {
    switch(value) {
      case 'today':
        setDate({ from: today, to: today })
        break
      case 'yesterday':{
        const yesterday = subDays(today, 1)
        setDate({ from: yesterday, to: yesterday })
        break
      }
      case 'this-week':
        setDate({ 
          from: startOfWeek(today, { locale: vi }), 
          to: endOfWeek(today, { locale: vi }) 
        })
        break
      case 'last-week':{
        const lastWeek = subWeeks(today, 1)
        setDate({ 
          from: startOfWeek(lastWeek, { locale: vi }), 
          to: endOfWeek(lastWeek, { locale: vi }) 
        })
        break
      }
      case 'this-month':
        setDate({ 
          from: startOfMonth(today), 
          to: endOfMonth(today) 
        })
        break
      case 'last-month':{
        const lastMonth = subMonths(today, 1)
        setDate({ 
          from: startOfMonth(lastMonth), 
          to: endOfMonth(lastMonth) 
        })
        break
      }
    }
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="w-4 h-4 mr-2" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y", { locale: vi })} -{" "}
                  {format(date.to, "LLL dd, y", { locale: vi })}
                </>
              ) : (
                format(date.from, "LLL dd, y", { locale: vi })
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" align="end">
          <div className="flex flex-col gap-4">
            <Select onValueChange={handleSelect} defaultValue="today">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Chọn khoảng thời gian" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Hôm nay</SelectItem>
                <SelectItem value="yesterday">Hôm qua</SelectItem>
                <SelectItem value="this-week">Tuần này</SelectItem>
                <SelectItem value="last-week">Tuần trước</SelectItem>
                <SelectItem value="this-month">Tháng này</SelectItem>
                <SelectItem value="last-month">Tháng trước</SelectItem>
              </SelectContent>
            </Select>

            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              locale={vi}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
