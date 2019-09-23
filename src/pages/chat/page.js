// @flow strict

import React from "react"
import styled from "styled-components"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { Message } from "@features/chat"
import { Button, Input, Footer, Timer } from "@mobileFight/ui/atoms"
import { useRouterHistories } from "@lib/histories"

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  flex: 1 1 auto;
`

const SendButton = styled(Button)`
  align-self: center;
  margin-top: 5px;
  max-width: 100%;
`

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 20px;
`

const MessageWrapper = styled(Message)`
  margin-bottom: 7px !important;
`

const messagesList = []

export function ChatPage() {
  const { memory } = useRouterHistories()

  function toBackLocation() {
    memory.goBack()
  }

  return (
    <ArenaTemplate
      footer={
        <Footer
          center={<Timer />}
          right={
            <Button minimal onClick={toBackLocation}>
              Назад
            </Button>
          }
        />
      }
    >
      <ChatWrapper>
        <Input placeholder="Type here..." />
        <SendButton primary>send</SendButton>
        <Messages>
          {messagesList.map((message) => (
            <MessageWrapper
              date={message.date}
              name={message.name}
              lvl={message.lvl}
              text={message.text}
            />
          ))}
        </Messages>
      </ChatWrapper>
    </ArenaTemplate>
  )
}
