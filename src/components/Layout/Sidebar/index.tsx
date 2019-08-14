import React from 'react'
import { Layout } from 'antd'
import { SiderProps } from 'antd/lib/layout/Sider'
import './index.less'

interface HySidebar extends SiderProps {

}

const { Sider: Sidebar } = Layout

export default function HySidebar (props: HySidebar) {
  return (
    <Sidebar {...props}/>
  )
}
