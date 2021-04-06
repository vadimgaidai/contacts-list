import { ReactNode, MouseEvent } from 'react'

export interface ButtonPropTypes {
  children: ReactNode
  href?: string
  target?: string
  styleButton?: string
  typeButton?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}
