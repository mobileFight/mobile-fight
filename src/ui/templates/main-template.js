// @flow strict

import React, { type Node, type ElementType } from "react"
import styled, { css } from "styled-components"
import type { StyledEmptyUI, StyledUI } from "../styled-with-flow"
import { Container } from "./container"

const ArenaTemplateWrapper: StyledEmptyUI = styled.div`
  display: flex;
  width: ${(props) => props.theme.screenSize.width}px;
  height: ${(props) => props.theme.screenSize.height}px;
  box-shadow: 0px 0px 2px 0px ${(props) => props.theme.colors.primaryDark};
  flex-direction: column;
`

const ContentWrapper: StyledEmptyUI = styled.div`
  flex: 1 1 auto;
`

const FooterWrapper: StyledEmptyUI = styled.div`
  flex: 0 0 auto;
`

export function ArenaTemplate({
  children,
  leftSideBar,
  header,
  footer,
}: {
  children: Node,
  leftSideBar: ElementType,
  header: ElementType,
  footer: ElementType,
}) {
  return (
    <ArenaTemplateWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      {footer && <FooterWrapper>{footer}</FooterWrapper>}
    </ArenaTemplateWrapper>
  )
}
