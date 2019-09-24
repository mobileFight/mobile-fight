// @flow strict
import { type Node } from "react"

export function List<T>({
  data,
  renderRow,
  renderEmpty,
}: {
  data: Array<T>,
  renderRow: (item: T, index: number) => Node,
  renderEmpty?: () => Node,
}): null | Node | Array<Node> {
  if (data.length === 0 && renderEmpty) {
    return renderEmpty()
  }

  if (data.length > 0) {
    return data.map(renderRow)
  }

  return null
}
