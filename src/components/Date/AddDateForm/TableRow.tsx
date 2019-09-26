import React, { PropsWithChildren } from 'react'
import { Form } from 'antd'

// todo: 表行的单元格显示部分
const TableCell: React.FC = () => {
  return (
    <div/>
  )
}

// todo: 表行显示部分
const TableRow: React.FC<PropsWithChildren<{
  edit: boolean
}>> = (props) => {
  const isEdit = props.edit
  return (
    <div/>
  )
}

export default TableRow
