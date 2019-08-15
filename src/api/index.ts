import Axios from 'axios'

export const axiosInstance = Axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://api.jzmin.top/', // fixme: api.jzmin.top will be replaced
  timeout: 1000
})

export default axiosInstance
export * from './user'
