import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { Button, Col, Layout, Modal, Row, Card } from 'antd'
import { Subject } from 'rxjs'
import { Route, Switch } from 'react-router-dom'
import { DefaultProps } from '../../../../types'
import { getWorkerList } from '../../../../api/worker'
import WorkerBriefList from '../../../../components/Worker/WorkerBriefList'
import AddWorkerForm from '../../../../components/Worker/AddWorkerForm'
import PositionContent from './position'

const ManageContent: React.FC<DefaultProps> = (props) => {
  const addWorkerSubject = useRef(new Subject<boolean>())
  const [workerData, setWorkerData] = useState([])
  const [showAddWorkerModal, setShowAddWorkerModal] = useState(false)
  const WorkerBrief: React.FC = useCallback(() => (
    <Card bordered={false}>
      <WorkerBriefList data={workerData} existData={false}/>
    </Card>
  ), [workerData])
  useEffect(() => {
    const fetchData = async () => {
      await getWorkerList().then(res => {
        if (res.status === 200) {
          setWorkerData(res.data)
        }
      })
    }
    fetchData().then()
  }, [])
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
}

export default ManageContent
