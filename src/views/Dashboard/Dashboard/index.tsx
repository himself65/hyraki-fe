import React, { Fragment, useEffect, useState } from 'react'
import { Breadcrumb, Icon, Menu, Tooltip } from 'antd'
import { ChartCard, Field, MiniBar } from 'ant-design-pro/lib/Charts'
import numeral from 'numeral'
import moment from 'moment'
import { DefaultProps } from '../../../types'
import { HyContent, HyFooter, HyHeader } from '../../../components/Layout'
import { BreadcrumbFactory } from '../../../utils/helpers'
import { CommonBoard, TodayBoard, TodoBoard } from '../../../components/Dashboard'
import { getDashboardData } from '../../../api/dashboard'
import { TodayData } from '../../../types/Dashboard'
import { TodoData } from '../../../components/Dashboard/TodoBoard'
import { Logger } from '../../../utils/debug'
import './DashboardContent.less'

export const Footer: React.FC = () => <HyFooter/>

export type TrendType = '' | 'decrease' | 'increase'

export interface TrendData {
  today: number,
  sales: number[],
  all_sales: number
}

export interface DashBoardData {
  today?: TodayData,
  trend?: TrendData,
  todo?: TodoData
}

const DashboardContent: React.FC<DefaultProps> = (props) => {
  const [data, setData] = useState<DashBoardData>({})
  const [trendData, setTrendData] = useState<{ x: string, y: number }[]>([])
  useEffect(() => {
    const fetch = async () => {
      await getDashboardData().then(res => {
        if (res.status === 200) {
          setData(res.data)
        }
      })
    }
    fetch().then()
  }, [])

  useEffect(() => {
    // tip: 处理后端传过来的数据
    if (data.trend) {
      const today = new Date().getTime()
      const value = data.trend.sales
        .map((v, i, arr) => {
          const offsetDay = (arr.length - i) * 24 * 60 * 60 * 1000
          return ({
            x: moment(new Date(today - offsetDay)).format('YYYY-MM-DD'),
            y: v
          })
        })
      Logger(value)
      setTrendData(value)
    }
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
        <TodayBoard value={data.today}/>
        <ChartCard className='hy-card' style={{ marginTop: '1rem', width: '300px' }}
          total={data.trend ? data.trend.today : 0}
          footer={<Field label='总销售额（月）'
            value={numeral(data.trend ? data.trend.all_sales : 0).format('0,0')}/>}
          action={
            <Tooltip title='详细数据在数据中查看'>
              <Icon type='info-circle-o'/>
            </Tooltip>
          }
          title='今日'>
          <MiniBar color={'rgb(255, 220, 60)'} height={46} data={trendData}/>
        </ChartCard>
        <TodoBoard value={data.todo}/>
        <CommonBoard/>
      </HyContent>
    </Fragment>
  )
}

export default DashboardContent
