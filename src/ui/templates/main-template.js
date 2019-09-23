// @flow strict

import React, { type Node } from "react"
import styled from "styled-components"
import type { StyledEmptyUI } from "../styled-with-flow"

const ArenaTemplateWrapper: StyledEmptyUI = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  position: relative;
`

const ArenaTemplateInner: StyledEmptyUI = styled.div`
  max-width: ${(props) => props.theme.screenSize.width}px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ContentWrapper: StyledEmptyUI = styled.div`
  display: flex;
  height: 100%;
  overflow: scroll;
  justify-content: center;
`

const FooterWrapper: StyledEmptyUI = styled.div`
  flex: 0 0 auto;
  max-width: ${(props) => props.theme.screenSize.width}px;
  width: 100vw;
  align-self: center;
`

export function ArenaTemplate({
  children,
  footer,
}: {
  children: Node,
  footer: Node,
}) {
  return (
    <ArenaTemplateWrapper>
      <ContentWrapper>
        <ArenaTemplateInner>{children}</ArenaTemplateInner>
      </ContentWrapper>
      {footer && <FooterWrapper>{footer}</FooterWrapper>}
    </ArenaTemplateWrapper>
  )
}
