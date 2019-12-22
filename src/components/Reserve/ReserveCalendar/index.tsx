import React, { useCallback, useEffect, useMemo } from 'react'
import { Badge, Calendar } from 'antd'
import {
  HoverCard, HoverCardType, Text, Stack, Separator,
  DocumentCard, DocumentCardDetails, DocumentCardActivity
} from 'office-ui-fabric-react'
import { Moment, unix } from 'moment'
import { Reserve } from '~type/Reserve'
import { getRandomColor } from '~util/helpers'
import { Logger } from '~util/debug'

import './index.less'

interface ReserveCalendarProps {
  items: Reserve[]
}

export function findItems<T extends { time: Moment }> (items: T[], query: Moment): T[] {
  // fixme: 性能优化
  return items
    .filter(item => item.time.isSame(query, 'day'))
}

interface DefaultDateCell {
  date: Moment
}

const DefaultDateCell: React.FC<DefaultDateCell> = ({ date }) => {
  const dayOfMonth = useMemo(() => date.format('D'), [date])
  return (
    <div className='hyraki-fe-reserve-calendar-cell'>
      <Separator alignContent='end'>
        {dayOfMonth}
      </Separator>
      <Stack className='content'>
        <Stack.Item>`
        </Stack.Item>
      </Stack>
    </div>
  )
}

interface MessageDateCell extends DefaultDateCell {
  items: {
    time: Moment
    data: Reserve
  }[]
}

const MessageDateCell: React.FC<MessageDateCell> = ({ date, items }) => {
  const dayOfMonth = useMemo(() => date.format('D'), [date])
  return (
    <HoverCard
      type={HoverCardType.plain}
      plainCardProps={{
        onRenderPlainCard: () => items.length > 0 ? (
          <Stack tokens={{ childrenGap: 10 }}>
            <Text variant='xLarge'>共{items.length}场预约</Text>
            {
              items.map(item => (
                <DocumentCard key={item.data.id}>
                  <DocumentCardDetails>
                    <DocumentCardActivity
                      activity={item.time.format('h时m分')}
                      people={[
                        {
                          name: '暂无',
                          profileImageSrc: ''
                        }
                      ]}/>
                  </DocumentCardDetails>
                </DocumentCard>
              ))
            }
          </Stack>
        ) : null
      }}
    >
      <div className='hyraki-fe-reserve-calendar-cell'>
        <Separator alignContent='end'>
          {dayOfMonth}
        </Separator>
        <Stack className='content'>
          <Stack.Item>
            {items.length > 0 ? (items.map(item => (
              <div key={item.data.id}>
                {/* todo: 之后可以指定用户预约颜色 */}
                <Badge
                  color={getRandomColor()}
                  text={<Text variant={'small'}>{item.time.format('hh:mm') + '有预约'}</Text>}
                />
              </div>
            ))) : ''}
          </Stack.Item>
        </Stack>
      </div>
    </HoverCard>
  )
}

const ReserveCalendar: React.FC<ReserveCalendarProps> = (props) => {
  // todo:
  //  支持 hover 后显示详细信息
  const items = useMemo(() => props.items
    .map(item => ({
      time: unix(item.startTime),
      data: item
    })), [props.items])
  useEffect(() => {
    console.log('items: ', items)
  }, [props.items])
  const dateCellRender = useCallback((value: Moment) => {
    const queryItems = findItems(items, value)
    if (queryItems.length > 0) {
      Logger(`${value.format('YYYY-M-D')} find queryItems:`, queryItems)
      return <MessageDateCell items={queryItems} date={value}/>
    } else {
      return <DefaultDateCell date={value}/>
    }
  }, [items])
  return (
    <Calendar dateFullCellRender={dateCellRender}/>
  )
}

export default ReserveCalendar
