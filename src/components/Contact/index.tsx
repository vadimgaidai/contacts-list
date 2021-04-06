import { FC } from 'react'
import { Phone } from 'react-feather'

import { ContactType } from '../../redux/contacts/types'
import Button from '../Button'

import style from './contact.module.scss'

const Contact: FC<ContactType> = ({ image, name, phone }: ContactType) => (
  <section className={style.section}>
    <img src={image} alt={name} className={style.image} />
    <h3 className={style.name}>{name}</h3>
    <Button href={`tel:${phone}`} styleButton="success">
      <Phone className={style.icon} />
    </Button>
  </section>
)

export default Contact
