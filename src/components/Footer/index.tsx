import { FC } from 'react'
import style from './footer.module.scss'

const Footer: FC = () => (
  <footer className={style.section}>
    <a
      className={style.link}
      href="https://github.com/vadimgaidai/contacts-list"
      rel="noreferrer"
      target="_blank"
    >
      @github
    </a>
  </footer>
)

export default Footer
