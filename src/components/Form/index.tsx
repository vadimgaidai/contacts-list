import { FC, SyntheticEvent } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { FormPropTypes } from './types'

import Button from '../Button'
import { ReactComponent as ThreeDots } from '../../assets/icons/three-dots.svg'

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
    onSubmit(event)
  }
  return (
    <form className={style.form} onSubmit={onSubmitForm}>
      <h2 className={style.title}>{title}</h2>
      {children}
      <Button
        styleButton={styleButton}
        typeButton="submit"
        disabled={isLoading}
      >
        <SwitchTransition>
          {/* @ts-ignore */}
          <CSSTransition key={isLoading} classNames="fade" timeout={300}>
            <span>{isLoading ? <ThreeDots /> : buttonValue}</span>
          </CSSTransition>
        </SwitchTransition>
      </Button>
    </form>
  )
}

export default Form
