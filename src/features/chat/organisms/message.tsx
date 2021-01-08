import React from "react"
import styled from "styled-components"

const MessageWrapper = styled.div`
  color: ${(props) => props.theme.colors.third};
  font-size: 15px;
  display: block;
  line-height: 20px;

  > p {
    display: inline-block;
    margin: 0;
  }
`

const SendTime = styled.p`
  color: black;
  user-select: none;
`

const Sender = styled.p`
  color: black;
  text-decoration: underline;
  margin: 0 5px !important;
  font-weight: 300;
  cursor: pointer;
`

export function Message({
  date,
  name,
  lvl,
  text,
  className,
}: {
  date: string
  name: string
  lvl: number
  text: string
  className?: string
}) {
  return (
    <MessageWrapper className={className}>
      <SendTime>{date}</SendTime>
      <Sender>
        {name} [{lvl}]
      </Sender>
      {text}
    </MessageWrapper>
  )
}
