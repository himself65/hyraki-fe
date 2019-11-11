import React, { useEffect, useMemo, useState } from 'react'
import { Card, ICardTokens } from '@uifabric/react-cards'
import { Text } from 'office-ui-fabric-react/lib/Text'
import './index.less'
import { DefaultProps } from '../../../types'
import { observer } from 'mobx-react'
import { store } from '../../store'
import LoginBoard from '../../components/LoginBoard'
import { Panel } from 'office-ui-fabric-react'
import { HyLayout } from '../../components/Layout/Layout'
import { useInView } from 'react-intersection-observer'

interface StartViewProps extends DefaultProps {
  loginMessage?: string
  logout: boolean
}

const loginCardTokens: ICardTokens = {
  minWidth: 500,
  childrenGap: '5rem'
}

const startCardTokens: ICardTokens = {
  height: 'auto',
  minWidth: '90%',
  width: '90%'
}

const StartView: React.FC<StartViewProps> = (props) => {
  const bodyHeight = useMemo(() => document.body.clientHeight, [])
  const [ref, inView, entry] = useInView()
  useEffect(() => {
    if (!store.logout) {
      props.history.push('/dashboard')
    }
  }, [])
  const [isOpenPanel, setOpenPanel] = useState(true)
  return (
    <HyLayout style={{ height: 'auto' }} className='login-view'>
      <Card
        tokens={startCardTokens}
        className='hello-card'
      >
        <Card.Section styles={{
          root: {
            height: bodyHeight
          }
        }}>
          <Text variant='mega'>Hyraki（名称待定）</Text>
          <br/>
          <Text variant='large'> by 石家庄赛丝科技有限公司</Text>
          {/* tip: 此 div 元素为了监听滚动事件 */}
          <div style={{
            position: 'absolute',
            bottom: '0'
          }} ref={ref}/>
        </Card.Section>
        <Card.Section styles={{
          root: {
            height: bodyHeight
          }
        }}>
          <Text variant='xxLarge'>第二页</Text>
        </Card.Section>
        <Card.Section styles={{
          root: {
            height: bodyHeight
          }
        }}>
          <Text variant='xxLarge'>第三页</Text>
        </Card.Section>
      </Card>
      <Panel
        isLightDismiss
        headerText='登录'
        // this prop makes the panel non-modal
        isBlocking={false}
        isOpen={isOpenPanel}
        onDismiss={() => setOpenPanel(false)}
        closeButtonAriaLabel='Close'
      >
        <LoginBoard/>
      </Panel>
    </HyLayout>
  )
}

export default observer(StartView)
