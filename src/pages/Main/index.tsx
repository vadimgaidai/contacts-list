/* eslint-disable jsx-a11y/anchor-has-content */
import { FC, useRef } from 'react'
import { useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import {
  selectContacts,
  selectIsContacts,
} from '../../redux/contacts/selectors'

import { convertArrayOfObjectsToCSV } from '../../utils/csv'

import Button from '../../components/Button'
import Contact from '../../components/Contact'

import style from './main.module.scss'
import { ContactType } from '../../redux/contacts/types'

const Main: FC = () => {
  const linkForDownload = useRef<HTMLAnchorElement | null>(null)
  const contacts = useSelector(selectContacts)
  const isContacts = useSelector(selectIsContacts)

  const onLoadCSV = () => {
    const csv = convertArrayOfObjectsToCSV<ContactType>({
      data: contacts,
    })

    if (!csv) {
      return
    }

    const blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;',
    })
    if (linkForDownload.current) {
      linkForDownload.current.href = URL.createObjectURL(blob)
      linkForDownload.current.click()
    }
  }

  return (
    <main className={style.section}>
      <div className={style.wrapper}>
        <Button name="nav" to="/new">
          New Contact
        </Button>
        <Button
          name="button"
          disabled={!isContacts}
          className={style.csv}
          onClick={onLoadCSV}
        >
          Download CSV
        </Button>
      </div>

      <a ref={linkForDownload} download="contacts-list.csv" aria-hidden />

      <TransitionGroup className={style.grid}>
        {contacts?.map(({ id, image, name, phone }) => (
          <CSSTransition key={id} timeout={300} classNames="fade">
            <Contact id={id} image={image} name={name} phone={phone} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </main>
  )
}

export default Main
