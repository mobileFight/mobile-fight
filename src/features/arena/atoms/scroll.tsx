import React from "react"
import styled, { css } from "styled-components"
import scrollBody from "@assets/scroll-patterns/main/body.png"
import scrollTailLeft from "@assets/scroll-patterns/main/tail.png"
import { ifProp } from "@lib/styled-component-layout"

const ScrollHead = styled.div`
  background-image: url(${scrollBody});
  background-size: 1px;
  height: 17px;
  width: 100%;
  background-repeat-x: repeat;
`

const ScrollTail = styled.div<{ right?: boolean }>`
  background-image: url(${scrollTailLeft});
  height: 17px;
  width: 16px;

  ${ifProp(
    "right",
    css`
      transform: scale(-1, 1);
    `,
  )}
`

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  width: 100%;
`

const PlaneWrapper = styled.div<{ down?: boolean }>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;

  ${ifProp(
    "down",
    css`
      transform: scale(1, -1);
    `,
  )}
`

const Body = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primaryLight};
  width: calc(100% - 28px);
  align-self: center;
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  border-top-width: 0;
  border-bottom-width: 0;
  flex-direction: column;
`

function Plane({ down = false }: { down?: boolean }) {
  return (
    <PlaneWrapper down={down}>
      <ScrollTail />
      <ScrollHead />
      <ScrollTail right />
    </PlaneWrapper>
  )
}

export function SimpleScroll({ children }: { children?: React.ReactNode }) {
  return (
    <ScrollWrapper>
      <Plane />
      <Body>{children}</Body>
      <Plane down />
    </ScrollWrapper>
  )
}
