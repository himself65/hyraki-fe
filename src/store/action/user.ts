import USER_STATE from '../action-type/user'

export const loginAction = (message: string) => ({ type: USER_STATE.LOGIN, message })
loginAction.error = (message: string) => ({ type: USER_STATE.LOGERROR, message })

export const logoutAction = (message: string) => ({ type: USER_STATE.LOGOUT, message })
