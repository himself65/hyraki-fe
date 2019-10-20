import axiosInstance from '../index'
import { defaultAxiosHandle } from '../../utils/helpers'

export async function getGoods (brief: boolean = false) {
  return axiosInstance.get('/goods', {
    params: {
      brief: brief
    }
  }).then(defaultAxiosHandle)
}
