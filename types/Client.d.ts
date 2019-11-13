import { Gender } from '~util/shared'

export interface Card {
  id: string
  name: string
  type: string
  discount: number
  total: number // 储蓄总额
  cost: number // 消费总额
  balance: number // 卡内余额
  gift: number // 赠送余额
  expiated: number // 卡失效日期
}

export interface Client {
  id: string
  name: string
  phone: string
  gender: Gender
  remark: string
  created_date: number // 创建日期
  last_appear: number // 上一次到店日期
  cards: Card[] // 卡
  times: number // 消费次数
  integration: number // 积分
}
