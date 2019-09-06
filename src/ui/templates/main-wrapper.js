// @flow strict

import React, { type Node, type ElementType, type ComponentType } from "react"
import styled from "styled-components"

const MainWrapper: ComponentType<*> = styled.div`
  display: flex;
  height: 100vh;
`

const LeftSideBar = styled.div`
  width: 350px;
  border-right: 1px solid #f3efeb;
`

const Header = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #f3efeb;
`

const ContentAndHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const RightSideBar = styled.div`
  flex: 0 0 auto;
  border-left: 1px solid #f3efeb;
  width: 320px;
`

const Content = styled.div`
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
`

export function MainTemplate({
  children,
  rightSideBar,
}: {
  children: Node,
  rightSideBar: ElementType,
}) {
  return (
    <MainWrapper>
      {children}
      {Boolean(rightSideBar) && <RightSideBar>{rightSideBar}</RightSideBar>}
    </MainWrapper>
  )
}

export function ArenaTemplate({
  children,
  leftSideBar,
  header,
}: {
  children: Node,
  leftSideBar: ElementType,
  header: ElementType,
}) {
  return (
    <>
      {Boolean(leftSideBar) && <LeftSideBar>{leftSideBar}</LeftSideBar>}
      <ContentAndHeaderWrapper>
        {Boolean(header) && <Header>{header}</Header>}
        <Content>{children}</Content>
      </ContentAndHeaderWrapper>
    </>
  )
}
