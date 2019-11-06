import React, { Fragment, useRef, useState } from 'react'
import { DefaultProps } from '../../../../types'
import { Button, Card, Menu, Modal } from 'antd'
import { HyContent, HyHeader, HyLayout } from '../../../components/Layout'
import { Link, Route, Switch } from 'react-router-dom'
import { GoodList } from '../../../components/Good/GoodList'
import { useFetch } from '../../../utils/hooks'
import { getGoods, getSupplier } from '../../../api/good'
import { Good } from '../../../../types/Good'
import { Subject } from 'rxjs'
import AddGoodForm from '../../../components/Good/AddGoodForm'

const GoodView: React.FC<DefaultProps> = () => {
  const subject = useRef(new Subject<boolean>())
  const [showAddGoodModal, setShowAddGoodModal] = useState<boolean>(false)
  const [goods] = useFetch<Good[]>(getGoods, [], {
    defaultParams: [false]
  })
  return (
    <Fragment>
      <Card className='hy-card'>
        <Button
          type='primary'
          onClick={() => setShowAddGoodModal(true)}>
          添加
        </Button>
        <GoodList style={{
          marginTop: '1rem'
        }} items={goods} compact={true}/>
      </Card>
      <Modal
        title={'添加库存'}
        visible={showAddGoodModal}
        onOk={() => {
          subject.current.next(true)
        }}
        onCancel={() => {
          subject.current.next(false)
          setShowAddGoodModal(false)
        }}
      >
        <AddGoodForm subject={subject} api={{
          getSupplier: getSupplier
        }}/>
      </Modal>
    </Fragment>
  )
}

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
