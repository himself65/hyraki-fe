import axiosInstance from '../index'
import { axiosHandle } from '~util/helpers'
import { Good, GoodBrief, Supplier } from '~type/Good'
import { AxiosResponse } from 'axios'
import { ListAPI, MessageAPI } from '~type/API'

export async function getGoods (brandID: string, shopID: string, brief: true): Promise<AxiosResponse<ListAPI<GoodBrief[]>>>
export async function getGoods (brandID: string, shopID: string, brief: false): Promise<AxiosResponse<ListAPI<Good[]>>>
// implement
export async function getGoods (
  brandID: string,
  shopID: string,
  brief = false
): Promise<AxiosResponse<ListAPI<(Good | GoodBrief)[]>>> {
  return axiosInstance.get<ListAPI<(Good | GoodBrief)[]>>(`/brand/${brandID}/shop/${shopID}/goods`, {
    params: {
      brief: brief
    }
  }).then(value => axiosHandle(value))
}

export async function addGood (
  brandID: string,
  shopID: string,
  good: Good | GoodBrief
) {
  return axiosInstance.post<MessageAPI>(`/brand/${brandID}/shop/${shopID}/good`, { good }).then(value => axiosHandle(value))
}

export async function deleteGoods (
  brandID: string,
  shopID: string,
  id: string | number | (string | number)[]
) {
  return axiosInstance.delete<MessageAPI>(`/brand/${brandID}/shop/${shopID}/good/${id}`, {
    params: {
      id: id
    }
  }).then(value => axiosHandle(value))
}

export async function getSupplier (shopID: string) {
  return axiosInstance.get<ListAPI<Supplier[]>>('/suppliers', {
    params: {
      id: shopID
    }
  }).then(value => axiosHandle(value))
}
