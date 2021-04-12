import { InputHTMLAttributes } from 'react'

export interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  errorValue?: string
}
