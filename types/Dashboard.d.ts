import { TodoData } from '../src/components/Dashboard/TodoBoard'

export interface TodayData {
  full_income: {
    type: TrendType,
    number: number
  },
  customer_cost: {
    type: TrendType,
    number: number
  },
  all_customers: {
    type: TrendType,
    number: number
  }
}

export interface TrendData {
  today: number,
  sales: number[],
  all_sales: number
}

export interface DashBoardData {
  today: TodayData,
  trend: TrendData,
  todo: TodoData
}
