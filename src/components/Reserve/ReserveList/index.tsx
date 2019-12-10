import React, { ReactElement, useCallback } from 'react'
import { DetailsList, IColumn, Stack, PrimaryButton } from 'office-ui-fabric-react'
import { Reserve } from '~type/Reserve'
import moment from 'moment'

interface ReserveListProps {
  items: Reserve[]
  hide?: {
    add?: boolean
    del?: boolean
  }
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
    key: 'startTime',
    name: '开始时间',
    minWidth: 200,
    maxWidth: 260,
    onRender: item => <div>{moment.unix(item.startTime).format('YYYY年M月D日 HH:m')}</div>
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
const ReserveList: React.FC<ReserveListProps> = ({
  items,
  hide: {
    add = false,
    del = false
  } = {
    add: false,
    del: false
  }
}) => {
  // todo: 这两个事件
  const deleteEvent = useCallback(() => { }, [])
  const newEvent = useCallback(() => { }, [])
  return (
    <Stack>
      <Stack.Item>
        <Stack tokens={{ childrenGap: 5 }} horizontal>
          <Stack.Item>
            <PrimaryButton>添加</PrimaryButton>
          </Stack.Item>
          <Stack.Item>
            <PrimaryButton>删除</PrimaryButton>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item>
        <DetailsList items={items} columns={columns}/>
      </Stack.Item>
    </Stack>
  )
}

export default ReserveList
