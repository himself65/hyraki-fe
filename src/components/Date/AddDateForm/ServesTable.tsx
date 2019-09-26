import React, { useCallback, useMemo, useState } from 'react'
import { Button, Form, Select, Table } from 'antd'
import { Serve } from '../../../types/Shop'
import TableRow from './TableRow'
import { FormComponentProps } from 'antd/es/form'

interface Props extends FormComponentProps {
  serves: Serve[]
}

const filterNames = (serves: Serve[]) => serves.map(v => v.name).sort()

const ServesTable: React.FC<Props> = (props) => {
  const form = props.form
  const [orderedServes, setOrderedServes] = useState<Serve[]>([])
  const [options, setOptions] = useState<string[]>([])
  const serveNames = useMemo(() => filterNames(props.serves), [props.serves])
  // todo: 添加自动 Search 的方法
  return (
    <div>
      <Select
        showSearch
        placeholder='搜索需要输入的服务'
        onChange={value => {
          // todo: 添加到 Table 中
        }}
        filterOption={(input, option) =>
          (option.props.children! as string)
            .toLowerCase().indexOf(input.toLowerCase()) >= 0
        }>
        {options.map(v => (<div/>))}
      </Select>
      <Table
        bordered
        components={{
          body: {
            cell: TableRow
          }
        }}
      />
    </div>
  )
}

export default Form.create<Props>({ name: 'serves' })(ServesTable)
