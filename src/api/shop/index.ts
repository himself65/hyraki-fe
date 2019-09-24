import axiosInstance from '../'
import { ServeListAPI, ShopListAPI } from '../../types/Shop'
import { WorkerPositionAPI } from '../../types/Worker'

export async function getAllShopList () {
  return axiosInstance.get<ShopListAPI>('/shop')
}

export async function getAllShopServe (shopId: string) {
  return axiosInstance.get<ServeListAPI>('/shop/serve')
}

export async function getPositionList (shopID: string) {
  return axiosInstance.get<WorkerPositionAPI>('/worker/position')
}
