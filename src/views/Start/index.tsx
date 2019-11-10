import React, { useEffect } from 'react'
import { Card, ICardTokens } from '@uifabric/react-cards'
import { HyLayout } from '../../components/Layout'
import './index.less'
import { DefaultProps } from '../../../types'
import { observer } from 'mobx-react'
import { store } from '../../store'
import LoginBoard from '../../components/LoginBoard'

interface StartViewProps extends DefaultProps {
  loginMessage?: string
  logout: boolean
}

const cardTokens: ICardTokens = {
  minWidth: 500
}

const StartView: React.FC<StartViewProps> = (props) => {
  useEffect(() => {
    if (!store.logout) {
      props.history.push('/dashboard')
    }
  }, [])
  return (
    <HyLayout className='login-view'>
      <div>
        <Card
          tokens={cardTokens}
          className={'login-card'}
        >
          <h1 className='title'>登录</h1>
          <LoginBoard/>
        </Card>
      </div>
    </HyLayout>
  )
}

export default observer(StartView)
