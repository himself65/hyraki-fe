import React from 'react'
import { Layout } from 'antd'
import { HyContent, HyLayout, HySidebar } from '../../components/Layout'

const RegisterView: React.FC = (props: any /* fixme: type any */) => {
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
