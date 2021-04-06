import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import {
  selectContacts,
  selectIsContacts,
} from '../../redux/contacts/selectors'

import Button from '../../components/Button'
import Contact from '../../components/Contact'
import CreateContactModal from '../../components/modals/list/CreateContactModal'

import style from './main.module.scss'

const Main: FC = () => {
  const [isOpenContactModal, setIsOpenContactModal] = useState<boolean>(false)
  const contacts = useSelector(selectContacts)
  const isContacts = useSelector(selectIsContacts)
  return (
    <main className={style.section}>
      <div className={style.wrapper}>
        <Button onClick={() => setIsOpenContactModal(true)}>New Contact</Button>
        <Button disabled={!isContacts}> Download CSV</Button>
      </div>

      <TransitionGroup className={style.grid}>
        {contacts?.map(({ image, name, phone }, index) => (
          <CSSTransition key={index} timeout={300} classNames="fade">
            <Contact key={index} image={image} name={name} phone={phone} />
          </CSSTransition>
        ))}
      </TransitionGroup>

      <CreateContactModal
        visible={isOpenContactModal}
        onVisible={(isVisible) => setIsOpenContactModal(isVisible)}
      />
    </main>
  )
}

export default Main
