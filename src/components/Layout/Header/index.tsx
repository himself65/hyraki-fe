import React from 'react'
import { Layout } from 'antd'
import './index.less'
const { Header } = Layout

export function HyHeader (props: any /* fixme: remove type 'any' */) {
  return (
    <Header {...props}/>
  )
}
