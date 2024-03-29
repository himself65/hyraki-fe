import Axios from 'axios'
import { Logger } from '~util/debug'
import { JWT_TOKEN } from '~util/shared'
import { store } from '../store'

const AXIOS_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3001'
  : MOCK
    ? 'https://api.jzmin.tip' // tip: 此处为线上 mock server 地址
    : 'https://api.jzmin.top/' // fixme: api.jzmin.top will be replaced
Logger('api地址: %s', AXIOS_URL)

export const axiosInstance = Axios.create({
  baseURL: AXIOS_URL,
  timeout: 1000
})

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem(JWT_TOKEN)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    store.logout = true
  }
  return config
}, error => Promise.reject(error))

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      Logger('axios: %s', error.response)
      if (error.response.status === 401) {
        store.logout = true
        localStorage.removeItem(JWT_TOKEN)
      }
    } else {
      Logger('axios: %s', error)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
export * from './client'
export * from './dashboard'
export * from './worker'
export * from './reserve'
export * from './good'
export * from './shop'
export * from './user'
