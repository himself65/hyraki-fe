import axiosInstance from '../index'
import { Worker, WorkerPositionAPI } from '../../types/Worker'

export async function getWorkerList (shopID = 1) {
  return axiosInstance.get('/worker')
}

// fixme: any type
export async function postAddWorker (data: Worker) {
  return axiosInstance.post('/worker', data)
}

export async function deleteWorker (id: string | number) {
  return axiosInstance.delete('/worker', {
    data: {
      id
    }
  })
}

export async function getWorkerPositions (brief: boolean = true) {
  return axiosInstance.get<WorkerPositionAPI>('/worker/position', {
    params: {
      brief: brief
    }
  })
}
