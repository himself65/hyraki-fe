import React, { MutableRefObject, useCallback, useEffect, useState } from 'react'
import { Form, DatePicker, Input, Select } from 'antd'
import { FormComponentProps } from 'antd/es/form'
import { Subject } from 'rxjs'
import { useFetch } from '../../utils/hooks'
import { getAllShopList, getAllShopServe } from '../../api/shop'
import { Serve, ServeListAPI, Shop } from '../../types/Shop'

export interface Props extends FormComponentProps {
  subject: MutableRefObject<Subject<boolean>>
}

declare module 'antd/lib/select' {
  export interface OptionProps {
    label?: string;
  }
}

// todo: finish Form.Item
const AddDateForm: React.FC<Props> = (props) => {
  const [serves, setServes] = useState<Serve[]>([])
  const [shops, setShops] = useFetch<Shop[]>(
    async () => getAllShopList().then(res => {
      res.status === 200 && getAllShopServe(res.data[0].id).then(res => {
        if (res.status === 200) {
          setServes(res.data)
        }
        // todo: add error logs
      }) // 默认读取第一个店铺的服务清单
      return res
    }),
    []
  )
  const { getFieldDecorator, validateFields } = props.form
  return (
    <Form layout='vertical'>
      <Form.Item label='手机号'>
        {getFieldDecorator('phone', {
          rules: [
            {
              required: true,
              message: '请输入电话号码'
            }
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label='客户名'>
        {getFieldDecorator('id', {
          rules: [
            {
              required: true,
              message: '请输入客户ID'
            }
          ]
        })(<Input/>)}
      </Form.Item>
      <Form.Item label='预约门店'>
        {getFieldDecorator('target', {
          rules: [
            {
              required: true,
              message: '请选择门店'
            }
          ]
        })(
          <Select onSelect={async (v) => {
            await getAllShopServe(v as string).then(res => {
              if (res.status === 200) {
                setServes(res.data)
              }
              // todo: add error logs
              // fixme: 获取后删除 serves 菜单，缓存保存到 LocalStorage
            })
          }}>
            {shops.map(v => (<Select.Option key={v.id} value={v.id}>{v.name}</Select.Option>))}
          </Select>
        )}
      </Form.Item>
      <Form.Item label='服务及手艺人'>
        {getFieldDecorator('serves', {
          rules: [
            {
              required: true,
              message: '请选择服务及手艺人'
            }
          ]
        })(
          <Select mode='tags' optionLabelProp='label'>
            {serves.map(v => (<Select.Option key={v.id} label={v.name}>{v.name} {v.price}</Select.Option>))}
          </Select>
        )}
      </Form.Item>
      <Form.Item label='到店时间'>
        {getFieldDecorator('start-time', {
          rules: [
            {
              required: true,
              message: '请输入到店时间'
            }
          ]
        })(<DatePicker/>)}
      </Form.Item>
      <Form.Item label='备注'>
        {getFieldDecorator('comment')(<Input.TextArea rows={4}/>)}
      </Form.Item>
    </Form>
  )
}

export default Form.create<Props>({ name: 'addDate' })(AddDateForm)
