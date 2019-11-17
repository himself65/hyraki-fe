import React from 'react'
import { Client } from '~type/Client'
import { Fabric, HoverCard } from 'office-ui-fabric-react'
import PropTypes from 'prop-types'

interface ClientCardHoverProps {
  item: Client
}

const ClientCardHover: React.FC<ClientCardHoverProps> = ({ item }) => {
  return (
    <HoverCard expandingCardProps={{
      onRenderCompactCard: (item: Client) => {
        return (<Fabric>todo 2</Fabric>)
      },
      onRenderExpandedCard: (item: Client) => {
        return (<Fabric>todo 3</Fabric>)
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
