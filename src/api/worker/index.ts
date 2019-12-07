import axiosInstance from '../index'
import { Worker, WorkerPosition } from '~type/Worker'
import { ListAPI, PostAPI } from '~type/API'

export async function getWorkerList (brandID: string, shopID: string) {
  return axiosInstance.get<ListAPI<Worker[]>>(`/brand/${brandID}/shop/${shopID}/worker`, {
    params: {
      id: shopID
    }
  })
}

// fixme: abandoned api
export async function postAddWorker (brandID: string, shopID: string, data: Worker) {
  return axiosInstance.post<PostAPI>(`/brand/${brandID}/shop/${shopID}/worker`, data)
}

// fixme: abandoned api
export async function deleteWorker (brandID: string, shopID: string, id: string | number) {
  return axiosInstance.delete(`/brand/${brandID}/shop/${shopID}/worker`, {
    data: {
      id
    }
  })
}

export async function getWorkerPositionList (brandID: string, shopID: string, brief = true) {
  return axiosInstance.get<ListAPI<WorkerPosition[]>>(`/brand/${brandID}/shop/${shopID}/worker/position`, {
    params: {
      brief: brief
    }
  })
}
