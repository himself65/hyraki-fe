import React, { MutableRefObject, useEffect, useState } from 'react'
import { Form, Input, InputNumber, Select, Switch } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { Subject } from 'rxjs'
import { ListAPI } from '~type/API'
import { Good, Supplier } from '~type/Good'
import { AxiosPromise } from 'axios'
import { useFetch } from '~util/hooks'
import { numberFormatter } from '~util/helpers'
import { Simulate } from 'react-dom/test-utils'
import { Logger } from '~util/debug'
import { addGood } from '~api/good'
import error = Simulate.error

interface Props extends FormComponentProps<Required<Good>> {
  subject: MutableRefObject<Subject<boolean>>
  api: {
    getSupplier (id: string): AxiosPromise<ListAPI<Supplier[]>>
  }
}

const AddGoodForm: React.FC<Props> = ({ subject, form, api }) => {
  const { getFieldDecorator, validateFields } = form
  const [supplier] = useFetch(api.getSupplier, [])
  const [unit, setUnit] = useState<string>('')
  useEffect(() => {
    // tip: 仅运行一次
    subject.current.subscribe((submit: boolean) => {
      if (submit) {
        validateFields((error, value) => {
          if (error) {
            Logger(`%c${error}`, 'background: red')
          } else {
            addGood(value).then() // todo: 全局提醒添加成功
          }
        })
      }
    })
  }, [])
  return (
    <Form layout={'vertical'}>
      <Form.Item label={'名称'}>
        {getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: '请输入名称'
            }
          ],
          validateFirst: true
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'单位'}>
        {getFieldDecorator('unit', {
          rules: [
            {
              required: false,
              message: '请输入单位'
            }
          ]
        })(
          <Input
            onBlur={(event) => setUnit(event.target.value)}
            maxLength={1}
            placeholder={'例如：“分”、“个”'}
          />
        )}
      </Form.Item>
      <Form.Item label={'大类'}>
        {getFieldDecorator('mainClass', {
          rules: [
            {
              required: false,
              message: '请输入大类'
            }
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'小类'}>
        {getFieldDecorator('subClass', {
          rules: [
            {
              required: false,
              message: '请输入小类'
            }
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'是否非卖品'}>
        {getFieldDecorator('forSale', {
          valuePropName: 'checked',
          rules: [
            {
              required: true,
              message: '设置是否非卖品'
            }
          ]
        })(<Switch checkedChildren={'是'} unCheckedChildren={'否'}/>)}
      </Form.Item>
      <Form.Item label={'成本价'}>
        {getFieldDecorator('costPrice', {
          rules: [
            {
              required: false,
              message: '请输入成本价'
            }
          ]
        })(<InputNumber formatter={value => numberFormatter(value, unit)}/>)}
      </Form.Item>
      <Form.Item label={'销售价'}>
        {getFieldDecorator('sellingPrice', {
          rules: [
            {
              required: true,
              message: '请输入售价'
            }
          ]
        })(<InputNumber formatter={value => numberFormatter(value, unit)}/>)}
      </Form.Item>
      <Form.Item label={'当前库存'}>
        {getFieldDecorator('currentStock', {
          rules: [
            {
              required: true,
              message: '请输入当前库存'
            }
          ]
        })(<InputNumber/>)}
      </Form.Item>
      <Form.Item label={'最低库存'}>
        {getFieldDecorator('safeStock', {
          rules: [
            {
              required: false
            }
          ]
        })(<InputNumber/>)}
      </Form.Item>
      <Form.Item label={'供应商'}>
        {getFieldDecorator('supplier', {
          rules: [
            {
              required: false
            }
          ]
        })(<Select placeholder={''}>
          {supplier.map(v => (<Select.Option key={v.id} value={v.id}>{v.name}</Select.Option>))}
        </Select>)}
      </Form.Item>
      <Form.Item label={'备注'}>
        {getFieldDecorator('remark', {
          rules: [
            {
              required: false
            }
          ]
        })(<Input.TextArea rows={4}/>)}
      </Form.Item>
    </Form>
  )
}

export default Form.create<Props>({ name: 'addGood' })(AddGoodForm)
