import axiosInstance from '../index'

export function getDashboardData (detail = false) {
  return axiosInstance.get('/dashboard', {
    data: {
      detail
    }
  })
}
