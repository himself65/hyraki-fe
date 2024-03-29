import React, { useEffect, useState } from 'react'
import { HyContent, HyLayout } from '../../components/Layout'
import './ErrorView.less'
import { DefaultProps } from '~type/index'
import { StateMap } from '~util/helpers'
import { Logger } from '~util/debug'
import { USER_ERROR_LAST_STATE } from '~util/shared'

const ErrorView: React.FC<DefaultProps> = (props) => {
  const [userState, setUserState] = useState<string>('')
  useEffect(() => {
    const state = props.location.state
    Logger(state)
    if (state != null) {
      state.user && localStorage.setItem(USER_ERROR_LAST_STATE, state.user)
      setUserState(
        StateMap.User(
          state.user ||
        localStorage.getItem(USER_ERROR_LAST_STATE)
        )
      )
    }
  }, [])
  return (
    <HyLayout>
      <HyContent className='error-content'>
        <span>
          发生错误
        </span>
        {userState ? (<span>用户状态：{userState}</span>) : null}
      </HyContent>
    </HyLayout>
  )
}

export default ErrorView
