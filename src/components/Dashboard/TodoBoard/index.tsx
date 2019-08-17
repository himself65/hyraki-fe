import React from 'react'
import { Card, Statistic } from 'antd'
import { TextAlignProperty } from 'csstype'

const todoGridStyle = {
  width: '25%',
  // fixme: why typescript have to add 'as XXX', then can pass the type checking?
  // https://github.com/Microsoft/TypeScript/issues/11465
  textAlign: 'center' as TextAlignProperty,
  height: '120px'
}

const TodoBoard: React.FC = () => {
  return (
    <Card hoverable className='hy-card' style={{ marginTop: '1rem' }} title='待办事项'>
      <Card.Grid style={todoGridStyle}>
        <Statistic title='预约待服务'
          value={10}
        />
      </Card.Grid>
      <Card.Grid style={todoGridStyle}>
        <Statistic title='服务待付款'
          value={210}
        />
      </Card.Grid>
      <Card.Grid style={todoGridStyle}>
        <Statistic title='产品待发货'
          value={6}
        />
      </Card.Grid>
      <Card.Grid style={todoGridStyle}>
        <Statistic title='推广员待审核'
          value={12}
        />
      </Card.Grid>
    </Card>
  )
}

export default TodoBoard
