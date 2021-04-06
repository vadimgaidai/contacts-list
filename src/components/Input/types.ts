import { ChangeEvent } from 'react'

export interface InputPropTypes {
  value: string
  placeholder: string
  onInput: (event: ChangeEvent<HTMLInputElement>) => void
  name?: string
}
