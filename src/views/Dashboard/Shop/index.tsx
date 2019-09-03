import React from 'react'
import { HyHeader, HyLayout } from '../../../components/Layout'
import { Menu } from 'antd'

const ShopContent: React.FC = () => {
  return (
    <HyLayout>
      <HyHeader>
        <Menu style={{ lineHeight: '64px' }}
          selectedKeys={['1']}
          mode='horizontal'
        >
          <Menu.Item key='1'>概览</Menu.Item>
          <Menu.ItemGroup key='g1' title='员工'>
            <Menu.Item key='2'>员工管理</Menu.Item>
            <Menu.Item key='2'>员工排班</Menu.Item>
            <Menu.Item key='2'>员工考勤</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </HyHeader>
    </HyLayout>
  )
}

export default ShopContent
