import React from 'react'
import { Fabric, HoverCard, HoverCardType, Persona, PersonaPresence, PersonaSize, Text } from 'office-ui-fabric-react'
import { useFetch } from '~util/hooks'
import { getMessagesCount, getUserInfo } from '~api/user'
import { TODO } from '~type/index'

type MessageListProps = {
  api: {
    getMessageList: TODO
  }
}

const MessageList: React.FC<MessageListProps> = ({ api }) => {
  return (
    <div>

    </div>
  )
}

type NoticeAvatarProps = {
  api: {
    getMessageCount: typeof getMessagesCount
    getUserInfo: typeof getUserInfo
  }
}

const NoticeAvatar: React.FC<NoticeAvatarProps> = ({ api: { getMessageCount } }) => {
  const [{ count }] = useFetch(getMessageCount, { count: 0 })
  return (
    <HoverCard
      plainCardProps={{
        onRenderPlainCard: () => {
          return (
            <Fabric>
              <Text variant='large'>
                共有 {count} 个消息
              </Text>
            </Fabric>
          )
        }
      }}
      instantOpenOnClick={true}
      cardDismissDelay={500}
      cardOpenDelay={0}
      type={HoverCardType.plain}
    >
      <Persona
        imageUrl=''
        text='himself65'
        presence={PersonaPresence.online}
        size={PersonaSize.size32}
      />
    </HoverCard>
  )
}

export default NoticeAvatar
