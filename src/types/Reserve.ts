export interface ReserveForm {
  phone: string // tip: '+8613835401234', '13835401234' 都可以运行
  targetShop: string
  order: any // todo: add 'order' type
  startTime: number
  tip: string
}
