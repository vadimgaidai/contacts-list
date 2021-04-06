import { ReactNode, MouseEvent } from 'react'

export interface ButtonPropTypes {
  children: ReactNode
  className?: string
  href?: string
  target?: string
  styleButton?: string
  typeButton?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}
