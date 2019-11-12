import axiosInstance from '../index'
import { JWT_TOKEN } from '~util/shared'
import { BaseAPI, PostAPI } from '~types/API'
import { axiosHandle } from '~util/helpers'

export async function login (username: string, password: string) {
  return axiosInstance.post<PostAPI<{
    token: string
  }>>('/user/login', {
    username,
    password
  }).then(response => {
    if (response.status === 200) {
      localStorage.setItem(JWT_TOKEN, response.data.token)
    }
    return response
  })
}

export async function getMessagesCount () {
  return axiosInstance.get<BaseAPI<{
    count: number
  }>>('/user/messages/count')
    .then(response => axiosHandle(response))
}
