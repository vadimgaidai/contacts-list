/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, MouseEvent } from 'react'
import { NavLinkProps } from 'react-router-dom'

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

interface IObjectKeys {
  [key: string]: any
}
export interface ComponentsObject extends IObjectKeys {
  nav: <S = unknown>(
    props: NavLinkProps<S> & React.RefAttributes<HTMLAnchorElement>
  ) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null
  link: string
  button: string
}
