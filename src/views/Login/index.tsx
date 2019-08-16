import React, { useState, Fragment } from 'react'
import { Button, Col, Layout, Menu, Row, Icon, Input } from 'antd'
import './LoginView.less'
import { HyContent, HyLayout, HyFooter, HySidebar, HyHeader } from '../../components/Layout'
import { DefaultProps } from '../../types'

const LoginView: React.FC = (props: DefaultProps) => {
  const [loginBoard, setLoginBoard] = useState(false)

  return (
    <HyLayout>
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
          <Row
            className='login'
            type='flex'
            justify='center'
            align='middle'
          >
            <Col>
              <Button onClick={() => setLoginBoard(true)} size='large' type='link'>
                <Icon type='user' />
              登录
              </Button>
            </Col>
            <Col>
              <Button size='large'>
              注册
              </Button>
            </Col>
          </Row>
          <Row
            className='login-board'
            type='flex'
            justify='center'
            align='top'
          >
            {
              loginBoard
                ? (
                  <Fragment>
                    <Col className='away'>
                      <Input
                        placeholder='输入你的账户名'
                      />
                      <Input.Password placeholder='输入你的密码' />
                    </Col>
                  </Fragment>
                )
                : undefined
            }
          </Row>
        </div>
      </HySidebar>
      <Layout>
        <HyContent>
          Todo
        </HyContent>
        <HyFooter />
      </Layout>
    </HyLayout>
  )
}

export default LoginView
