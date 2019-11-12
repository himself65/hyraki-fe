import React, { Fragment, useMemo } from 'react'
import { Breadcrumb, Icon, Menu, Tooltip } from 'antd'
import { ChartCard, Field, MiniBar } from 'ant-design-pro/lib/Charts'
import numeral from 'numeral'
import moment from 'moment'
import { DefaultProps } from '../../../../types'
import { HyContent, HyFooter, HyHeader } from '../../../components/Layout'
import { BreadcrumbFactory } from '../../../utils/helpers'
import { CommonBoard, TodayBoard, TodoBoard } from '../../../components/Dashboard'
import { getDashboardData } from '../../../api/dashboard'
import { Logger } from '../../../utils/debug'
import './DashboardContent.less'
import { useFetch } from '../../../utils/hooks'

export const Footer: React.FC = () => <HyFooter/>

export type TrendType = '' | 'decrease' | 'increase'

const DashboardContent: React.FC<DefaultProps> = (props) => {
  const [data] = useFetch(getDashboardData)
  const trendData = useMemo<{ x: string, y: number }[]>(() => {
    if (data) {
      const today = new Date().getTime()
      return data.trend.sales
        .map((v, i, arr) => {
          const offsetDay = (arr.length - i) * 24 * 60 * 60 * 1000
          return ({
            x: moment(new Date(today - offsetDay)).format('YYYY-MM-DD'),
            y: v
          })
        })
    }
    return []
  }, [data])

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
        <TodayBoard value={data ? data.today : undefined}/>
        <ChartCard className='hy-card' style={{ marginTop: '1rem', width: '300px' }}
          total={data ? data.trend.today : 0}
          footer={<Field label='总销售额（月）'
            value={numeral(data ? data.trend.all_sales : 0).format('0,0')}/>}
          action={
            <Tooltip title='详细数据在数据中查看'>
              <Icon type='info-circle-o'/>
            </Tooltip>
          }
          title='今日'>
          <MiniBar color={'rgb(255, 220, 60)'} height={46} data={trendData}/>
        </ChartCard>
        <TodoBoard value={data ? data.todo : undefined}/>
        <CommonBoard/>
      </HyContent>
    </Fragment>
  )
}

export default DashboardContent
