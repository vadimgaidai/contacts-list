import { ChangeEvent } from 'react'

export interface InputPropTypes {
  value: string
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  name?: string
  type?: string
  id?: string
  errorValue?: string
}
