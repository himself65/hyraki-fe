import React, { useCallback, useEffect, useState } from 'react'
import { Form, Input, Radio, Select } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { Subject } from 'rxjs'
import { Logger } from '../../utils/debug'
import { getEmployeePositions } from '../../api/employee'
import { EmployeePosition } from '../../types/Employee'
import { getAllShopList } from '../../api/shop'
import { Shop } from '../../types/Shop'

interface Props extends FormComponentProps {
  subject: Subject<boolean>
}

const AddEmployeeForm: React.FC<Props> = (props) => {
  const { getFieldDecorator, validateFields } = props.form
  const [positionList, setPositionList] = useState<EmployeePosition[]>([])
  const [shopList, setShopList] = useState<Shop[]>([])

  const subscriber = useCallback((ok: boolean) => {
    if (ok) {
      checkFinished()
    }
  }, [])
  const checkFinished = useCallback(() => {
    validateFields((err, val) => {
      if (err) {
        Logger('A error occur on AddEmployeeForm: ', err)
      } else {
        Logger(val)
      }
    })
  }, [])

  useEffect(() => {
    props.subject.subscribe(subscriber)
    return function cleanup () {
      props.subject.unsubscribe()
    }
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      await getEmployeePositions().then(res => {
        if (res.status === 200) {
          setPositionList(res.data)
        }
      })
      await getAllShopList().then(res => {
        if (res.status === 200) {
          setShopList(res.data)
        }
      })
    }
    fetchData().then()
  }, [])

  // todo
  return (
    <Form layout='vertical'>
      <Form.Item label='隶属门店'>
        {getFieldDecorator('shop')(
          (<Select>
            {shopList.map(v => (
              <Select.Option
                key={v.id}
                value={v.id}
              >
                {v.name}
              </Select.Option>
            ))}
          </Select>)
        )}
      </Form.Item>
      <Form.Item label='账号'>
        {getFieldDecorator('id', {
          rules: [
            {
              type: 'string',
              message: '输入了错误的ID'
            },
            {
              required: true,
              message: '请输入员工ID'
            }
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label='性别'>
        {getFieldDecorator('sex')(
          <Radio.Group>
            <Radio value='1'>男</Radio>
            <Radio value='2'>女</Radio>
          </Radio.Group>
        )}
      </Form.Item>
      <Form.Item label='姓名'>
        {getFieldDecorator('name', {
          rules: [
            {
              type: 'string',
              message: '输入了错误的姓名'
            },
            {
              required: true,
              message: '请输入员工姓名'
            }
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label='电话'>
        {getFieldDecorator('phone', {
          rules: [
            {
              type: 'string',
              message: '输入了错误的电话'
            },
            {
              required: true,
              message: '请输入员工的电话'
            }
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label='职位'>
        {getFieldDecorator('position')(
          <Radio.Group>
            {positionList.map(v => (
              <Radio.Button
                key={v.id}
                value={v.id}
              >
                {v.value}
              </Radio.Button>
            ))}
          </Radio.Group>
        )}
      </Form.Item>
    </Form>
  )
}

export default Form.create<Props>({ name: 'addEmployee' })(AddEmployeeForm)
