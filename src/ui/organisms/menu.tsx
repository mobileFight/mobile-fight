import styled from "styled-components"

export const MenuItem = styled.li`
  width: 100%;
  padding: 15px;
  text-align: center;
  color: white;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`

export const MenuWrapper = styled.ul`
  background-color: ${(props) => props.theme.colors.primaryDark};
  min-width: 100px;
  border: 1px solid black;
  list-style: none;
  padding: 0;
  user-select: none;

  > ${MenuItem}:not(:last-child) {
    border-bottom: 1px solid black;
  }
`
