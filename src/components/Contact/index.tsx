import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Phone, Edit2 } from 'react-feather'

import { ContactType } from '../../redux/contacts/types'
import Button from '../Button'

import style from './contact.module.scss'

const Contact: FC<ContactType> = ({ id, image, name, phone }: ContactType) => {
  const history = useHistory()
  return (
    <section className={style.section}>
      <button
        type="button"
        className={style.button}
        onClick={() => history.push(`${id}/edit`)}
      >
        <Edit2 className={style.icon} />
      </button>
      <img src={image} alt={name} className={style.image} />
      <h3 className={style.name}>{name}</h3>
      <Button href={`tel:${phone}`} styleButton="success">
        <Phone className={style.icon} />
      </Button>
    </section>
  )
}

export default Contact
