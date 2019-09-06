import React from 'react'
import { Layout } from 'antd'
import { Logger } from '../../utils/debug'
import { HyContent, HyLayout, HySidebar } from '../../components/Layout'
import { DefaultProps } from '../../types'

const RegisterView: React.FC<DefaultProps> = (props) => {
  Logger('Opened \'%s\'', props.location.pathname)
  return (
    <HyLayout>
      <HySidebar />
      <Layout>
        <HyContent />
      </Layout>
    </HyLayout>
  )
}

export default RegisterView
