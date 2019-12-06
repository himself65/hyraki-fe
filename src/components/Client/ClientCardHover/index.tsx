import React from 'react'
import { Client } from '~type/Client'
import { Fabric, HoverCard, Text, Stack, mergeStyleSets } from 'office-ui-fabric-react'
import { store } from '~store'
import { observer } from 'mobx-react'

const classNames = mergeStyleSets({
  compactCard: {
    backgroundColor: '#252525',
    color: '#fff',
    height: '100%'
  }
})

interface ClientCardHoverProps {
  item: Client
}

const ClientCardHover: React.FC<ClientCardHoverProps> = observer(({ item }) => {
  return (
    <HoverCard expandingCardProps={{
      onRenderCompactCard: (item: Client) => {
        return (
          <Stack padding='0.5rem 0.7rem' className={classNames.compactCard}>
            <Stack.Item>
              <Text variant='xLargePlus'>
                {store.currentBrandName} {item.name}的会员卡
              </Text>
            </Stack.Item>
            {/* todo: unfinished this part */}
            <Stack.Item>
              <Text variant='xxLarge'/>
            </Stack.Item>
          </Stack>
        )
      },
      onRenderExpandedCard: (item: Client) => {
        return (<Fabric>todo 3</Fabric>)
      },
      renderData: item
    }} instantOpenOnClick={true}>
      <a>有 {item.cards.length} 张卡 </a>
    </HoverCard>
  )
})

export default ClientCardHover
