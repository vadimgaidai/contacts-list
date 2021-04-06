import { ReactNode, SyntheticEvent } from 'react'

export interface FormPropTypes {
  title: string
  styleButton: string
  buttonValue: string
  isLoading?: boolean
  children: ReactNode
  onSubmit: (event: SyntheticEvent) => void
}
