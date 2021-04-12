/* eslint-disable @typescript-eslint/no-explicit-any */
interface ObjectsCSV<T> {
  data: T[]
  columnDelimiter?: string
  lineDelimiter?: string
}

export function convertArrayOfObjectsToCSV<T extends { [key: string]: any }>({
  data,
  columnDelimiter = ',',
  lineDelimiter = '\n',
}: ObjectsCSV<T>): string | null {
  let result = ''

  if (data === null || !data.length) {
    return null
  }

  const keys = Object.keys(data[0])
  result += keys.join(columnDelimiter)
  result += lineDelimiter

  data.forEach((item) => {
    let ctr = 0
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter
      result += item[key]
      ctr++
    })
    result += lineDelimiter
  })
  return result
}
