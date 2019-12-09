import React, { useCallback, useEffect, useMemo } from 'react'
import { Badge, Calendar } from 'antd'
import {
  HoverCard, HoverCardType, Text, Stack,
  DocumentCard, DocumentCardDetails, DocumentCardTitle, DocumentCardActivity
} from 'office-ui-fabric-react'
import * as moment from 'moment'
import { Reserve } from '~type/Reserve'
import { getRandomColor } from '~util/helpers'

interface ReserveCalendarProps {
  items: Reserve[]
}

export const findItems = function <T extends { time: moment.Moment }> (items: T[], query: moment.Moment): T[] {
  // fixme: 性能优化
  return items
    .map(item => item.time.isSame(query, 'day') ? item : null)
    .filter(v => v != null) as T[]
}

const ReserveCalendar: React.FC<ReserveCalendarProps> = (props) => {
  // todo:
  //  支持 hover 后显示详细信息
  const items = useMemo(() => props.items
    .map(item => ({
      time: moment.unix(item.startTime),
      data: item
    })),
  [props.items]
  )
  useEffect(() => {
    console.log('items: ', items)
  }, [props.items])
  const dateCellRender = useCallback((value: moment.Moment) => {
    const queryItems = findItems(items, value)
    if (queryItems.length > 0) {
      console.log(queryItems)
    }
    return (
      <HoverCard
        type={HoverCardType.plain}
        plainCardProps={{
          onRenderPlainCard: () => queryItems.length > 0 ? (
            <Stack tokens={{ childrenGap: 10 }}>
              <Text variant='xLarge'>共{queryItems.length}场预约</Text>
              {
                queryItems.map(item => (
                  <DocumentCard key={item.data.id}>
                    <DocumentCardDetails>
                      <DocumentCardActivity
                        activity={item.time.format('h时m分')}
                        people={[
                          {
                            name: '暂无',
                            profileImageSrc: ''
                          }
                        ]} />
                    </DocumentCardDetails>
                  </DocumentCard>
                ))
              }
            </Stack>
          ) : null
        }}
      >
        <div>
          {queryItems.length > 0 ? (queryItems.map(item => (
            <div key={item.data.id}>
              {/* todo: 之后可以指定用户预约颜色 */}
              <Badge
                color={getRandomColor()}
                text={<Text variant={'small'}>{item.time.format('hh:mm') + '有预约'}</Text>}
              />
            </div>
          ))) : ''}
        </div>
      </HoverCard>
    )
  }, [items])
  return (
    <Calendar dateCellRender={dateCellRender}/>
  )
}

export default ReserveCalendar
