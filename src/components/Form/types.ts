import { ReactNode } from 'react'

export interface FormPropTypes {
  title: string
  styleButton: string
  buttonValue: string
  isLoading?: boolean
  children: ReactNode
  onSubmit: () => void
}
