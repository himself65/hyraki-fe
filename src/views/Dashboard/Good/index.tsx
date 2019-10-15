import React, { useState } from 'react'
import { DefaultProps } from '../../../types'
import { HyContent, HyHeader, HyLayout } from '../../../components/Layout'
import { Menu } from 'antd'
import { Link, Route, Switch } from 'react-router-dom'

const GoodView: React.FC = () => {
  return (
    <div/>
  )
}

const GoodContent: React.FC<DefaultProps> = (props) => {
  const [selected, setSelected] = useState<string>('1')
  return (
    <HyLayout>
      <HyHeader>
        <Menu onClick={e => setSelected(e.key)} style={{ lineHeight: '64px' }}
          selectedKeys={[selected]}
          mode='horizontal'
        >
          <Menu.Item key='1'>
            <Link to='/dashboard/date'/>
            概览
          </Menu.Item>
        </Menu>
      </HyHeader>
      <HyContent style={{ margin: '0.5rem 1rem' }}>
        <Switch>
          <Route exact path='/dashboard/date' component={GoodView}/>
        </Switch>
      </HyContent>
    </HyLayout>
  )
}
