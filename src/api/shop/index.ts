import axiosInstance from '../'
import { Serve, Shop } from '../../../types/Shop'
import { WorkerPosition } from '../../../types/Worker'
import { ListAPI } from '../../../types/API'

// fixme
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
