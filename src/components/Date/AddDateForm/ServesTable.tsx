import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Form, Select, Table, Popconfirm } from 'antd'
import { Serve } from '../../../types/Shop'
import { TableRow, TableCell } from './TableRow'
import { FormComponentProps } from 'antd/es/form'
import { Logger } from '../../../utils/debug'
import { ColumnProps } from 'antd/lib/table'

interface Props extends FormComponentProps {
  disabled: boolean
  serves: Serve[]
  // Form 传递下的
  readonly onChange?: Function
  readonly value?: ServeDetail[] // defaultValue
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
  const nonOrderedServes: Serve[] = useMemo(() =>
    props.serves.filter(v => !orderedServes.includes(v)),
  [orderedServes, props.serves])
  const handleDeleteDataSource = useCallback((idx: number) => {
    setOrderedServes([
      ...orderedServes.slice(0, idx),
      ...orderedServes.slice(idx + 1, orderedServes.length)
    ])
    Logger('%cServesTables remove serve:', 'background: red', orderedServes[idx])
  }, [orderedServes])
  // 供 Table 使用
  const dataSources: ServeDetail[] = useMemo(() => orderedServes.map((v: Serve) => ({
    ...v,
    key: v.id,
    count: 1,
    cost: function (this: ServeDetail): number {
      return this.count * this.price
    }
  })), [orderedServes])
  const columns: ColumnProps<ServeDetail>[] = useMemo(() => ([
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
      key: 'count',
      editable: true
    },
    {
      title: '操作',
      dataIndex: 'operation',
      render: (_: any, __: ServeDetail, idx: number) => dataSources.length >= 1 ? (
        <Popconfirm
          title='确认删除吗？'
          onConfirm={() => handleDeleteDataSource(idx)}
        >
          <a>删除</a>
        </Popconfirm>
      ) : null
    }
  ].map(col => ({
    ...col,
    editable: undefined, // 去掉 editable
    onCell: record => ({
      record,
      ...col
    })
  }))), [])
  useEffect(() => {
    // 传递值给上层 Form
    if (props.onChange) {
      props.onChange([...dataSources])
    }
  }, [dataSources])
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
            Logger('%cServesTables select serve:', 'background: green', v)
          }
        }}
        onDeselect={(value: string) => {
          // tip: Select 控件删除Serve时候调用
          const idx = orderedServes.findIndex(v => v.name === value)
          if (idx !== -1) {
            handleDeleteDataSource(idx)
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
        columns={columns}
        components={{
          body: {
            row: TableRow,
            cell: TableCell
          }
        }}
      />
    </div>
  )
}

export default Form.create<Props>({ name: 'serves' })(ServesTable)
