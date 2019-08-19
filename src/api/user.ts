import axiosInstance from '.'
import { store } from '../App'
import { loginAction as loginAction } from '../store/action/user'

export async function login (username: string, password: string) {
  return axiosInstance.post('/user/loginAction', {
    username,
    password
  }).then(response => {
    if (response.status !== 200) {
      store.dispatch(loginAction.error(response.statusText))
    } else {
      store.dispatch(loginAction('登陆成功 '))
    }
    return response
  })
}
