import React from 'react'
import { Layout } from 'antd'
import { Logger } from '~util/debug'
import { HyContent, HyLayout, HySidebar } from '~component/Layout'
import { DefaultProps } from '~type/index'

const RegisterView: React.FC<DefaultProps> = (props) => {
  Logger('Opened \'%s\'', props.location ? props.location.pathname : 'UNKNOWN')
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
