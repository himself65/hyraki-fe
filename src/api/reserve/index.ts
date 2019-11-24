import axiosInstance from '../'
import { Reserve } from '~type/Reserve'
import { axiosHandle } from '~util/helpers'

export function postAddReserve (data: Reserve) {
  return axiosInstance.post('/reserves', {
    ...data
  }).then(value => axiosHandle(value))
}

export function getReserves (page = 0) {
  return axiosInstance.get('/reserves', {
    params: {
      page
    }
  }).then(value => axiosHandle(value))
}
