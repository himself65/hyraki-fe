import React, { Fragment } from 'react'
import { Breadcrumb, Card, Statistic, Icon } from 'antd'
import { DefaultProps } from '../../../types'
import { HyContent, HyHeader } from '../../../components/Layout'
import './index.less'
import { BreadcrumbFactory } from '../../../utils/helpers'

export default function DashboardContent (props: DefaultProps) {
  return (
    <Fragment>
      <HyHeader>
        Header
      </HyHeader>
      <HyContent>
        <Breadcrumb className='top-element hy-top-breadcrumb'>
          {BreadcrumbFactory(props.location!.pathname)}
        </Breadcrumb>
        <Card className='hy-card' title='今日数据'>
          <Statistic title='实际收款金额'
            value={114514}
            precision={2}
            prefix={<Icon type='arrow-up' />}
            valueStyle={{ color: '#cf1322' }}
            suffix='元'
          />
        </Card>
      </HyContent>
    </Fragment>
  )
}
