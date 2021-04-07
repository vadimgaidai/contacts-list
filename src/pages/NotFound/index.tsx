import { FC } from 'react'
import style from './notFound.module.scss'

const NotFound: FC = () => (
  <main className={style.section}>
    <h1 className={style.title}>404</h1>
    <p className={style.text}>Page not found</p>
  </main>
)

export default NotFound
