import React, { Fragment, useRef, useState } from 'react'
import { Button, Card, Menu, Modal } from 'antd'
import { Link, Route, Switch } from 'react-router-dom'
import { Pivot, PivotItem } from 'office-ui-fabric-react'
import { Subject } from 'rxjs'
import { DefaultProps } from '~type/index'
import { HyContent, HyHeader, HyLayout } from '~component/Layout'
import AddReserveForm from '~component/Reserve/AddReserveForm'
import ReserveCalendar from '~component/Reserve/ReserveCalendar'
import ReserveSettingsContent from './settings'
import { getShopList } from '~api/shop'
import ReserveList from '~component/Reserve/ReserveList'
import { useFetch } from '~util/hooks'
import { getReserves } from '~api/reserve'
import { Reserve } from '~type/Reserve'

const ReserveOverView: React.FC<DefaultProps> = (props) => {
  const subject = useRef(new Subject<boolean>())
  const [showAddReserveModal, setShowAddDateModal] = useState<boolean>(false)
  const [reserves] = useFetch<Reserve[]>(getReserves, [], {
    defaultParams: [0]
  })
  return (
    <Fragment>
      <Card className='hy-card'>
        <Button type='primary' onClick={() => setShowAddDateModal(true)}>添加预约</Button>
      </Card>
      <Card className='hy-card' style={{ marginTop: '1rem' }}>
        <Pivot>
          <PivotItem headerText='预览图'>
            <ReserveCalendar items={reserves}/>
          </PivotItem>
          <PivotItem headerText='详细列表'>
            <ReserveList items={reserves}/>
          </PivotItem>
        </Pivot>
      </Card>
      <Modal
        title='新建预约'
        visible={showAddReserveModal}
        onOk={() => {
          subject.current.next(true)
        }}
        onCancel={() => {
          subject.current.next(false)
          setShowAddDateModal(false)
        }}
      >
        <AddReserveForm subject={subject} api={{
          getShopList: getShopList
        }}/>
      </Modal>
    </Fragment>
  )
}

const DateContent: React.FC<DefaultProps> = (props) => {
  const [selected, setSelected] = useState<string>(
    props.location.pathname === '/dashboard/reserve' ? '1' : '2'
  )

  return (
    <HyLayout>
      <HyHeader>
        <Menu onClick={e => setSelected(e.key)} style={{ lineHeight: '64px' }}
          selectedKeys={[selected]}
          mode='horizontal'
        >
          <Menu.Item key='1'>
            <Link to='/dashboard/reserve'/>
            概览
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/dashboard/reserve/settings'/>
            设置
          </Menu.Item>
        </Menu>
      </HyHeader>
      <HyContent style={{ margin: '0.5rem 1rem' }}>
        <Switch>
          <Route exact path='/dashboard/reserve' component={ReserveOverView}/>
          {/* fixme: 将此Route迁移到 'views/dashboard/Settings' 文件夹下 */}
          <Route path='/dashboard/reserve/settings' component={ReserveSettingsContent}/>
        </Switch>
      </HyContent>
    </HyLayout>
  )
}

export default DateContent
