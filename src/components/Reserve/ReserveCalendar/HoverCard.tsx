import React, { PropsWithChildren } from 'react'
import { Popover } from 'antd'
import { PopoverProps } from 'antd/lib/popover'

const HoverCard: React.FC<PropsWithChildren<PopoverProps>> = (props) => {
  return (
    <Popover>
      {props?.children || null}
    </Popover>
  )
}

export default HoverCard
