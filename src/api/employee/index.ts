import axiosInstance from '../index'

export async function getEmployeeList (shopID = 1) {
  return axiosInstance.get('/employee')
}
