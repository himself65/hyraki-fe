import axiosInstance from '../index'
import { axiosHandle } from '../../utils/helpers'
import { Good, GoodBrief } from '../../types/Good'
import { AxiosResponse } from 'axios'

export async function getGoods(brief: true): Promise<AxiosResponse<(GoodBrief)[]>>
export async function getGoods(brief: false): Promise<AxiosResponse<(Good)[]>>
export async function getGoods (brief: boolean = false): Promise<AxiosResponse<(Good | GoodBrief)[]>> {
  return axiosInstance.get<(Good | GoodBrief)[]>('/goods', {
    params: {
      brief: brief
    }
  }).then(value => axiosHandle(value))
}
