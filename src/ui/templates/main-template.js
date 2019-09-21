// @flow strict

import React, { type Node } from "react"
import styled from "styled-components"
import type { StyledEmptyUI } from "../styled-with-flow"

const ArenaTemplateWrapper: StyledEmptyUI = styled.div`
  display: flex;
  max-width: ${(props) => props.theme.screenSize.width}px;
  width: 100%;
  height: ${(props) => props.theme.screenSize.height}px;
  box-shadow: 0px 0px 2px 0px ${(props) => props.theme.colors.primaryDark};
  flex-direction: column;
  position: relative;
`

const ContentWrapper: StyledEmptyUI = styled.div`
  flex: 1 1 auto;
`

const FooterWrapper: StyledEmptyUI = styled.div`
  flex: 0 0 auto;
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
      <ContentWrapper>{children}</ContentWrapper>
      {footer && <FooterWrapper>{footer}</FooterWrapper>}
    </ArenaTemplateWrapper>
  )
}
