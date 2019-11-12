import { Gender } from '~util/shared'

export interface Worker {
  shop: string
  name: string
  id: number
  phone: number
  position: string
  avatar: string // 头像地址
  gender: Gender
  remark: string
}

export interface WorkerPosition {
  id: string
  value: string
}
