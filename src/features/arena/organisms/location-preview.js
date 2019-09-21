// @flow strict

import React from "react"
import styled from "styled-components"
import frame from "@assets/frame.png"
import type { StyledUI } from "@mobileFight/ui/styled-with-flow"

const PreviewWrapper: StyledUI<{ locationImage: string }> = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 38px 49px;
  background-size: 438px;
  background-image: url(${(props) => props.locationImage});

  > img {
    max-width: 100%;
  }

  > * {
    user-select: none;
  }
`

export function LocationPreview({ locationImage }: { locationImage: string }) {
  return (
    <PreviewWrapper locationImage={locationImage}>
      <img src={frame} alt="frame" draggable={false} />
    </PreviewWrapper>
  )
}
