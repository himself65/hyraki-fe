import React from 'react'
import { Card, Statistic } from 'antd'
import { TextAlignProperty } from 'csstype'
import { DefaultProps } from '../../../types'

const todoGridStyle = {
  width: '25%',
  // fixme: why typescript have to add 'as XXX', then can pass the type checking?
  // https://github.com/Microsoft/TypeScript/issues/11465
  textAlign: 'center' as TextAlignProperty,
  height: '120px'
}

export interface TodoData {
  serviced: number,
  pay: number,
  ship: number,
  review: number
}

export interface Props extends DefaultProps {
  value?: TodoData
}

const TodoBoard: React.FC<Props> = (props) => {
  // fixme: remove mock data
  return (
    <Card hoverable className='hy-card' style={{ marginTop: '1rem' }} title='待办事项'>
      <Card.Grid style={todoGridStyle}>
        <Statistic title='预约待服务'
          value={props.value ? props.value.serviced : 0}
        />
      </Card.Grid>
      <Card.Grid style={todoGridStyle}>
        <Statistic title='服务待付款'
          value={props.value ? props.value.pay : 0}
        />
      </Card.Grid>
      <Card.Grid style={todoGridStyle}>
        <Statistic title='产品待发货'
          value={props.value ? props.value.ship : 0}
        />
      </Card.Grid>
      <Card.Grid style={todoGridStyle}>
        <Statistic title='推广员待审核'
          value={props.value ? props.value.review : 0}
        />
      </Card.Grid>
    </Card>
  )
}

export default TodoBoard
