import React from 'react'
import { Layout, Menu } from 'antd'
import './index.less'
import { BasicProps } from 'antd/lib/layout/layout'
import MenuItem from 'antd/es/menu/MenuItem'
const { Header } = Layout

export const HyHeader: React.FC<BasicProps> = (props) => {
  return (<Header className='hy-header' {...props}/>)
}

export interface MainHeaderProps {
  items?: MenuItem[]
  selectedKey?: string
}

export const MainHeader: React.FC<MainHeaderProps> = ({ items = [], selectedKey = '' }) => {
  return (
    <HyHeader>
      <Menu
        style={{ lineHeight: '64px' }}
        selectedKeys={[selectedKey]}
        mode='horizontal'
      >
        {items}
      </Menu>
    </HyHeader>
  )
}
