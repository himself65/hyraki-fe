import React from 'react'
import { Layout } from 'antd'
import { SiderProps } from 'antd/lib/layout/Sider'
import './index.less'

const { Sider: Sidebar } = Layout

export const HySidebar: React.FC<SiderProps> = (props: SiderProps) => {
  return (<Sidebar className='hy-sider' {...props}/>)
}
