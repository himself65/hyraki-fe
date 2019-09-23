import axiosInstance from '../'
import { DateForm } from '../../types/Date'

export function postAddDate (data: DateForm) {
  return axiosInstance.post('/date', {
    ...data
  })
}
