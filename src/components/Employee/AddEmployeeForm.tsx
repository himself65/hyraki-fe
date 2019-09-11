import React, { useCallback, useEffect } from 'react'
import { Form, Input } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { Subject } from 'rxjs'
import { Logger } from '../../utils/debug'

interface Props extends FormComponentProps {
  subject: Subject<boolean>
}

const AddEmployeeForm: React.FC<Props> = (props) => {
  const { getFieldDecorator, validateFields } = props.form
  const subscriber = useCallback((ok: boolean) => {
    if (ok) {
      checkFinished()
    }
  }, [])
  useEffect(() => {
    props.subject.subscribe(subscriber)
    return function cleanup () {
      props.subject.unsubscribe()
    }
  }, [])
  const checkFinished = useCallback(() => {
    validateFields((err, val) => {
      if (err) {
        Logger('A error occur on AddEmployeeForm: ', err)
      } else {

      }
    })
  }, [])

  // todo
  return (
    <Form layout='vertical'>
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
    </Form>
  )
}

export default Form.create<Props>({ name: 'addEmployee' })(AddEmployeeForm)
