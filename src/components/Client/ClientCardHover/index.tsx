import React from 'react'
import { Client } from '~type/Client'
import { HoverCard } from 'office-ui-fabric-react'

interface ClientCardHoverProps {
  item: Client
}

const ClientCardHover: React.FC<ClientCardHoverProps> = ({ item }) => {
  return (
    <HoverCard expandingCardProps={{
      onRenderCompactCard: (item: Client) => {
        // 紧凑
        // todo
        return (<div>todo 2</div>)
      },
      onRenderExpandedCard: (item: Client) => {
        // 展开
        // todo
        return (<div>todo 3</div>)
      },
      renderData: item
    }} instantOpenOnClick={true}>
      <div>todo 1</div>
    </HoverCard>
  )
}

export default ClientCardHover
