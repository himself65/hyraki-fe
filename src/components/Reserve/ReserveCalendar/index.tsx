import React, { useCallback, useEffect, useMemo } from 'react'
import { Calendar } from 'antd'
import * as moment from 'moment'
import HoverCard from './HoverCard'
import { Reserve } from '~type/Reserve'

interface ReserveCalendarProps {
  items: Reserve[]
}

export const findItems = (items: { time: moment.Moment }[], query: moment.Moment) =>
  // fixme: 性能优化
  items
    .map(item => item.time.isSame(query, 'day') ? item : null)
    .filter(v => v != null)

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
      <HoverCard>
        <div>
          暂无
        </div>
      </HoverCard>
    )
  }, [items])
  return (
    <Calendar dateCellRender={dateCellRender}/>
  )
}

export default ReserveCalendar
