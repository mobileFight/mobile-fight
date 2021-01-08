export function List<T>({
  data,
  renderRow,
  renderEmpty,
}: {
  data: Array<T>
  renderRow: (item: T, index: number) => React.ReactNode
  renderEmpty?: () => React.ReactNode
}): null | React.ReactNode {
  if (data.length === 0 && renderEmpty) {
    return renderEmpty()
  }

  if (data.length > 0) {
    return data.map(renderRow)
  }

  return null
}
