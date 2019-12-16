import React, { MutableRefObject, useCallback, useEffect, useState } from 'react'
import { Form, Input, Radio, Select } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { Subject } from 'rxjs'
import { observer } from 'mobx-react'
import { Logger } from '~util/debug'
import { getWorkerPositionList } from '~api/worker'
import { getShopList } from '~api/shop'
import { useFetch } from '~util/hooks'
import { store } from '~store/index'
import { WorkerPosition } from '~type/Worker'
import { Shop } from '~type/Shop'

interface Props extends FormComponentProps {
  subject: MutableRefObject<Subject<boolean>>
}

const AddWorkerForm: React.FC<Props> = observer((props) => {
  const { getFieldDecorator, validateFields } = props.form
  const [positionList] = useFetch<WorkerPosition[]>(getWorkerPositionList, [], {
    defaultParams: [store.currentBrandID, store.currentShopID, true]
  })
  const [shopList] = useFetch<Shop[]>(getShopList, [])
  const checkFinished = useCallback(() => {
    validateFields((err, val) => {
      if (err) {
        Logger('A error occur on AddWorkerForm: ', err)
      } else {
        Logger(val)
      }
    })
  }, [])
  const subscriber = useCallback((ok: boolean) => {
    if (ok) {
      checkFinished()
    }
  }, [])

  useEffect(() => {
    props.subject.current.subscribe(subscriber)
    return function cleanup () {
      props.subject.current.unsubscribe()
    }
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
        {getFieldDecorator('gender')(
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
})

export default Form.create<Props>({ name: 'addWorker' })(AddWorkerForm)
