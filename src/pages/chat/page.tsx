import React, { useState, useRef } from "react"
import styled from "styled-components"
import { isHotkey } from "is-hotkey"
import { ArenaTemplate } from "@mobileFight/ui/templates"
import { Message } from "@features/chat"
import { List } from "@features/common"
import { Button, Input, Footer, Timer } from "@mobileFight/ui/atoms"
import { useMemoryNavigator } from "@lib/histories"

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

type Message = {
  id: number
  date: string
  name: string
  lvl: number
  text: string
}

export function ChatPage() {
  const idRef = useRef(1)
  const [messageValue, setMessageValue] = useState("")
  const [messagesStub, setMessages] = useState<Array<Message>>([])
  const navigator = useMemoryNavigator()

  function toBackLocation() {
    navigator.toRootPage()
  }

  function changeMessage(event: React.ChangeEvent<HTMLInputElement>) {
    setMessageValue(event.target.value)
  }

  function sendMessage() {
    if (messageValue.trim().length > 0) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: idRef.current++,
          date: Date.now().toString(),
          name: "user1 (test)",
          lvl: 20,
          text: messageValue,
        },
      ])

      setMessageValue("")
    }
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
        <Input
          placeholder="Type here..."
          value={messageValue}
          onChange={changeMessage}
          onKeyDown={(event) => {
            // @ts-ignore
            if (isHotkey("Enter", event)) {
              sendMessage()
            }
          }}
        />
        <SendButton primary onClick={sendMessage}>
          send
        </SendButton>
        <Messages>
          <List
            data={messagesStub}
            extracKey={(it) => it.id.toString()}
            renderRow={(message) => (
              <MessageWrapper
                date={message.date}
                name={message.name}
                lvl={message.lvl}
                text={message.text}
              />
            )}
          />
        </Messages>
      </ChatWrapper>
    </ArenaTemplate>
  )
}
