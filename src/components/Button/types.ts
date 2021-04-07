import { ReactNode, MouseEvent } from 'react'

interface LinkPropTypes {
  href?: string
  to?: string
  target?: string
}

export interface ButtonPropTypes extends LinkPropTypes {
  children: ReactNode
  name: string
  className?: string
  styleButton?: string
  typeButton?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}
