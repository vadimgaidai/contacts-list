import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Phone, Edit2 } from 'react-feather'

import { ContactType } from '../../redux/contacts/types'
import Button from '../Button'

import style from './contact.module.scss'

const Contact: FC<ContactType> = ({ id, image, name, phone }: ContactType) => (
  <section className={style.section}>
    <NavLink to={`${id}/edit`} className={style.link}>
      <Edit2 className={style.icon} />
    </NavLink>
    <img src={image} alt={name} className={style.image} />
    <h3 className={style.name}>{name}</h3>
    <Button
      name="link"
      href={`tel:${phone
        .replace(/\(|\)/g, '')
        .replace(/-/g, '')
        .replace(/ /g, '')}`}
      styleButton="success"
    >
      <Phone className={style.icon} />
    </Button>
  </section>
)

export default Contact
