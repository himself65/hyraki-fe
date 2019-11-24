import React, { ReactElement } from 'react'
import { DetailsList, IColumn } from 'office-ui-fabric-react'
import { Reserve } from '~type/Reserve'

interface ReserveListProps {
  items: Reserve[]
}

interface ReserveColumn extends IColumn {
  key: string
  onRender: (item: Reserve) => ReactElement | null
}

const columns: ReserveColumn[] = [
  {
    key: 'index',
    name: '编号',
    minWidth: 32,
    maxWidth: 64,
    onRender: item => <div>{item.id}</div>
  },
  {
    key: 'phone',
    name: '电话',
    minWidth: 200,
    maxWidth: 270,
    onRender: item => <div>{item.phone}</div>
  },
  {
    key: 'targetShop',
    name: '服务店铺',
    minWidth: 200,
    maxWidth: 270,
    // todo: 这里改成 HoverCard 形式
    onRender: item => <div>{item.targetShop}</div>
  },
  {
    key: 'order',
    name: '购买菜单',
    minWidth: 200,
    maxWidth: 270,
    // todo
    onRender: item => <div>todo</div>
  },
  {
    key: 'tip',
    name: '备注',
    minWidth: 200,
    maxWidth: 270,
    // todo
    onRender: item => <div>{item.tip}</div>
  }
]

// todo
const ReserveList: React.FC<ReserveListProps> = ({ items }) => {
  return (
    <DetailsList items={items} columns={columns}/>
  )
}

export default ReserveList
