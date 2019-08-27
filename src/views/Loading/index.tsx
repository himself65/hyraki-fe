import React from 'react'
import { HyLayout, HyContent } from '../../components/Layout'
import { Spin } from 'antd'

const LoadingView = () => {
  return (
    <HyLayout>
      <HyContent>
        <Spin size='large'/>
      </HyContent>
    </HyLayout>
  )
}

export default LoadingView
