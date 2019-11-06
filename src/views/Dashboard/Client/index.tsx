import React, { Fragment } from 'react'
import { HyHeader } from '../../../components/Layout/Header'
import { Breadcrumb } from 'antd'
import { BreadcrumbFactory } from '../../../utils/helpers'
import { HyContent } from '../../../components/Layout/Content'
import { DefaultProps } from '../../../../types'

const ClientContent: React.FC<DefaultProps> = (props) => {
  return (
    <Fragment>
      <HyHeader/>
      <HyContent>
        <Breadcrumb className='top-element hy-top-breadcrumb'>
          {...BreadcrumbFactory(props.location!.pathname)}
        </Breadcrumb>
      </HyContent>
    </Fragment>
  )
}

export default ClientContent
