import styled, { css } from "styled-components"
import { mixins, MixinProps } from "../../lib/styled-component-layout"

export const Container = styled.div`
  ${mixins};

  width: 100%;
  display: inherit;
  flex: inherit;
  flex-flow: inherit;
  flex-direction: inherit;
`

export const Row = styled.div<MixinProps & { gap?: string }>`
  display: flex;
  flex-direction: row;

  ${(p) =>
    p.gap &&
    css`
      & > :not(:first-child) {
        margin-left: ${p.gap};
      }
    `};

  ${mixins}
`

export const Col = styled.div<MixinProps & { gap?: string }>`
  display: flex;
  flex-direction: column;

  ${(p) =>
    p.gap &&
    css`
      & > :not(:first-child) {
        margin-left: ${p.gap};
      }
    `};

  ${mixins};
`
