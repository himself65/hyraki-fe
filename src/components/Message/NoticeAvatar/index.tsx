import React from 'react'
import { Stack, HoverCard, HoverCardType, Persona, PersonaPresence, PersonaSize, Text, List } from 'office-ui-fabric-react'
import { useFetch } from '~util/hooks'
import { getMessages, getMessagesCount, getUserInfo } from '~api/user'
import { Message } from '~type/User'

type MessageListProps = {
  api: {
    getMessages: typeof getMessages
  }
}

const MessageList: React.FC<MessageListProps> = ({ api: { getMessages } }) => {
  const [messages] = useFetch<Message[]>(getMessages, [], {
    defaultParams: [0]
  })
  return (
    <List items={messages} onRenderCell={(item?: Message) => {
      return (
        <div data-is-focusable={true}>
          {/* todo: 优化UI */}
          <Text variant='small'>{item?.id} {item?.message}</Text>
        </div>
      )
    }}>

    </List>
  )
}

type NoticeAvatarProps = {
  api: {
    getMessageCount: typeof getMessagesCount
    getUserInfo?: typeof getUserInfo
  }
}

const NoticeAvatar: React.FC<NoticeAvatarProps> = ({ api: { getMessageCount } }) => {
  const [{ count }] = useFetch(getMessageCount, { count: 0 })
  return (
    <HoverCard
      plainCardProps={{
        onRenderPlainCard: () => {
          return (
            <Stack
              tokens={{
                padding: '0.7rem 0.5rem'
              }}
            >
              <Stack.Item>
                <Text variant='medium'>
                  共有 {count} 条消息
                </Text>
              </Stack.Item>
              <Stack.Item>
                <MessageList api={{
                  getMessages
                }}/>
              </Stack.Item>
            </Stack>
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
