import { FC, ReactNode, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'react-feather'
import { CSSTransition } from 'react-transition-group'

import style from './modal.module.scss'

interface ModalWrapperType {
  visible: boolean
  children: ReactNode
  onVisible: (data: boolean) => void
}

const modalRoot: HTMLElement | null = document.getElementById('modal-root')

const ModalWrapper: FC<ModalWrapperType> = ({
  visible,
  children,
  onVisible,
}: ModalWrapperType) => {
  const onClose = useCallback(() => onVisible(false), [onVisible])

  const onKeyDown = useCallback(
    ({ code }) => {
      if (code === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (visible) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown, visible])

  return (
    modalRoot &&
    createPortal(
      <CSSTransition
        in={visible}
        classNames="transform-bottom"
        timeout={300}
        unmountOnExit
      >
        <section className={style.modal}>
          <button className={style.close} type="button">
            <X className={style.icon} size={32} onClick={() => onClose()} />
          </button>
          {children}
        </section>
      </CSSTransition>,
      modalRoot
    )
  )
}

export default ModalWrapper
