import axiosInstance from '../'
import { ShopListAPI } from '../../types/Shop'
import { EmployeePositionAPI } from '../../types/Employee'

export async function getAllShopList () {
  return axiosInstance.get<ShopListAPI>('/shop')
}

export async function getPositionList (shopID: string) {
  return axiosInstance.get<EmployeePositionAPI>('/employee/position')
}
