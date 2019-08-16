import React from 'react'
import { Layout } from 'antd'
import './index.less'
import { BasicProps } from 'antd/lib/layout/layout'
const { Footer } = Layout

export function HyFooter (props: BasicProps) {
  return (
    <Footer className='hy-footer' {...props}>
      Hyraki ©2019 Powered by SectoSessions tech.
    </Footer>
  )
}
