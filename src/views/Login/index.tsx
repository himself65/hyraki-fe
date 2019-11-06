import React, { useEffect, useState } from 'react'
import { Button, Col, Icon, Layout, Menu, Row } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { HyContent, HyFooter, HyHeader, HyLayout, HySidebar } from '../../components/Layout'
import LoginBoard from '../../components/LoginBoard'
import { loginAction, logoutAction } from '../../store/action/user'
import './LoginView.less'
import { DefaultProps, IState } from '../../../types'

interface LoginViewProps extends DefaultProps {
  loginMessage?: string
  logout: boolean
}

const LoginView: React.FC<LoginViewProps> = (props) => {
  useEffect(() => {
    if (!props.logout) {
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

LoginView.propTypes = {
  loginMessage: PropTypes.string
}

const mapStateToProps = (state: IState) => ({ logout: state.user.logout, loginMessage: state.user.loginMessage })
const mapDispatchToProps = { loginAction, logoutAction }

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
