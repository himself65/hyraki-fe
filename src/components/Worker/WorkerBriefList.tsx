import React, { useState } from 'react'
import { Avatar, List, Spin } from 'antd'
import { WorkerBrief } from '../../types/Worker'

export interface Props {
  data: WorkerBrief[]
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
            <span>性别：{item.gender}</span>,
            <span>电话：{item.phone}</span>,
            <span>职位：{item.position}</span>
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src={item.avatar}/>
            }
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
