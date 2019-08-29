import React from 'react'
import { HyContent, HyLayout } from '../../components/Layout'
import './LoadingView.less'
import { Spin } from 'antd'

const LoadingView: React.FC = () => {
  return (
    <HyLayout>
      <HyContent className='loading-content'>
        <Spin size='large'/>
      </HyContent>
    </HyLayout>
  )
}

export default LoadingView
