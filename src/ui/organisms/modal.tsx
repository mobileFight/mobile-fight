import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
  useRef,
} from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

export const ModalUI = styled.div`
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

export const ModalContext = createContext<HTMLDivElement | null>(null)

export function ModalRootProvider({ children }: { children: React.ReactNode }) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [element, setElement] = useState<HTMLDivElement | null>(null)

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
  children?: React.ReactNode
  onOverlayClick?: () => void
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
