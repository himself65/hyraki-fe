import React from 'react'
import { Layout } from 'antd'
import './index.less'
import { BasicProps } from 'antd/lib/layout/layout'
const { Header } = Layout

export function HyHeader (props: BasicProps) {
  return (
    <Header {...props}/>
  )
}
