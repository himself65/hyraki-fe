import React, { CSSProperties, ReactElement, useMemo } from 'react'
import {
  Button,
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  MarqueeSelection,
  Selection,
  Fabric
} from 'office-ui-fabric-react'
import { Client } from '~type/Client'
import PropTypes from 'prop-types'
import { Gender } from '~util/shared'
import ClientCardHover from '~component/Client/ClientCardHover'

export interface ClientListProps {
  items: Client[]
  style?: CSSProperties
}

interface ClientColumn extends IColumn {
  key: string
  onRender: (item: Client, index?: number, column?: IColumn) => ReactElement | null
}

const columns: ClientColumn[] = [
  {
    key: 'id',
    name: '编号',
    minWidth: 32,
    maxWidth: 64,
    onRender: item => <div>{item.id}</div>
  },
  {
    key: 'name',
    name: '姓名',
    minWidth: 72,
    onRender: item => <div>{item.name}</div>
  },
  {
    key: 'phone',
    name: '电话号',
    minWidth: 100,
    onRender: item => <div>{item.phone}</div>
  },
  {
    key: 'gender',
    name: '性别',
    minWidth: 64,
    onRender: item => <div>{item.gender === Gender.man ? '男' : '女'}</div>
  },
  {
    key: 'created_date',
    name: '注册日期',
    minWidth: 100,
    onRender: item => <div>{item.created_date}</div>
  },
  {
    key: 'last_appear',
    name: '回访日期',
    minWidth: 100,
    onRender: item => <div>{item.last_appear}</div>
  },
  {
    key: 'cards',
    name: '卡账户',
    minWidth: 200,
    // todo: 这里做一个 HoverCard
    onRender: item => (<ClientCardHover item={item}/>)
  },
  {
    key: 'times',
    name: '消费次数',
    minWidth: 42,
    onRender: item => <div>{item.times}</div>
  },
  {
    key: 'integration',
    name: '积分',
    minWidth: 72,
    onRender: item => <div>{item.integration}</div>
  }
]

const ClientList: React.FC<ClientListProps> = ({ items, style, ...props }) => {
  const selection = useMemo(() => new Selection({
    onSelectionChanged: () => 'Selection'
  }), [])
  return (
    <Fabric style={style}>
      {/* todo: 删除功能 */}
      <Button>
        删除
      </Button>
      <MarqueeSelection selection={selection}>
        <DetailsList
          items={items}
          columns={columns}
          layoutMode={DetailsListLayoutMode.justified}
        />
      </MarqueeSelection>
    </Fabric>
  )
}

ClientList.propTypes = {
  items: PropTypes.array.isRequired,
  style: PropTypes.object
}

export default ClientList
