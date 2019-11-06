import axiosInstance from '../index'
import { axiosHandle } from '../../utils/helpers'
import { Good, GoodBrief, Supplier } from '../../../types/Good'
import { AxiosResponse } from 'axios'
import { ListAPI, MessageAPI } from '../../../types/API'

export async function getGoods (brief: true): Promise<AxiosResponse<ListAPI<GoodBrief[]>>>
export async function getGoods (brief: false): Promise<AxiosResponse<ListAPI<Good[]>>>
// implement
export async function getGoods (
  brief: boolean = false
): Promise<AxiosResponse<ListAPI<(Good | GoodBrief)[]>>> {
  return axiosInstance.get<ListAPI<(Good | GoodBrief)[]>>('/goods', {
    params: {
      brief: brief
    }
  }).then(value => axiosHandle(value))
}

export async function addGood (good: Good | GoodBrief) {
  return axiosInstance.post<MessageAPI>('/goods').then(value => axiosHandle(value))
}

export async function deleteGood (id: string | number) {
  return axiosInstance.delete<MessageAPI>('/goods', {
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
