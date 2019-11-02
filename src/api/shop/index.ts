import axiosInstance from '../'
import { ServeListAPI, Shop } from '../../types/Shop'
import { WorkerPosition } from '../../types/Worker'
import { ListAPI } from '../../types/API'

export async function getShopList () {
  return axiosInstance.get<ListAPI<Shop[]>>('/shop')
}

export async function getShopServeList (shopID: string) {
  return axiosInstance.get<ListAPI<ServeListAPI>>('/shop/serve', {
    params: {
      id: shopID
    }
  })
}

export async function getPositionList (shopID: string) {
  return axiosInstance.get<ListAPI<WorkerPosition[]>>('/worker/position', {
    params: {
      id: shopID
    }
  })
}
