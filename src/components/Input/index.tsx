import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { InputPropTypes } from './types'

import style from './input.module.scss'

const Input: FC<InputPropTypes> = ({
  type = 'text',
  name,
  value,
  id,
  errorValue,
  placeholder,
  onChange,
}: InputPropTypes) => (
  <label className={style.label}>
    <input
      className={[style.input, !!errorValue && style.error].join(' ')}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <CSSTransition in={!!errorValue} classNames="fade" timeout={300}>
      <span className={style.errorValue}>{errorValue}</span>
    </CSSTransition>
  </label>
)

export default Input
