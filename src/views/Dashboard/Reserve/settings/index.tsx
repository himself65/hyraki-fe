import React, { Fragment, useState } from 'react'
import { Card, Tabs } from 'antd'
import { DefaultProps } from '~type/index'
import { getShopList } from '~api/shop'
import { useFetch } from '~util/hooks'
import { Shop } from '~type/Shop'

const DateSettingsContent: React.FC<DefaultProps> = () => {
  const [selected, setSelected] = useState('1')
  const [selectedShop] = useFetch<Shop[]>(getShopList, [])

  return (
    <Fragment>
      <Card>
        <Tabs defaultActiveKey={selected} onChange={v => setSelected(v)}>
          <Tabs.TabPane tab='全局设置' key='1'>
            {/* todo */}
          </Tabs.TabPane>
          <Tabs.TabPane tab='预约设置' key='2'>
            {/* todo */}
          </Tabs.TabPane>
          <Tabs.TabPane tab='员工管理' key='3'>
            {/* todo */}
          </Tabs.TabPane>
        </Tabs>
      </Card>
    </Fragment>
  )
}

export default DateSettingsContent
