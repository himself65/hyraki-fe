import axiosInstance from '../index'
import { axiosHandle } from '~util/helpers'
import { BaseAPI } from '~type/API'
import { DashBoardData } from '~type/Dashboard'

export async function getDashboardData (detail = false) {
  return axiosInstance.get<BaseAPI<DashBoardData>>('/dashboard', {
    data: {
      detail
    }
  }).then(value => axiosHandle(value))
}
