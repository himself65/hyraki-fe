import axiosInstance from '../index'
import { axiosHandle } from '../../utils/helpers'
import { Good, GoodBrief } from '../../types/Good'
import { AxiosResponse } from 'axios'
import { ListAPI } from '../../types/API'

export async function getGoods(brief: true): Promise<AxiosResponse<ListAPI<GoodBrief[]>>>
export async function getGoods(brief: false): Promise<AxiosResponse<ListAPI<Good[]>>>
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
