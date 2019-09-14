import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'antd'
import { Subject } from 'rxjs'
import { Link } from 'react-router-dom'
import { DefaultProps } from '../../../../types'
import { getEmployeeList } from '../../../../api/employee'
import EmployeeBriefList from '../../../../components/Employee/EmployeeBriefList'
import AddEmployeeForm from '../../../../components/Employee/AddEmployeeForm'

const addEmployeeSubject = new Subject<boolean>()

const ManageContent: React.FC<DefaultProps> = () => {
  const [employeeData, setEmployeeData] = useState([])
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false)
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
            <Button>
              <Link to='/dashboard/shop/employee/position'/>
              职位管理
            </Button>
            <Button>
              历史记录
            </Button>
          </Button.Group>
        </Col>
      </Row>
      <Row>
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
        <EmployeeBriefList data={employeeData} existData={false}/>
      </Row>
    </Fragment>
  )
}

export default ManageContent
