import axiosInstance from '../index'
import { Worker, WorkerPosition } from '../../types/Worker'
import { ListAPI, PostAPI } from '../../types/API'

export async function getWorkerList (shopID = 1) {
  return axiosInstance.get<ListAPI<Worker[]>>('/worker', {
    params: {
      id: shopID
    }
  })
}

export async function postAddWorker (data: Worker) {
  return axiosInstance.post<PostAPI>('/worker', data)
}

export async function deleteWorker (id: string | number) {
  return axiosInstance.delete('/worker', {
    data: {
      id
    }
  })
}

export async function getWorkerPositionList (brief: boolean = true) {
  return axiosInstance.get<ListAPI<WorkerPosition[]>>('/worker/position', {
    params: {
      brief: brief
    }
  })
}
