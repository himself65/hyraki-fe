import React, { useCallback, useMemo, useState } from 'react'
import { Button, Form, Select, Table } from 'antd'
import { Serve } from '../../../types/Shop'
import TableRow from './TableRow'
import { FormComponentProps } from 'antd/es/form'
import { Logger } from '../../../utils/debug'

interface Props extends FormComponentProps {
  disabled: boolean
  serves: Serve[]
}

export interface ServeDetail extends Serve {
  key: string,
  count: number,
  cost: (this: ServeDetail) => number
}

const filterNames = (serves: Serve[]) => serves.map(v => v.name).sort()

const ServesTable: React.FC<Props> = (props) => {
  const form = props.form
  const [orderedServes, setOrderedServes] = useState<Serve[]>([])
  const serveNames: string[] = useMemo(() => filterNames(props.serves), [props.serves])
  const nonOrderedServes: Serve[] = useMemo(() =>
    props.serves.filter(v => !orderedServes.includes(v)),
  [orderedServes, props.serves])
  const dataSources: ServeDetail[] = useMemo(() => orderedServes.map((v: Serve) => ({
    ...v,
    key: v.id,
    count: 1,
    cost: function (this: ServeDetail): number {
      return this.count * this.price
    }
  })), [orderedServes])
  // todo: 添加自动 Search 的方法
  return (
    <div>
      <Select
        showSearch
        disabled={props.disabled}
        mode='multiple'
        value={orderedServes.map(v => v.name)}
        placeholder={props.disabled ? '请先选择店铺' : '搜索需要输入的服务'}
        onSelect={(value: string) => {
          // tip: Select 控件添加Serve时候调用
          const v = props.serves.find(e => e.id === value)
          if (v) {
            setOrderedServes([...orderedServes, v])
            Logger('ServesTables select serve:', v)
          }
        }}
        onDeselect={(value: string) => {
          // tip: Select 控件删除Serve时候调用
          const idx = orderedServes.findIndex(v => v.name === value)
          if (idx !== -1) {
            setOrderedServes([
              ...orderedServes.slice(0, idx),
              ...orderedServes.slice(idx + 1, orderedServes.length)
            ])
            Logger('ServesTables remove serve:', orderedServes[idx])
          }
        }}
        filterOption={(input, option) =>
          (option.props.children! as string)
            .toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
        {nonOrderedServes.map(v => (<Select.Option key={v.id} value={v.id}>{v.name}</Select.Option>))}
      </Select>
      <Table
        style={{ marginTop: '0.2rem' }}
        bordered
        dataSource={dataSources}
        columns={[
          {
            title: '名称',
            dataIndex: 'name',
            key: 'name'
          },
          {
            title: '价格',
            dataIndex: 'cost',
            key: 'cost',
            render: (func: () => number, record: ServeDetail) => func.call(record) // 防止 this 丢失
          },
          {
            title: '数量',
            dataIndex: 'count',
            key: 'count'
          }
        ]}
        components={{
          body: {
            row: TableRow
          }
        }}
      />
    </div>
  )
}

export default Form.create<Props>({ name: 'serves' })(ServesTable)
