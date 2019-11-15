import React from 'react'
import { Client } from '~type/Client'
import { HoverCard } from 'office-ui-fabric-react'
import PropTypes from 'prop-types'

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
      <a>有 {item.cards.length } 张卡 </a>
    </HoverCard>
  )
}

ClientCardHover.propTypes = {
  item: PropTypes.any
}

export default ClientCardHover
