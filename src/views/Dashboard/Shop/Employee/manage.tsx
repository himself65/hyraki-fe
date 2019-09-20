import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { Button, Col, Layout, Modal, Row } from 'antd'
import { Subject } from 'rxjs'
import { Route, Switch } from 'react-router-dom'
import { DefaultProps } from '../../../../types'
import { getEmployeeList } from '../../../../api/employee'
import EmployeeBriefList from '../../../../components/Employee/EmployeeBriefList'
import AddEmployeeForm from '../../../../components/Employee/AddEmployeeForm'
import PositionContent from './position'

const ManageContent: React.FC<DefaultProps> = (props) => {
  const addEmployeeSubject = new Subject<boolean>()
  const [employeeData, setEmployeeData] = useState([])
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false)
  const EmployeeBrief: React.FC = useCallback(() => (
    <EmployeeBriefList data={employeeData} existData={false}/>), [employeeData])
  useEffect(() => {
    const fetchData = async () => {
      await getEmployeeList().then(res => {
        if (res.status === 200) {
          setEmployeeData(res.data)
        }
      })
    }
    fetchData().then()
  }, [])
  return (
    <Fragment>
      <Row>
        <Col>
          <Button.Group>
            <Button type='primary'
              onClick={() => setShowAddEmployeeModal(true)}
            >
              添加员工
            </Button>
            <Button onClick={() => props.history.push('/dashboard/shop/employee/position')}>
              职位管理
            </Button>
            <Button>
              历史记录
            </Button>
          </Button.Group>
        </Col>
      </Row>
      <Row>
        <Layout>
          <Switch>
            <Route exact path='/dashboard/shop/employee/manage' component={EmployeeBrief}/>
            <Route path='/dashboard/shop/employee/position' component={PositionContent}/>
          </Switch>
        </Layout>
      </Row>
      <Modal
        title='添加员工'
        visible={showAddEmployeeModal}
        onOk={() => {
          addEmployeeSubject.next(true)
        }}
        onCancel={() => {
          addEmployeeSubject.next(false)
          setShowAddEmployeeModal(false)
        }}
      >
        <AddEmployeeForm
          subject={addEmployeeSubject}
        />
      </Modal>
    </Fragment>
  )
}

export default ManageContent
