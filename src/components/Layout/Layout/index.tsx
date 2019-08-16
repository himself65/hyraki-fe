import React from 'react'
import { Layout } from 'antd'
import { BasicProps } from 'antd/lib/layout/layout'
import './index.less'

export function HyLayout (props: BasicProps) {
  return (<Layout style={{ height: '100vh' }} {...props}/>
  )
}
