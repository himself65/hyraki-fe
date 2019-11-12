import axiosInstance from '../'
import { ReserveForm } from '~types/Reserve'

export function postAddReserve (data: ReserveForm) {
  return axiosInstance.post('/reserve', {
    ...data
  })
}
