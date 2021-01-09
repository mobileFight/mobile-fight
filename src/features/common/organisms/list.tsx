import React from "react"

export function List<T>({
  data,
  renderRow,
  renderEmpty,
  extracKey,
}: {
  data: Array<T>
  renderRow: (item: T, index: number) => JSX.Element
  renderEmpty?: () => JSX.Element
  extracKey: (arg0: T) => string
}): JSX.Element | null {
  if (data.length === 0 && renderEmpty) {
    return renderEmpty()
  }

  if (data.length > 0) {
    return (
      <>
        {data.map((it, index) => (
          <React.Fragment key={extracKey(it)}>
            {renderRow(it, index)}
          </React.Fragment>
        ))}
      </>
    )
  }

  return null
}
