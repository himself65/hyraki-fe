import React from 'react'
import { Card, Icon } from 'antd'
import { TextAlignProperty } from 'csstype'

export const commonGridStyle = {
  width: '20%',
  textAlign: 'center' as TextAlignProperty
}

const CommonBoard: React.FC = () => {
  return (
    <Card hoverable className='hy-card' style={{ marginTop: '1rem' }} title='常用功能'>
      <Card.Grid style={commonGridStyle}>
        <Icon type='red-envelope' theme='twoTone' />
        <span style={{ marginLeft: '0.5rem' }}>快速开单</span>
      </Card.Grid>
      <Card.Grid style={commonGridStyle}>
        <Icon type='credit-card' theme='twoTone' />
        <span style={{ marginLeft: '0.5rem' }}>快速开卡</span>
      </Card.Grid>
      <Card.Grid style={commonGridStyle}>
        <Icon type='pound-circle' theme='twoTone' />
        <span style={{ marginLeft: '0.5rem' }}>会员充值</span>
      </Card.Grid>
      <Card.Grid style={commonGridStyle}>
        <Icon type='profile' theme='twoTone' />
        <span style={{ marginLeft: '0.5rem' }}>快速检码</span>
      </Card.Grid>
      <Card.Grid style={commonGridStyle}>
        <Icon type='schedule' theme='twoTone' />
        <span style={{ marginLeft: '0.5rem' }}>新增预约</span>
      </Card.Grid>
      <Card.Grid style={commonGridStyle}>
        <Icon type='hdd' theme='twoTone' />
        <span style={{ marginLeft: '0.5rem' }}>营业报表</span>
      </Card.Grid>
      <Card.Grid style={commonGridStyle}>
        <Icon type='calculator' theme='twoTone' />
        <span style={{ marginLeft: '0.5rem' }}>员工业绩</span>
      </Card.Grid>
      <Card.Grid style={commonGridStyle}>
        <Icon type='money-collect' theme='twoTone' />
        <span style={{ marginLeft: '0.5rem' }}>资金充值</span>
      </Card.Grid>
      <Card.Grid style={commonGridStyle}>
        <Icon type='dollar' theme='twoTone' />
        <span style={{ marginLeft: '0.5rem' }}>可用余额</span>
      </Card.Grid>
      <Card.Grid style={commonGridStyle}>
        <Icon type='html5' theme='twoTone' />
        <span style={{ marginLeft: '0.5rem' }}>访问多端</span>
      </Card.Grid>
    </Card>
  )
}

export default CommonBoard
