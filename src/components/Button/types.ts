/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonHTMLAttributes } from 'react'
import { NavLinkProps } from 'react-router-dom'

interface LinkPropTypes {
  href?: string
  to?: string
  target?: string
}

export interface ButtonPropTypes
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    LinkPropTypes {
  styleButton?: string
  typeButton?: 'submit' | 'reset' | 'button'
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
