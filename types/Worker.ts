import { Gender } from '~util/shared'

export interface Worker {
  id: number
  brand_id: string
  shop_id: string
  shop: string
  name: string
  phone: number
  position: string
  gender: Gender
  remark: string
}

export interface WorkerPosition {
  id: string
  value: string
}
