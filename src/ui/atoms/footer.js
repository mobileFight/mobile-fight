// @flow strict

import React, { type Node } from "react"
import styled from "styled-components"
import { Col, Row } from "../templates/container"
import type { StyledEmptyUI } from "../styled-with-flow"

export const FooterWrapper: StyledEmptyUI = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: white;
  font-weight: 300;
  user-select: none;
`

export const Cell: StyledEmptyUI = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.primaryDark};
`

export function Footer({
  left,
  center,
  right,
}: {
  left?: Node,
  center?: Node,
  right?: Node,
}) {
  return (
    <FooterWrapper>
      <Row justify="space-between" grow={1} shrink={1}>
        <Col justify="center" grow={1} shrink={1} align="flex-start">
          {left}
        </Col>
        <Col justify="center" grow={1} shrink={1} align="center">
          {center}
        </Col>
        <Col justify="center" grow={1} shrink={1} align="flex-end">
          {right}
        </Col>
      </Row>
    </FooterWrapper>
  )
}
