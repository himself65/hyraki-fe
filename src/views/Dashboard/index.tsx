import React from 'react'
import { Icon, Layout, Menu, Row } from 'antd'
import { Logger } from '~util/debug'
import { Link, Route, Switch } from 'react-router-dom'
import { HyFooter, HyLayout, HySidebar } from '~component/Layout'
import NoticeAvatar from '~component/Message/NoticeAvatar'
import { DefaultProps } from '~type/index'
import { Footer } from './Dashboard'
import { getMessagesCount } from '~api/user'
import { dashBoardRoutes } from '~util/shared'

import './DashboardView.less'

const DashboardView: React.FC<DefaultProps> = (props) => {
  const selectedKey = props.location.pathname || '/dashboard'
  Logger('Opened \'%s\'', selectedKey)
  return (
    <HyLayout className='dashboard-view'>
      <HySidebar
        breakpoint='lg'
        collapsedWidth='0'
        width={140}
      >
        <Row className='top-element' type='flex' justify='center'>
          {/* fixme: 需要API支持 */}
          <NoticeAvatar api={{
            getMessageCount: getMessagesCount
          }}/>
        </Row>
        <Menu style={{ backgroundColor: 'transparent' }}
          theme='light'
          mode='inline'
          defaultSelectedKeys={[selectedKey]}
        >
          {dashBoardRoutes.map(item => (
            <Menu.Item key={item.name}>
              <Link to={item.path}/>
              <Icon type={item.icon}/>
              <span className='nav-text'> {item.displayName} </span>
            </Menu.Item>
          ))}
        </Menu>
      </HySidebar>
      <Layout>
        <Switch>
          {dashBoardRoutes.map((item, index) => (
            <Route
              exact={!index}
              key={item.name}
              path={item.path}
              component={item.component || undefined}
            />
          ))}
        </Switch>
        {Footer ? <Footer/> : <HyFooter/>}
      </Layout>
    </HyLayout>
  )
}

export default DashboardView
