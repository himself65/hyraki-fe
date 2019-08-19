import React, { useState, useEffect, Fragment } from 'react'
import { Button, Col, Layout, Menu, Row, Icon, Input, message } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { HyContent, HyLayout, HyFooter, HySidebar, HyHeader } from '../../components/Layout'
import { login } from '../../api'
import { loginAction, logoutAction } from '../../store/action/user'
import './LoginView.less'
import { DefaultProps, IState } from '../../types'

interface LoginViewProps extends DefaultProps {
  loginMessage?: string
}

const LoginView: React.FC = (props: LoginViewProps) => {
  const [loginBoard, setLoginBoard] = useState(false)
  const [loginMessage] = useState(props.loginMessage)

  // todo
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (username: string, password: string) => {
    await login(username, password).then(() => {})
  }

  useEffect(() => {
    if (loginMessage) {
      message.info(loginMessage)
    }
  }, [props.loginMessage])

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
              <Button onClick={() => !loginBoard
                ? setLoginBoard(true)
                : loginUser(username, password) // fixme: 目前双击登录，不符合直觉
              }
              size='large'
              type='link'>
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
                      <Input placeholder='输入你的账户名'
                        onChange={e => setUsername(e.target.value)}/>
                      <Input.Password placeholder='输入你的密码'
                        onChange={e => setPassword(e.target.value)}/>
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

LoginView.propTypes = {
  loginMessage: PropTypes.string
}

const mapStateToProps = (state: IState) => ({ loginMessage: state.user.loginMessage })
const mapDispatchToProps = { loginAction, logoutAction }

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
