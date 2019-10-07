import { Optional } from '.'

export interface WorkerBrief {
  shop: string
  name: string
  id: number
  phone: number
  position: string
  avatar: string
  gender: string
  remark: string
}

export interface Worker extends Optional<WorkerBrief> {

}

export interface WorkerPosition {
  id: string,
  value: string
}

export type WorkerPositionAPI = WorkerPosition[]
