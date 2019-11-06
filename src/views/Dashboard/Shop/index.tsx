import React, { useState } from 'react'
import { HyContent, HyHeader, HyLayout } from '../../../components/Layout'
import { Menu } from 'antd'
import { Link, Route, Switch } from 'react-router-dom'
import ManageContent from './Worker/manage'
import { DefaultProps } from '../../../../types'

const { SubMenu } = Menu

const OverviewContent: React.FC = () => {
  return (
    <div>
      这是 Overview 页面
    </div>
  )
}

const ShopContent: React.FC<DefaultProps> = (props) => {
  const [selected, setSelected] = useState(
    props.location ? props.location.pathname === '/dashboard/shop' ? '1' : '2' : '1'
  )

  return (
    <HyLayout>
      <HyHeader>
        <Menu onClick={e => setSelected(e.key)} style={{ lineHeight: '64px' }}
          selectedKeys={[selected]}
          mode='horizontal'
        >
          <Menu.Item key='1'>
            <Link to='/dashboard/shop'/>
            概览
          </Menu.Item>
          <SubMenu title='员工'>
            <Menu.Item key='2'>
              <Link to='/dashboard/shop/worker/manage'/>
              员工管理
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/dashboard/shop/worker/schedule'/>
              员工排班
            </Menu.Item>
            <Menu.Item key='4'>
              <Link to='/dashboard/shop/worker/attend'/>
              员工考勤
            </Menu.Item>
          </SubMenu>
        </Menu>
      </HyHeader>
      <HyContent style={{ margin: '0.5rem 1rem' }}>
        <Switch>
          <Route exact path='/dashboard/shop' component={OverviewContent}/>
          <Route path='/dashboard/shop/worker' component={ManageContent}/>
        </Switch>
      </HyContent>
    </HyLayout>
  )
}

export default ShopContent
