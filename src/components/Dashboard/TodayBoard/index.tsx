import React from 'react'
import { Card, Icon, Statistic } from 'antd'

export const todayGridStyle = {
  width: '33.33%',
  height: '120px'
}

const TodayBoard: React.FC = () => {
  return (
    <Card hoverable className='hy-card' title='今日数据'>
      <Card.Grid style={todayGridStyle}>
        <Statistic title='实际收款金额'
          value={114514}
          precision={2}
          prefix={<Icon type='arrow-up'/>}
          valueStyle={{ color: '#cf1322' }}
          suffix='元'
        />
      </Card.Grid>
      <Card.Grid style={todayGridStyle}>
        <Statistic title='顾客消耗金额'
          value={10086}
          precision={2}
          prefix={<Icon type='arrow-down'/>}
          valueStyle={{ color: '#3f8600' }}
          suffix='元'
        />
      </Card.Grid>
      <Card.Grid style={todayGridStyle}>
        <Statistic title='成交顾客'
          value={100}
          prefix={<Icon type='arrow-right'/>}
          valueStyle={{ color: '#40a9ff' }}
          suffix='人'
        />
      </Card.Grid>
    </Card>
  )
}

export default TodayBoard
