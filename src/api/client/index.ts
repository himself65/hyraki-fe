import axiosInstance from '../index'
import { ListAPI } from '~type/API'
import { Client } from '~type/Client'
import { axiosHandle } from '~util/helpers'

export async function getClients (page = 0) {
  return axiosInstance.get<ListAPI<Client[]>>('/clients', {
    params: {
      page
    }
  }).then(value => axiosHandle(value))
}

export async function deleteClients (brandID: string, shopID: string, items: string[]) {
  return axiosInstance.delete(`/brand/${brandID}/shop/${shopID}/clients`, {
    data: {
      items
    }
  })
}
