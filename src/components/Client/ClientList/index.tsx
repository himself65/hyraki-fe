import React, { CSSProperties, ReactElement, useMemo, useState } from 'react'
import {
  Stack,
  DefaultButton,
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  MarqueeSelection,
  Selection, mergeStyleSets,
  Fabric, IStackTokens
} from 'office-ui-fabric-react'
import { Pagination } from '@uifabric/experiments'
import { Client } from '~type/Client'
import { Gender } from '~util/shared'
import ClientCardHover from '~component/Client/ClientCardHover'
import { filterItems } from '~util/helpers'
import { deleteClients, getClients } from '~api/client'
import { StoreProps } from '~type/index'
import { useFetch } from '~util/hooks'
import { ListAPI } from '~type/API'

export interface ClientListProps {
  style?: CSSProperties
  api: {
    deleteClients: typeof deleteClients
    getClients: typeof getClients
  }
  store: StoreProps
}

const classNames = mergeStyleSets({
  pagination: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: '1rem'
  }
})

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
  style,
  api: { deleteClients },
  store: { brandID, shopID }
}) => {
  const [page, setPage] = useState(0)
  const [clients, {
    data: { page: maxPage = 0 },
    trigger: fetchClients
  }] = useFetch<Client[], [number], ListAPI<Client[]>>(getClients, [], {
    defaultParams: [page]
  })
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
          items={clients}
          columns={columns}
          selection={selection}
          layoutMode={DetailsListLayoutMode.justified}
        />
      </MarqueeSelection>
      <div className={classNames.pagination}>
        <Pagination
          selectedPageIndex={page}
          pageCount={clients.length}
          itemsPerPage={clients.length}
          totalItemCount={maxPage * clients.length}
          onPageChange={index => fetchClients(index).then(() => setPage(index))}
        />
      </div>
    </Fabric>
  )
}

export default ClientList
