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
