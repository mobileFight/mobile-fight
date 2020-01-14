// @flow strict

import React, {
  type Node,
  createContext,
  useEffect,
  useState,
  createRef,
  useContext,
  useCallback,
} from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import type { StyledEmptyUI } from "../styled-with-flow"

export const ModalUI: StyledEmptyUI = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000045;
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContext = createContext<?HTMLElement>()

export function ModalRootProvider({ children }: { children: Node }) {
  const elementRef = createRef()
  const [element, setElement] = useState()

  useEffect(() => {
    setElement(elementRef.current)
  }, [elementRef])

  return (
    <ModalContext.Provider value={element}>
      <>
        <div ref={elementRef} />
        {children}
      </>
    </ModalContext.Provider>
  )
}

export function Modal({
  children,
  onOverlayClick,
}: {
  children?: Node,
  onOverlayClick?: () => void,
}) {
  const rootElement = useContext(ModalContext)

  const handleClick = useCallback(() => {
    if (onOverlayClick) {
      onOverlayClick()
    }
  }, [onOverlayClick])

  if (rootElement) {
    return ReactDOM.createPortal(
      <ModalUI onClick={handleClick}>{children}</ModalUI>,
      rootElement,
    )
  }

  return null
}
