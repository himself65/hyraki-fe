export interface WorkerBrieData {
  shop: string
  name: string
  id: number
  phone: number
  position: string
  avatar: string
  gender: string
  remark: string
}

export interface WorkerPosition {
  id: string,
  value: string
}

export type WorkerPositionAPI = WorkerPosition[]
