import { Action } from 'redux'

enum USER_STATE {
  LOGOUT = 'LOG_OUT',
  LOGIN = 'LOG_IN',
  LOGERROR = 'LOG_ERROR'
}

export interface USER_ACTION_TYPE extends Action<USER_STATE> {
  message: string
}

export default USER_STATE
