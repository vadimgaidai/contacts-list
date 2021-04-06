import { FC } from 'react'
import { InputPropTypes } from './types'

import style from './input.module.scss'

const Input: FC<InputPropTypes> = ({
  value,
  placeholder,
  onInput,
}: InputPropTypes) => (
  <input
    className={style.input}
    placeholder={placeholder}
    value={value}
    onInput={onInput}
  />
)

export default Input
