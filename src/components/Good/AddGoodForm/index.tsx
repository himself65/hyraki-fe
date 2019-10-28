import React, { MutableRefObject } from 'react'
import { Form, Input, Switch } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { Subject } from 'rxjs'

interface Props extends FormComponentProps {
  subject: MutableRefObject<Subject<boolean>>
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
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'单位'}>
        {getFieldDecorator('unit', {
          // todo
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'大类'}>
        {getFieldDecorator('mainClass', {
          // todo
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'小类'}>
        {getFieldDecorator('subClass', {
          // todo
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'是否非卖品'}>
        {getFieldDecorator('forSale', {
          // todo
        })(<Switch/>)}
      </Form.Item>
      <Form.Item label={'成本价'}>
        {getFieldDecorator('costPrice', {
          // todo
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'销售价'}>
        {getFieldDecorator('sellingPrice', {
          // todo
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'当前库存'}>
        {getFieldDecorator('currentStock', {
          // todo
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'最低库存'}>
        {getFieldDecorator('safeStock', {
          // todo
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'供应商'}>
        {getFieldDecorator('supplier', {
          // todo: 添加供应商相关部分
        })(<Input/>)}
      </Form.Item>
      <Form.Item label={'品牌'}>
        {getFieldDecorator('brand', {
          // todo: 添加品牌相关部分
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
