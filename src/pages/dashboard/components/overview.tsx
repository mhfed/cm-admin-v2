import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: '6 Nov',
    revenue: 120000000,
    profit: 20000000,
  },
  {
    name: '8 Nov', 
    revenue: 125000000,
    profit: 22000000,
  },
  {
    name: '10 Nov',
    revenue: 130000000,
    profit: 25000000,
  },
  {
    name: '16 Nov',
    revenue: 150000000,
    profit: 28000000,
  },
  {
    name: '17 Nov',
    revenue: 140000000,
    profit: 26000000,
  },
  {
    name: '20 Nov',
    revenue: 135000000,
    profit: 24000000,
  },
  {
    name: '21 Nov',
    revenue: 145000000,
    profit: 27000000,
  },
  {
    name: '22 Nov',
    revenue: 130000000,
    profit: 23000000,
  },
  {
    name: '23 Nov',
    revenue: 180000000,
    profit: 30000000,
  },
  {
    name: '25 Nov',
    revenue: 500000000,
    profit: 100000000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${(value/1000000).toFixed(0)}tr`}
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey='revenue'
          stroke='#2563eb'
          name='Doanh thu theo ngày'
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey='profit'
          stroke='#ef4444' 
          name='Doanh thu sau chiết khấu'
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
