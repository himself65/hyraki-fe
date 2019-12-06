import axiosInstance from '~api/index'
import { axiosHandle } from '~util/helpers'

export function getMyBrand () {
  return axiosInstance.get('/my_brand')
    .then(value => axiosHandle(value))
}

export function setNewManager (brandID: string) {
  return axiosInstance.post(`/brand/${brandID}/new_manager`)
    .then(value => axiosHandle(value))
}
