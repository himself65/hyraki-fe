import React, { useState } from 'react'
import { List, Spin } from 'antd'
import { Worker } from '~type/Worker'

export interface Props {
  data: Worker[]
  existData: boolean
}

const WorkerBriefList: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false)
  // fixme: title href
  return (
    <List
      size='large'
      dataSource={props.data}
      renderItem={item => (
        <List.Item key={item.id}
          actions={[
            <span key='gender'>性别：{item.gender}</span>,
            <span key='phone'>电话：{item.phone}</span>,
            <span key='position'>职位：{item.position}</span>
          ]}
        >
          <List.Item.Meta
            title={<a href={'/error'}>{item.name}</a>}
            description={`所在店铺：${item.shop}`}
          />
        </List.Item>
      )}
    >
      {loading && props.existData && (
        <div className='loading-container'>
          <Spin/>
        </div>
      )}
    </List>
  )
}

export default WorkerBriefList
