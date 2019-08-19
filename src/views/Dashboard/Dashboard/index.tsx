import React, { Fragment } from 'react'
import { Breadcrumb, Icon, Menu, Tooltip } from 'antd'
import { ChartCard, Field, MiniBar } from 'ant-design-pro/lib/Charts'
import numeral from 'numeral'
import moment from 'moment'
import { DefaultProps } from '../../../types'
import { HyContent, HyFooter, HyHeader } from '../../../components/Layout'
import { BreadcrumbFactory } from '../../../utils/helpers'
import { TodayBoard, CommonBoard, TodoBoard } from '../../../components/Dashboard'
import './index.less'

// fixme: this is mock data, must remove these
const visitData: { x: string, y: number }[] = []
const beginDay = new Date().getTime()
for (let i = 0; i < 20; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10
  })
}

export const Footer:React.FC = () => <HyFooter/>

export default function DashboardContent (props: DefaultProps) {
  return (
    <Fragment>
      <HyHeader>
        <Menu style={{ lineHeight: '64px' }}
          selectedKeys={['1']}
          mode='horizontal'
        >
          <Menu.Item key='1'>预览</Menu.Item>
        </Menu>
      </HyHeader>
      <HyContent>
        <Breadcrumb className='top-element hy-top-breadcrumb'>
          {...BreadcrumbFactory(props.location!.pathname)}
        </Breadcrumb>
        <TodayBoard/>
        <ChartCard className='hy-card' style={{ marginTop: '1rem', width: '300px' }} total={8846}
          footer={<Field label='总销售额（月）' value={numeral(1234).format('0,0')}/>}
          action={
            <Tooltip title='详细数据在数据中查看'>
              <Icon type='info-circle-o'/>
            </Tooltip>
          }
          title='今日'>
          <MiniBar color={'rgb(255, 220, 60)'} height={46} data={visitData}/>
        </ChartCard>
        <TodoBoard/>
        <CommonBoard/>
      </HyContent>
    </Fragment>
  )
}