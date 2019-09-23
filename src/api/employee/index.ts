import axiosInstance from '../index'
import { EmployeePositionAPI } from '../../types/Employee'

export async function getEmployeeList (shopID = 1) {
  return axiosInstance.get('/employee')
}

// fixme: any type
export async function postAddEmployee (data: { [key: string]: any }) {
  return axiosInstance.post('/employee', data)
}

export async function deleteEmployee (id: string | number) {
  return axiosInstance.delete('/employee', {
    data: {
      id
    }
  })
}

export async function getEmployeePositions (brief: boolean = true) {
  return axiosInstance.get<EmployeePositionAPI>('/employee/position', {
    params: {
      brief: brief
    }
  })
}
