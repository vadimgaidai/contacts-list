/* eslint-disable react/button-has-type */
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { ButtonPropTypes } from './types'

import style from './button.module.scss'

const components = {
  nav: NavLink,
  link: 'a',
  button: 'button',
}

const Button: FC<ButtonPropTypes> = ({
  styleButton = 'default',
  typeButton = 'button',
  name = 'button',
  href,
  to,
  target = '_self',
  disabled,
  className,
  children,
  onClick,
}: ButtonPropTypes) => {
  // @ts-ignore
  const TagName = components[name]
  return (
    <TagName
      className={[
        style.button,
        style[styleButton],
        disabled && style.disabled,
        className,
      ].join(' ')}
      href={href}
      target={target}
      to={to}
      disabled={disabled}
      type={typeButton}
      onClick={onClick}
    >
      {children}
    </TagName>
  )
}

export default Button
