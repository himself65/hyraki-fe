import React, { Fragment, useEffect, useState } from 'react'
import { Row, Col, Button, List } from 'antd'
import { DefaultProps } from '../../../../types'
import { getEmployeeList } from '../../../../api/employee'
import EmployeeBriefList from '../../../../components/Employee/EmployeeBriefList'

const ManageContent: React.FC<DefaultProps> = () => {
  const [employeeData, setEmployeeData] = useState([])
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
            <Button>
            添加员工
            </Button>
            <Button>
            职位管理
            </Button>
            <Button>
            历史记录
            </Button>
          </Button.Group>
        </Col>
      </Row>
      <Row>
        <EmployeeBriefList data={employeeData} existData={false}/>
      </Row>
    </Fragment>
  )
}

export default ManageContent
