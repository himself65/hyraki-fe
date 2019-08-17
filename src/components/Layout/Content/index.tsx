import React from 'react'
import { Layout } from 'antd'
import './index.less'
import { BasicProps } from 'antd/lib/layout/layout'
const { Content } = Layout

export function HyContent (props: BasicProps) {
  return (<Content className='hy-content' style={{ minHeight: 'auto', margin: '0 1rem' }} {...props}/>)
}
