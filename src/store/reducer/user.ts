import { Action } from 'redux'
import USER_STATE from '../action-type/user'

const INITIAL_STATE = {
  loginMessage: '未知问题'
}

export default function user (state = INITIAL_STATE, action: Action<USER_STATE> & { message: string }) {
  if (action.type === USER_STATE.LOGIN) {
    return { ...state, loginMessage: action.message }
  } else if (action.type === USER_STATE.LOGOUT) {
    return { ...state, loginMessage: action.message }
  } else if (action.type === USER_STATE.LOGERROR) {
    return { ...state, loginMessage: action.message }
  } else {
    return { ...state }
  }
}
