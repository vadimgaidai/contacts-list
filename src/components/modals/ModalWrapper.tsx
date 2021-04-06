import { FC, ReactNode, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'react-feather'
import { CSSTransition } from 'react-transition-group'

import { hidePageScrollbar, showPageScrollbar } from '../../utils/scrollbar'

import style from './modal.module.scss'

interface ModalWrapperType {
  visible: boolean
  children: ReactNode
  onVisible: (data: boolean) => void
}

const ModalWrapper: FC<ModalWrapperType> = ({
  visible,
  children,
  onVisible,
}: ModalWrapperType) => {
  const onClose = useCallback(() => onVisible(false), [])

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
      hidePageScrollbar()
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      showPageScrollbar()
    }
  }, [onKeyDown, visible])

  return createPortal(
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
    // @ts-ignore
    document.getElementById('modal-root')
  )
}

export default ModalWrapper
