import axiosInstance from '../index'
import { JWT_TOKEN } from '~util/shared'
import { BaseAPI, ListAPI, PostAPI } from '~type/API'
import { axiosHandle } from '~util/helpers'
import { Message } from '~type/User'

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

export async function getMessages (page = 0) {
  return axiosInstance.get<ListAPI<Message[]>>('/user/messages', {
    params: {
      page
    }
  }).then(response => axiosHandle(response))
}

// tip: 需要登陆后才能正常返回
export async function getUserInfo () {
  return axiosInstance.get<BaseAPI<{}>>('/user/info')
    .then(response => axiosHandle(response))
}
