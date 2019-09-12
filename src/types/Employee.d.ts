export interface EmployeeBrieData {
  shop: string
  name: string
  id: number
  phone: number
  position: string
  avatar: string
  sex: string
  remark: string
}

export interface EmployeePosition {
  id: string,
  value: string
}

export type EmployeePositionAPI = EmployeePosition[]
