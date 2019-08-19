import Axios from 'axios'
import { store } from '../App'
import { Logger } from '../utils/debug'

export const axiosInstance = Axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://api.jzmin.top/', // fixme: api.jzmin.top will be replaced
  timeout: 1000
})

axiosInstance.interceptors.request.use(config => {
  if (localStorage.JWT_TOKEN) {
    config.headers.Authorization = `token ${localStorage.JWT_TOKEN}`
  }
  return config
}, error => Promise.reject(error))

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.log('axios:' + error.response.status)
      if (error.response.status === 401) {
        store.dispatch({ type: 'LOG_OUT' })
      }
    }
    return Promise.reject(error.response.data)
  }
)

export default axiosInstance
export * from './user'
