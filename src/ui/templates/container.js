import styled, { css } from "styled-components"
import { mixins, ifProp } from "../../lib/styled-component-layout"

export const Container = styled.div`
  ${mixins};

  width: 100%;
  display: inherit;
  flex: inherit;
  flex-flow: inherit;
  flex-direction: inherit;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  ${mixins}
  ${(p) =>
    ifProp(
      p.gap,
      css`
        & > :not(:first-child) {
          margin-left: ${p.gap};
        }
      `,
    )}
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  ${mixins}
  ${(p) =>
    ifProp(
      p.gap,
      css`
        & > :not(:first-child) {
          margin-top: ${p.gap};
        }
      `,
    )}
`
