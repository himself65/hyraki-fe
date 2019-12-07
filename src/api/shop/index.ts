import axiosInstance from '../'
import { Serve, Shop } from '~type/Shop'
import { WorkerPosition } from '~type/Worker'
import { ListAPI } from '~type/API'

// fixme: 后端尚未支持
export async function getShopList (brandID: string | number) {
  return axiosInstance.get<ListAPI<Shop[]>>(`/brand/${brandID}/shop`)
}

export async function getShopServeList (shopID: string) {
  return axiosInstance.get<ListAPI<Serve[]>>('/shop/serves', {
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
