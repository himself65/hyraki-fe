import React, { PropsWithChildren } from 'react'

// todo: 表行的单元格显示部分
const TableCell: React.FC = (props) => {
  return (
    <td>
      {props.children}
    </td>
  )
}

// todo: 表行显示部分
const TableRow: React.FC<PropsWithChildren<{
  edit: boolean
}>> = (props) => {
  return (
    <tr>{props.children}</tr>
  )
}
export {
  TableCell,
  TableRow
}
export default TableRow
