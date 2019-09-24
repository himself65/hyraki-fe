import React, { useCallback, useEffect, useState } from 'react'
import { Card, Layout, List, Select, Skeleton } from 'antd'
import { getAllShopList, getPositionList } from '../../../../api/shop'
import { Shop } from '../../../../types/Shop'
import { WorkerPosition } from '../../../../types/Worker'

const PositionContent: React.FC = () => {
  const [shops, setShops] = useState<Shop[]>([])
  const [positions, setPositions] = useState<WorkerPosition[]>([])
  const fetchPositionList = useCallback(async (shopID: string) => {
    await getPositionList(shopID).then(res => {
      if (res.status === 200) {
        setPositions(res.data)
      }
    })
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      const shops = await getAllShopList().then(res => {
        if (res.status === 200) {
          setShops(res.data)
        }
        return res.data
      })
    }
    fetchData().then()
  }, [])
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
