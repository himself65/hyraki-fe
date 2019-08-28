import React from 'react'
import { HyLayout, HyContent } from '../../components/Layout'
import './LoadingView.less'
import { Spin } from 'antd'

const LoadingView = () => {
  return (
    <HyLayout>
      <HyContent className='loading-content'>
        <Spin size='large'/>
      </HyContent>
    </HyLayout>
  )
}

export default LoadingView
