import React, { Fragment, useEffect } from 'react'
import { Row, Col, Button, List } from 'antd'
import { DefaultProps } from '../../../../types'
import { getEmployeeList } from '../../../../api/employee'

const ManageContent: React.FC<DefaultProps> = () => {
  useEffect(() => {
    const fetchData = async () => {
      await getEmployeeList()
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
        {/* todo: 支持滚动加载 */}
        <List/>
      </Row>
    </Fragment>
  )
}

export default ManageContent
