import axiosInstance from '../index'
import { JWT_TOKEN } from '../../utils/shared'
import { PostAPI } from '../../types/API'

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
