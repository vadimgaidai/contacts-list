/* eslint-disable react/button-has-type */
import { FC } from 'react'
import style from './button.module.scss'
import { ButtonPropTypes } from './types'

const Button: FC<ButtonPropTypes> = ({
  styleButton = 'default',
  typeButton = 'button',
  href,
  target = '_self',
  disabled,
  children,
  onClick,
}: ButtonPropTypes) =>
  href ? (
    <a
      href={href}
      target={target}
      className={[
        style.button,
        style[styleButton],
        disabled && style.disabled,
      ].join(' ')}
    >
      {children}
    </a>
  ) : (
    <button
      className={[
        style.button,
        style[styleButton],
        disabled && style.disabled,
      ].join(' ')}
      disabled={disabled}
      type={typeButton}
      onClick={onClick}
    >
      {children}
    </button>
  )

export default Button
