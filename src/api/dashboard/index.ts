import axiosInstance from '../index'
import { axiosHandle } from '../../utils/helpers'
import { BaseAPI } from '../../types/API'
import { DashBoardData } from '../../types/Dashboard'

export async function getDashboardData (detail = false) {
  return axiosInstance.get<BaseAPI<DashBoardData>>('/dashboard', {
    data: {
      detail
    }
  }).then(value => axiosHandle(value))
}
