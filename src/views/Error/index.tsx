import React from 'react'
import { HyContent, HyLayout } from '../../components/Layout'
import './ErrorView.less'

const ErrorView = () => {
  return (
    <HyLayout>
      <HyContent className='error-content'>
        <span>
          找不到该页面
        </span>
      </HyContent>
    </HyLayout>
  )
}

export default ErrorView
