import React, { useCallback } from 'react'
import { Calendar } from 'antd'
import * as moment from 'moment'
import HoverCard from './HoverCard'
import { Reserve } from '~type/Reserve'

interface ReserveCalendarProps {
  items: Reserve[]
}

// todo:
//  支持 hover 后显示详细信息
//  显示员工排班、和预约
const ReserveCalendar: React.FC<ReserveCalendarProps> = () => {
  const dateCellRender = useCallback((value: moment.Moment) => {
    return (
      <HoverCard>
        <div>
          暂无
        </div>
      </HoverCard>
    )
  }, [])
  return (
    <Calendar dateCellRender={dateCellRender}/>
  )
}

export default ReserveCalendar
