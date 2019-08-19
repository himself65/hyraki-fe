enum USER_STATE {
  LOGOUT = 'LOG_OUT',
  LOGIN = 'LOG_IN',
  LOGERROR = 'LOG_ERROR'
}

export type USER_ACTION_TYPE = {
  type: USER_STATE,
  message: string
}

export default USER_STATE
