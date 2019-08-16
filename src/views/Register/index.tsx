import React from 'react'
import { Layout } from 'antd'
import { Logger } from '../../utils/debug'
import { HyContent, HyLayout, HySidebar } from '../../components/Layout'
import { DefaultProps } from '../../types'

const RegisterView: React.FC = (props: DefaultProps) => {
  Logger('Opened \'%s\'', props.location ? props.location.pathname || 'UNKNOWN' : 'UNKNOWN')
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
