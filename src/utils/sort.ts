/* eslint-disable @typescript-eslint/no-explicit-any */
export function sortByField<T extends { [key: string]: any }>(name: string) {
  return (first: T, second: T): number => (first[name] > second[name] ? 1 : -1)
}
