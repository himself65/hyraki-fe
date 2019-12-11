import React, { CSSProperties, ReactElement, useMemo, useState } from 'react'
import {
  Stack,
  DefaultButton,
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  MarqueeSelection,
  Selection,
  Fabric, IStackTokens
} from 'office-ui-fabric-react'
import { Client } from '~type/Client'
import PropTypes from 'prop-types'
import { Gender } from '~util/shared'
import ClientCardHover from '~component/Client/ClientCardHover'
import { filterItems } from '~util/helpers'
import { deleteClients } from '~api/client'
import { StoreProps } from '~type/index'

export interface ClientListProps {
  items: Client[]
  style?: CSSProperties
  api: {
    deleteClients: typeof deleteClients
  }
  store: StoreProps
}

const stackTokens: IStackTokens = { childrenGap: 20 }

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
    maxWidth: 100,
    onRender: item => <div>{item.name}</div>
  },
  {
    key: 'phone',
    name: '电话号',
    minWidth: 100,
    maxWidth: 120,
    onRender: item => <div>{item.phone}</div>
  },
  {
    key: 'gender',
    name: '性别',
    minWidth: 64,
    maxWidth: 72,
    onRender: item => <div>{item.gender === Gender.man ? '男' : '女'}</div>
  },
  {
    key: 'created_date',
    name: '注册日期',
    minWidth: 100,
    maxWidth: 120,
    onRender: item => <div>{item.created_date}</div>
  },
  {
    key: 'last_appear',
    name: '回访日期',
    minWidth: 100,
    maxWidth: 120,
    onRender: item => <div>{item.last_appear}</div>
  },
  {
    key: 'cards',
    name: '卡账户',
    minWidth: 200,
    onRender: item => (<ClientCardHover item={item}/>)
  },
  {
    key: 'times',
    name: '消费次数',
    minWidth: 72,
    maxWidth: 100,
    onRender: item => <div>{item.times}</div>
  },
  {
    key: 'integration',
    name: '积分',
    minWidth: 72,
    maxWidth: 100,
    onRender: item => <div>{item.integration}</div>
  }
]

const ClientList: React.FC<ClientListProps> = ({
  items,
  style,
  api: { deleteClients },
  store: { brandID, shopID }
}) => {
  const [selectedItemKeys, setSelectedItemKeys] = useState<string[]>([])
  const selection = useMemo(() => new Selection({
    onSelectionChanged: () => {
      // tip: 已经找到了选中的keys
      const selectedKeys = filterItems(
        selection.getItems() as Client[],
        selection.getSelectedIndices()
      ).map(v => v.id)
      setSelectedItemKeys(selectedKeys)
    }
  }), [])
  return (
    <Fabric style={style}>
      {/* todo: 删除功能 */}
      <Stack horizontal tokens={stackTokens}>
        <DefaultButton
          disabled={selectedItemKeys.length === 0}
          onClick={() => {
            deleteClients(brandID, shopID, selectedItemKeys)
              .then(() => {
                // todo
              })
          }}
        >
          删除
        </DefaultButton>
      </Stack>
      <MarqueeSelection selection={selection}>
        <DetailsList
          items={items}
          columns={columns}
          selection={selection}
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
