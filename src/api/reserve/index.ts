import axiosInstance from '../'
import { ReserveForm } from '~type/Reserve'

export function postAddReserve (data: ReserveForm) {
  return axiosInstance.post('/reserve', {
    ...data
  })
}
