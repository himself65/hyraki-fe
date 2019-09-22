import React, { Fragment, useEffect, useState } from 'react'
import { Card, Menu, Radio, Tabs } from 'antd'
import { DefaultProps } from '../../../../types'
import { getAllShopList } from '../../../../api/shop'
import { Shop } from '../../../../types/Shop'

const DateSettingsContent: React.FC<DefaultProps> = () => {
  const [selected, setSelected] = useState('1')
  const [selectedShop, setSelectedShop] = useState<Shop>()
  useEffect(() => {
    const fetchData = async () => {
      await getAllShopList().then(res => {
        if (res.status === 200) {
          setSelectedShop(res.data[0])
        }
        return res
      }).then(async (res) => {
        if (res.status === 200) {

        }
      })
    }
    fetchData().then()
  }, [])

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
