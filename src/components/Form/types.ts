import { FormHTMLAttributes } from 'react'

export interface FormPropTypes extends FormHTMLAttributes<HTMLFormElement> {
  title: string
  styleButton: string
  buttonValue: string
  onSubmit: () => void
  isLoading?: boolean
}
