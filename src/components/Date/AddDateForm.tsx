import React from 'react'
import { Form, DatePicker } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { Subject } from 'rxjs'

export interface Props extends FormComponentProps {
  subject: Subject<boolean>
}

// todo: finish Form.Item
const AddDateForm: React.FC<Props> = (props) => {
  const { getFieldDecorator, validateFields } = props.form
  return (
    <Form layout='vertical'>
      <Form.Item label='手机号'>
      </Form.Item>
      <Form.Item label='客户名'>
      </Form.Item>
      <Form.Item label='预约门店'>
      </Form.Item>
      <Form.Item label='服务及手艺人'>
      </Form.Item>
      <Form.Item label='到店时间'>
        {getFieldDecorator('start-time', {
          rules: [
            {
              required: true,
              message: '请输入开始时间'
            }
          ]
        })(<DatePicker/>)}
      </Form.Item>
      <Form.Item label='备注'>
      </Form.Item>
    </Form>
  )
}

export default Form.create<Props>({ name: 'addDate' })(AddDateForm)
