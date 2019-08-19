import USER_STATE, { USER_ACTION_TYPE } from '../action-type/user'

const INITIAL_STATE = {}

export default function user (state = INITIAL_STATE, action: USER_ACTION_TYPE) {
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
