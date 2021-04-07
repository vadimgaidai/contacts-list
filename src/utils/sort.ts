export function sortByFieldName<T>(name: string) {
  // @ts-ignore
  return (first: T, second: T): number => (first[name] > second[name] ? 1 : -1)
}
