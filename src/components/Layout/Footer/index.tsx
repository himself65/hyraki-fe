import React from 'react'
import { Layout } from 'antd'
import './index.less'
import { BasicProps } from 'antd/lib/layout/layout'
import PropTypes from 'prop-types'
const { Footer } = Layout

export function HyFooter (props: BasicProps) {
  return (
    <Footer className='hy-footer' {...props}>
      { props.children ? props.children : 'Hyraki ©2019 Powered by SectoSessions tech.'}
    </Footer>
  )
}

HyFooter.propTypes = {
  children: PropTypes.element
}
