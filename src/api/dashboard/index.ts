import axiosInstance from '../index'

export async function getDashboardData (detail = false) {
  return axiosInstance.get('/dashboard', {
    data: {
      detail
    }
  })
}
