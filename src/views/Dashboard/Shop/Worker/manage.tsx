import React, { Fragment, useCallback, useRef, useState } from 'react'
import { Button, Card, Col, Layout, Modal, Row } from 'antd'
import { Subject } from 'rxjs'
import { Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react'
import { DefaultProps } from '~type/index'
import { getWorkerList } from '~api/worker'
import WorkerBriefList from '~component/Worker/WorkerBriefList'
import AddWorkerForm from '~component/Worker/AddWorkerForm'
import PositionContent from './position'
import { useFetch } from '~util/hooks'
import { store } from '~store/index'

const ManageContent: React.FC<DefaultProps> = observer((props) => {
  const addWorkerSubject = useRef(new Subject<boolean>())
  const [workerData] = useFetch(getWorkerList, [], {
    defaultParams: [store.currentBrandID, store.currentShopID]
  })
  const [showAddWorkerModal, setShowAddWorkerModal] = useState(false)
  const WorkerBrief: React.FC = useCallback(() => (
    <Card bordered={false}>
      <WorkerBriefList data={workerData} existData={false}/>
    </Card>
  ), [workerData])
  return (
    <Fragment>
      <Card bordered={false}>
        <Row>
          <Col>
            <Button.Group>
              <Button type='primary'
                onClick={() => setShowAddWorkerModal(true)}
              >
                添加员工
              </Button>
              <Button onClick={() => props.history.push('/dashboard/shop/worker/position')}>
                职位管理
              </Button>
              <Button>
                历史记录
              </Button>
            </Button.Group>
          </Col>
        </Row>
      </Card>
      <Row>
        <Layout>
          <Switch>
            <Route exact path='/dashboard/shop/worker/manage' component={WorkerBrief}/>
            <Route path='/dashboard/shop/worker/position' component={PositionContent}/>
          </Switch>
        </Layout>
      </Row>
      <Modal
        title='添加员工'
        visible={showAddWorkerModal}
        onOk={() => {
          addWorkerSubject.current.next(true)
        }}
        onCancel={() => {
          addWorkerSubject.current.next(false)
          setShowAddWorkerModal(false)
        }}
      >
        <AddWorkerForm
          subject={addWorkerSubject}
        />
      </Modal>
    </Fragment>
  )
})

export default ManageContent
