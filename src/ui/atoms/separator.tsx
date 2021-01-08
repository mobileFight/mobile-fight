import styled from "styled-components"

export const Separator = styled.hr<{ w: string }>`
  border: none;
  background-color: #a7936d;
  height: 5px;
  width: ${(props) => props.w};
`
