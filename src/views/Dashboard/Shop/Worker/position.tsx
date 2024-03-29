import React from 'react'
import { Card, Layout, List, Select, Skeleton } from 'antd'
import { getPositionList, getShopList } from '~api/shop'
import { Shop } from '~type/Shop'
import { WorkerPosition } from '~type/Worker'
import { useFetch } from '~util/hooks'
import { ListAPI } from '~type/API'

const PositionContent: React.FC = () => {
  const [shops] = useFetch<Shop[]>(getShopList, [])
  const [positions, {
    trigger: fetchPositionList
  }] = useFetch<WorkerPosition[], [string], ListAPI<WorkerPosition[]>>(getPositionList, [], {
    defaultParams: ['1']
  })

  return (
    <Layout>
      <Card title='选择门店'>
        <Select
          onSelect={value => fetchPositionList(value as string)}
          placeholder='选择要查看的门店'
          style={{ width: '120px' }}
        >
          {shops.map(v =>
            (<Select.Option key={v.id}>{v.name}</Select.Option>))}
        </Select>
      </Card>
      <Card title='职位' style={{ marginTop: '1rem' }}>
        <List
          loading={false}
          itemLayout='horizontal'
          dataSource={positions}
          renderItem={(item: WorkerPosition) => (
            <List.Item
              actions={[<a key='list-loadmore-edit'>编辑</a>]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  title={item.value}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Card>
    </Layout>
  )
}

export default PositionContent
