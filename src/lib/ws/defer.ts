export type DeferredType<Done> = {
  req: Promise<Done>
  resolve: (arg0: Done) => void
  reject: (arg0: Error) => void
}

export function defer<Done>(): DeferredType<Done> {
  const result = {}

  // @ts-ignore
  result.req = new Promise((resolve, reject) => {
    // @ts-ignore
    result.resolve = resolve
    // @ts-ignore
    result.reject = reject
  })

  // @ts-ignore
  return result
}
