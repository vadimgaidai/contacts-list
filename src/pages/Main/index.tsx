import { FC } from 'react'
import { useSelector } from 'react-redux'
import { CSVLink } from 'react-csv'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { useHistory } from 'react-router-dom'
import {
  selectContacts,
  selectIsContacts,
} from '../../redux/contacts/selectors'

import Button from '../../components/Button'
import Contact from '../../components/Contact'

import style from './main.module.scss'

const headers = [
  { label: 'Id', key: 'id' },
  { label: 'Name', key: 'name' },
  { label: 'Phone', key: 'phone' },
  { label: 'Image', key: 'image' },
]

const Main: FC = () => {
  const history = useHistory()
  const contacts = useSelector(selectContacts)
  const isContacts = useSelector(selectIsContacts)

  return (
    <main className={style.section}>
      <div className={style.wrapper}>
        <Button onClick={() => history.push('/new')}>New Contact</Button>
        <Button disabled={!isContacts} className={style.csv}>
          <CSVLink data={contacts} headers={headers}>
            Download CSV
          </CSVLink>
        </Button>
      </div>

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
