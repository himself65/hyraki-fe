import React, { useEffect, useMemo, useState } from 'react'
import { Card, ICardTokens } from '@uifabric/react-cards'
import { Text } from 'office-ui-fabric-react/lib/Text'
import { DefaultProps } from '../../../types'
import { observer } from 'mobx-react'
import { store } from '../../store'
import LoginBoard from '../../components/LoginBoard'
import { Panel } from 'office-ui-fabric-react'
import { HyLayout } from '../../components/Layout/Layout'
import { useInView } from 'react-intersection-observer'
import { Menu } from 'antd'
import { HyHeader } from '../../components/Layout/Header'
import './index.less'

interface StartViewProps extends DefaultProps {
  loginMessage?: string
  logout: boolean
}

const startCardTokens: ICardTokens = {
  height: 'auto',
  minWidth: '90%',
  width: '90%'
}

const StartView: React.FC<StartViewProps> = (props) => {
  const bodyHeight = useMemo(() => document.body.clientHeight, [])
  const [panelRef, panelInView] = useInView()
  const [topRef, topInView] = useInView()
  useEffect(() => {
    if (!store.logout) {
      props.history.push('/dashboard')
    }
  }, [])
  useEffect(() => {
    if (!panelInView) {
      setOpenPanel(false)
    } else {
      setOpenPanel(true)
    }
  }, [panelInView])
  const [isOpenPanel, setOpenPanel] = useState(true)
  return (
    <HyLayout style={{ height: 'auto' }} className='login-view'>
      <div style={{
        lineHeight: '64px',
        position: 'absolute',
        top: '1rem'
      }} ref={topRef}/>
      {/* todo: 添加过渡动画 */}
      <HyHeader style={{
        position: 'fixed',
        visibility: topInView ? 'hidden' : 'visible',
        top: '0',
        width: '100%',
        height: '90px',
        backgroundColor: 'transport',
        padding: 0
      }}>
        <Menu style={{
          padding: '0 1rem',
          lineHeight: '90px'
        }} mode='horizontal'>
          <Menu.Item key='home'>
            主页
          </Menu.Item>
          <Menu.Item key='about'>
            关于
          </Menu.Item>
          <Menu.Item style={{ float: 'right' }} key='register'>
            注册
          </Menu.Item>
          <Menu.Item style={{ float: 'right' }} onClick={() => setOpenPanel(true)} key='login'>
            登录
          </Menu.Item>
        </Menu>
      </HyHeader>
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
          }} ref={panelRef}/>
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
