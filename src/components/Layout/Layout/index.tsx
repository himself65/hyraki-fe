import React from 'react'
import { Layout } from 'antd'
import { BasicProps } from 'antd/lib/layout/layout'
import './index.less'

export const HyLayout: React.FC<BasicProps> = (props) => {
  return (<Layout style={{ height: '100vh' }} {...props}/>)
}
