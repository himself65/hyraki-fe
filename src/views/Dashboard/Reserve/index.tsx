import React, { Fragment, useRef, useState } from 'react'
import { DefaultProps } from '../../../types'
import { HyContent, HyHeader, HyLayout } from '../../../components/Layout'
import { Button, Card, Menu, Modal } from 'antd'
import { Link, Route, Switch } from 'react-router-dom'
import AddReserveForm from '../../../components/Reserve/AddReserveForm'
import { Subject } from 'rxjs'
import ReserveSettingsContent from './settings'
import DatingCalendar from '../../../components/Reserve/ReserveCalendar'
import { getShopList } from '../../../api/shop'

const ReserveOverView: React.FC<DefaultProps> = (props) => {
  const subject = useRef(new Subject<boolean>())
  const [showAddReserveModal, setShowAddDateModal] = useState<boolean>(false)
  return (
    <Fragment>
      <Card className='hy-card'>
        <Button type='primary' onClick={() => setShowAddDateModal(true)}>添加预约</Button>
      </Card>
      <Card className='hy-card' style={{ marginTop: '1rem' }} title='预览图'>
        <DatingCalendar/>
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
