import styled from "styled-components"

export const Input = styled.input.attrs({
  type: "text",
})`
  outline: none;
  background-color: ${(props) => props.theme.colors.primaryLight};
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  flex: 0 1 auto;
  padding: 5px 15px;
`
