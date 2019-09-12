import axiosInstance from '../index'

export async function getEmployeeList (shopID = 1) {
  return axiosInstance.get('/employee')
}

// fixme: any type
export async function postAddEmployee (data: { [key: string]: any }) {
  return axiosInstance.post('/employee', data)
}
