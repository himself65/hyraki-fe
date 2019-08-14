import React from 'react'
import { Layout } from 'antd'
import './index.less'
const { Content } = Layout

export function HyContent (props: any /* fixme: remove type 'any' */) {
  return (
    <Content {...props}/>
  )
}
