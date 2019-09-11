import React, { FormEvent, useCallback, useState } from 'react'
import { Form, Input } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { DefaultProps } from '../../types'
import { Subject } from 'rxjs'
import { Logger } from '../../utils/debug'

interface Props extends FormComponentProps {
  subject: Subject<boolean>
}

const AddEmployeeForm: React.FC<Props> = (props) => {
  const { getFieldDecorator } = props.form

  props.subject.subscribe(ok => {
    Logger('Clicked ok Button')
    if (ok) {
      checkFinished()
    } else {

    }
  })

  const [finished, setFinished] = useState(false)
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // todo
  }, [finished])
  const checkFinished = useCallback(() => {

  }, [])

  // todo
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item label='账号'>
        {getFieldDecorator('user-id', {
          rules: [
            {
              type: 'user-id',
              message: '输入了错误的ID'
            },
            {
              required: true,
              message: '请输入员工ID'
            }
          ]
        })(<Input/>)}
      </Form.Item>
    </Form>
  )
}

export default Form.create<Props>({ name: 'addEmployee' })(AddEmployeeForm)
