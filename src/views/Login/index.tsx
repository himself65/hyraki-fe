import React from 'react'
import { Button, Col, Layout, Menu, Row, Icon } from 'antd'
import './LoginView.less'
import HySideBar from '../../components/Layout/Sidebar'
import HyHeader from '../../components/Layout/Header'

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
            <Menu.Item className='hy-menu-item'
              style={{ color: 'white' }}
              key='main'
            >
              主页
            </Menu.Item>
            <Menu.Item className='hy-menu-item'
              style={{ color: 'white' }}
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
            <Button size='large'>
              <Icon type='user' />
              登录
            </Button>
          </Col>
          <Col>
            <Button size='large' ghost>
              注册
            </Button>
          </Col>
        </Row>
      </HySideBar>
      <Layout>
        孔乙己一到店，所有喝酒的人便都看着他笑，有的叫道，“孔乙己，你脸上又添上新伤疤了！”他不回答，对柜里说，“温两碗酒，要一碟茴香豆。”便排出九文大钱。他们又故意的高声嚷道，“你一定又偷了人家的东西了！”孔乙己睁大眼睛说，“你怎么这样凭空污人清白……”“什么清白?我前天亲眼见你窃了何家的书，吊着打。”孔乙己便涨红了脸，额上的青筋条条绽出，争辩道，“窃书不能算偷……窃书！……读书人的事，能算偷么？”接连便是难懂的话，什么“君子固穷”，什么“者乎”之类，引得众人都哄笑起来：店内外充满了快活的空气。
      </Layout>
    </Layout>
  )
}

export default LoginView
