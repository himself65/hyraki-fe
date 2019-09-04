import React, { useState } from 'react'
import { HyHeader, HyLayout } from '../../../components/Layout'
import { Menu, Layout } from 'antd'
import { Link, Route, Switch } from 'react-router-dom'
import { ManageContent } from './Employee/manage'

const { SubMenu } = Menu

const OverviewContent: React.FC = () => {
  return (
    <div>
      {/* todo */}
    </div>
  )
}

const ShopContent: React.FC = () => {
  const [selected, setSelected] = useState('2')

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
              <Link to='/dashboard/shop/employee/manage'/>
              <span>员工管理</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='/dashboard/shop/employee/schedule'/>
              <span>员工排班</span>
            </Menu.Item>
            <Menu.Item key='4'>
              <Link to='/dashboard/shop/employee/attend'/>
              <span>员工考勤</span>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <Layout>
          <Switch>
            <Route exact to='/dashboard/shop' component={OverviewContent}/>
            <Route to='/dashboard/shop/employee/manage' component={ManageContent}/>
          </Switch>
        </Layout>
      </HyHeader>
    </HyLayout>
  )
}

export default ShopContent
