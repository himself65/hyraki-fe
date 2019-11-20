import axiosInstance from '../'
import { Reserve } from '~type/Reserve'

export function postAddReserve (data: Reserve) {
  return axiosInstance.post('/reserve', {
    ...data
  })
}
