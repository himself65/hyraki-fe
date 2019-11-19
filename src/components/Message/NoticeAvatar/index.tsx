import React from 'react'
import { Fabric, HoverCard, HoverCardType, Text } from 'office-ui-fabric-react'
import { Avatar, Badge } from 'antd'
import { useFetch } from '~util/hooks'
import { getMessagesCount } from '~api/user'
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
      cardDismissDelay={2000}
      cardOpenDelay={0}
      type={HoverCardType.plain}
    >
      <Badge count={count}>
        <Avatar size={64}/>
      </Badge>
    </HoverCard>
  )
}

export default NoticeAvatar
