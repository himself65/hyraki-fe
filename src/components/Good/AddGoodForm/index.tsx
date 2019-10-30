import React, { MutableRefObject, useCallback, useState } from 'react'
import { Form, Input, InputNumber, Select, Switch } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { Subject } from 'rxjs'
import { ListAPI } from '../../../types/API'
import { Brand, Supplier } from '../../../types/Good'
import { AxiosPromise } from 'axios'
import { useFetch } from '../../../utils/hooks'
import { numberFormatter } from '../../../utils/helpers'

interface Props extends FormComponentProps {
  subject: MutableRefObject<Subject<boolean>>
  api: {
    getBrands (id: string): AxiosPromise<ListAPI<Brand[]>>
    getSupplier (id: string): AxiosPromise<ListAPI<Supplier[]>>
  }
}

const AddGoodForm: React.FC<Props> = ({ form, api }) => {
  const { getFieldDecorator } = form
  const [brands] = useFetch(api.getBrands, [])
  const [supplier] = useFetch(api.getSupplier, [])
  const [unit, setUnit] = useState<string>('个')
  form.validateFields(['unit'], (err, value) => {
    if (err) {

    }
  })
  const formatter = useCallback((value: number) => numberFormatter(value, unit), [])
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
        })(<Input/>)}
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
        })(<InputNumber/>)}
      </Form.Item>
      <Form.Item label={'销售价'}>
        {getFieldDecorator('sellingPrice', {
          rules: [
            {
              required: true,
              message: '请输入售价'
            }
          ]
        })(<InputNumber/>)}
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
      <Form.Item label={'品牌'}>
        {getFieldDecorator('brand', {
          rules: [
            {
              required: false
            }
          ]
        })(<Select placeholder={''}>
          {brands.map(v => (<Select.Option key={v.id} value={v.id}>{v.name}</Select.Option>))}
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
