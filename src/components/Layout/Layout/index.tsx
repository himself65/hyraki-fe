import React from 'react'
import { Layout } from 'antd'
import './index.less'

export function HyLayout (props: any /* fixme: remove type 'any' */) {
  props.style = {
    height: '100vh', /* notice: 100vh 撑起页面 */
    ...props.style
  }
  return (
    <Layout {...props}/>
  )
}
