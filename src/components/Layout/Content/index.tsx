import React from 'react'
import { Layout } from 'antd'
import './index.less'
import { BasicProps } from 'antd/lib/layout/layout'
const { Content } = Layout

export function HyContent (props: BasicProps) {
  return (<Content style={{ margin: '16px 0' }} {...props}/>)
}
