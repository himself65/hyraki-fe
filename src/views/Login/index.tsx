import React from 'react'
import { Button, Col, Layout, Menu, Row, Icon } from 'antd'
import './LoginView.less'
import HySideBar from '../../components/Layout/Sidebar'
import HyHeader from '../../components/Layout/Header'
import HyFooter from '../../components/Layout/Footer'
import { HyContent } from '../../components/Layout/Content'

const LoginView: React.FC = (props: any /* fixme: type any */) => {
  const defaultSelected = (function () {
    if (props.location.pathname === '/') return 'main'
    else if (props.location.pathname === '/about') return 'about'
  })()

  return (
    <Layout style={{
      height: '100vh' /* notice: 100vh 撑起页面 */
    }} className='hy-sider'
    >
      <HySideBar
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
        <Row
          className='hy-menu-login'
          type='flex'
          justify='center'
          align='middle'
          gutter={12}
        >
          <Col>
            <Button size='large' type='link'>
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
      </HySideBar>
      <Layout>
        <HyContent>
          12345
        </HyContent>
        <HyFooter />
      </Layout>
    </Layout>
  )
}

export default LoginView
