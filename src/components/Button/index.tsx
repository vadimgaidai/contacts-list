/* eslint-disable react/button-has-type */
import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { ButtonPropTypes, ComponentsObject } from './types'

import style from './button.module.scss'

const components: ComponentsObject = {
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
  target,
  disabled,
  className,
  children,
  onClick,
}: ButtonPropTypes) => {
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
