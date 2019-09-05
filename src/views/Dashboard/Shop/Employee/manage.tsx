import React, { Fragment } from 'react'
import { Row, Col, Button, List } from 'antd'

export const ManageContent: React.FC = () => {
  // todo: 获取数据
  return (
    <Fragment>
      <Row>
        <Col>
          <Button>
            添加员工
          </Button>
        </Col>
        <Col>
          <Button>
            职位管理
          </Button>
        </Col>
        <Col>
          <Button>
            历史记录
          </Button>
        </Col>
      </Row>
      <Row>
        {/* todo: 支持滚动加载 */}
        <List/>
      </Row>
    </Fragment>
  )
}
