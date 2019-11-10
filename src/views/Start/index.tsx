import React, { useEffect, useState } from 'react'
import { Button, Col, Icon, Layout, Menu, Row } from 'antd'
import { HyContent, HyFooter, HyHeader, HyLayout, HySidebar } from '../../components/Layout'
import LoginBoard from '../../components/LoginBoard'
import './index.less'
import { DefaultProps } from '../../../types'
import { observer } from 'mobx-react'
import { store } from '../../store'

interface StartViewProps extends DefaultProps {
  loginMessage?: string
  logout: boolean
}

const StartView: React.FC<StartViewProps> = (props) => {
  useEffect(() => {
    if (!store.logout) {
      props.history.push('/dashboard')
    }
  }, [])
  const [loginBoard, setLoginBoard] = useState(false)
  return (
    <HyLayout className='login-view'>
      <HySidebar
        breakpoint='lg'
        collapsedWidth='0'
        width='320'
      >
        <HyHeader>
          <Menu className='hy-sider-nav'
            style={{ background: 'transparent' }}
            mode='horizontal'
            defaultOpenKeys={['main']}
          >
            <Menu.Item className='hy-sider-nav-item'
              key='main'
            >
              主页
            </Menu.Item>
            <Menu.Item className='hy-sider-nav-item'
              key='about'
            >
              关于
            </Menu.Item>
          </Menu>
        </HyHeader>
        <div className='logo'/>
        <div className='hy-menu'>
          {
            loginBoard
              ? <LoginBoard/>
              : (
                <Row
                  className='login'
                  type='flex'
                  justify='center'
                  align='middle'
                >
                  <Col>
                    <Button onClick={() => setLoginBoard(true)}
                      size='large'
                      type='link'
                    >
                      <Icon type='user'/>
                      登录
                    </Button>
                  </Col>
                  <Col>
                    <Button size='large'>
                      注册
                    </Button>
                  </Col>
                </Row>
              )
          }
        </div>
      </HySidebar>
      <Layout>
        <HyContent>
          Todo
        </HyContent>
        <HyFooter/>
      </Layout>
    </HyLayout>
  )
}

export default observer(StartView)
