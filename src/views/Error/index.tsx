import React, { useEffect, useState } from 'react'
import { HyContent, HyLayout } from '../../components/Layout'
import './ErrorView.less'
import { DefaultProps } from '../../types'
import { StateMap } from '../../utils/helpers'
import { Logger } from '../../utils/debug'

const ErrorView: React.FC<DefaultProps> = (props) => {
  const [userState, setUserState] = useState<string>('')
  useEffect(() => {
    const state = props.location.state
    Logger(state)
    if (!state) {
      return
    }
    setUserState(StateMap.User(state.user))
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
