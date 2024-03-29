import React from 'react'
import { Card, Icon, Statistic } from 'antd'
import { TrendType } from '~view/Dashboard/Dashboard'
import { TodayData } from '~type/Dashboard'

export const todayGridStyle = {
  width: '33.33%',
  height: '120px'
}

export interface Props {
  value?: TodayData
}

const TodayBoard: React.FC<Props> = (props) => {
  const value = props.value || {
    full_income: {
      type: '',
      number: 0
    },
    customer_cost: {
      type: '',
      number: 0
    },
    all_customers: {
      type: '',
      number: 0
    },
    sales: []
  }
  const upOrDown = (value: { type: TrendType; number: number } | { number: number; type: string }) => {
    if (value.type === 'increase') {
      return ({ value: value.number, prefix: <Icon type='arrow-up'/>, valueStyle: { color: '#cf1322' } })
    } else if (value.type === 'decrease') {
      return ({ value: value.number, prefix: <Icon type='arrow-down'/>, valueStyle: { color: '#3f8600' } })
    } else {
      return ({ value: value.number, prefix: <Icon type='arrow-right'/>, valueStyle: { color: '#40a9ff' } })
    }
  }
  return (
    <Card hoverable className='hy-card' title='今日数据'>
      <Card.Grid style={todayGridStyle}>
        <Statistic title='实际收款金额'
          {...upOrDown(value.full_income)}
          precision={2}
          suffix='元'
        />
      </Card.Grid>
      <Card.Grid style={todayGridStyle}>
        <Statistic title='顾客消耗金额'
          {...upOrDown(value.customer_cost)}
          precision={2}
          suffix='元'
        />
      </Card.Grid>
      <Card.Grid style={todayGridStyle}>
        <Statistic title='成交顾客'
          {...upOrDown(value.all_customers)}
          suffix='人'
        />
      </Card.Grid>
    </Card>
  )
}

export default TodayBoard
