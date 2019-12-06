import React, { Fragment, useState } from 'react'
import { DefaultProps } from '~type/index'
import { Card, Menu } from 'antd'
import { HyContent, HyHeader, HyLayout } from '~component/Layout'
import { Link, Route, Switch } from 'react-router-dom'
import { GoodList } from '~component/Good/GoodList'
import { useFetch } from '~util/hooks'
import { getGoods, getSupplier, deleteGoods } from '~api/good'
import { observer } from 'mobx-react'
import { Good } from '~type/Good'
import { store } from '~store/index'

const GoodView: React.FC<DefaultProps> = observer(() => {
  const [goods] = useFetch<Good[]>(getGoods, [], {
    defaultParams: [store.currentBrandID, store.currentShopID, false]
  })

  return (
    <Fragment>
      <Card className='hy-card'>
        <GoodList api={{
          getSupplier,
          deleteGoods
        }} items={goods} compact={true}/>
      </Card>
    </Fragment>
  )
})

export const GoodContent: React.FC<DefaultProps> = (props) => {
  const [selected, setSelected] = useState<string>('1')
  return (
    <HyLayout>
      <HyHeader>
        <Menu onClick={e => setSelected(e.key)} style={{ lineHeight: '64px' }}
          selectedKeys={[selected]}
          mode='horizontal'
        >
          <Menu.Item key='1'>
            <Link to='/dashboard/good'/>
            概览
          </Menu.Item>
        </Menu>
      </HyHeader>
      <HyContent style={{ margin: '0.5rem 1rem' }}>
        <Switch>
          <Route exact path='/dashboard/good' component={GoodView}/>
        </Switch>
      </HyContent>
    </HyLayout>
  )
}
