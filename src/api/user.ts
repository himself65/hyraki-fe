import axiosInstance from '.'
import { store } from '../App'
import { loginAction } from '../store/action/user'

export async function login (username: string, password: string) {
  return axiosInstance.post('/user/login', {
    username,
    password
  }).then(response => {
    if (response.status !== 200) {
      store.dispatch(loginAction.error(response.statusText))
    } else {
      // status === 200
      store.dispatch(loginAction('登陆成功'))
      localStorage.setItem('JWT_TOKEN', response.data.token)
    }
    return response
  })
}
