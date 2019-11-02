import React, { MutableRefObject } from 'react'
import { Form, Input, Switch } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { Subject } from 'rxjs'
import { ListAPI } from '../../../types/API'
import { Brand, Supplier } from '../../../types/Good'
import { AxiosPromise } from 'axios'

interface Props extends FormComponentProps {
  subject: MutableRefObject<Subject<boolean>>
  api: {
    getBrands (id: string): AxiosPromise<ListAPI<Brand[]>>
    getSupplier (id: string): AxiosPromise<ListAPI<Supplier[]>>
  }
}

const AddGoodForm: React.FC<Props> = ({ form }) => {
  const { getFieldDecorator } = form
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
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'销售价'}>
        {getFieldDecorator('sellingPrice', {
          rules: [
            {
              required: true,
              message: '请输入售价'
            }
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'当前库存'}>
        {getFieldDecorator('currentStock', {
          rules: [
            {
              required: true,
              message: '请输入当前库存'
            }
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'最低库存'}>
        {getFieldDecorator('safeStock', {
          rules: [
            {
              required: false
            }
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'供应商'}>
        {getFieldDecorator('supplier', {
          rules: [
            {
              required: false
            }
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'品牌'}>
        {getFieldDecorator('brand', {
          rules: [
            {
              required: false
            }
          ]
        })(<Input/>)}
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
