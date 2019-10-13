import Axios from 'axios'
import { store } from '../App'
import { Logger } from '../utils/debug'

export const axiosInstance = Axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : process.env.NODE_ENV === 'test'
      ? 'http://localhost:4000'
      : 'https://api.jzmin.top/', // fixme: api.jzmin.top will be replaced
  timeout: 1000
})

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('JWT_TOKEN')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    store.dispatch({ type: 'LOG_OUT' })
  }
  return config
}, error => Promise.reject(error))

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      Logger('axios: %s', error.response)
      if (error.response.status === 401) {
        store.dispatch({ type: 'LOG_OUT' })
      }
    } else {
      Logger('axios: %s', error)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
export * from './dashboard'
export * from './worker'
export * from './shop'
export * from './user'
