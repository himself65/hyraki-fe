import React from 'react'
import { Layout } from 'antd'
import { SiderProps } from 'antd/lib/layout/Sider'
import './index.less'

const { Sider: Sidebar } = Layout

export function HySidebar (props: SiderProps) {
  return (
    <Sidebar {...props}/>
  )
}
