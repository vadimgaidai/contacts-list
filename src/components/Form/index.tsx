import { FC, SyntheticEvent } from 'react'
import { Loader } from 'react-feather'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { FormPropTypes } from './types'

import Button from '../Button'

import style from './form.module.scss'

const Form: FC<FormPropTypes> = ({
  title,
  children,
  styleButton,
  buttonValue,
  isLoading = false,
  onSubmit,
}: FormPropTypes) => {
  const onSubmitForm = (event: SyntheticEvent) => {
    event.preventDefault()
    onSubmit()
  }
  return (
    <form className={style.form} onSubmit={onSubmitForm}>
      <h2 className={style.title}>{title}</h2>
      {children}
      <Button
        name="button"
        styleButton={styleButton}
        typeButton="submit"
        disabled={isLoading}
      >
        <SwitchTransition>
          <CSSTransition
            key={isLoading ? 'icon' : 'text'}
            classNames="fade"
            timeout={300}
          >
            <span>
              {isLoading ? <Loader className={style.loader} /> : buttonValue}
            </span>
          </CSSTransition>
        </SwitchTransition>
      </Button>
    </form>
  )
}

export default Form
