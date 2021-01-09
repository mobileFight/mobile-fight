import React from "react"
import styled from "styled-components"
import frame from "@assets/frame.png"
import locationTitle from "@assets/location-title.png"

const PreviewWrapper = styled.div<{ locationImage: string }>`
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

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`

const LocationName = styled.div`
  width: 240px;
  height: 58px;
  background-image: url(${locationTitle});
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: 500;
`

export function LocationPreview({
  locationImage,
  locationName,
}: {
  locationImage: string
  locationName?: string
}) {
  return (
    <PreviewWrapper locationImage={locationImage}>
      <img src={frame} alt="frame" draggable={false} />
      <Footer>
        {locationName && <LocationName>{locationName}</LocationName>}
      </Footer>
    </PreviewWrapper>
  )
}
