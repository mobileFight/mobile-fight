import React, { useContext } from "react"
import Loader from "react-loader-spinner"
import styled, { ThemeContext } from "styled-components"
import logo from "@assets/logo.jpg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export function Splash() {
  const t = useContext(ThemeContext)

  return (
    <Wrapper>
      <img src={logo} alt="splash" />
      <Loader
        type="ThreeDots"
        color={t.colors.primaryDark}
        height={100}
        width={100}
      />
    </Wrapper>
  )
}
