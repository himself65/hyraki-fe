import axiosInstance from '../index'
import { ListAPI } from '~types/API'
import { Client } from '~types/Client'
import { axiosHandle } from '~util/helpers'
import '~types'

export function getClients (page = 0) {
  return axiosInstance.get<ListAPI<Client>>('/clients', {
    params: {
      page
    }
  }).then(value => axiosHandle(value))
}
