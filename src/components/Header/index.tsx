import { FC } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth, selectUser } from '../../redux/user/selectors'
import Button from '../Button'
import style from './header.module.scss'

const Header: FC = () => {
  const isAuth = useSelector(selectIsAuth)
  const user = useSelector(selectUser)
  return (
    <header className={style.section}>
      {isAuth && (
        <>
          <h1>{user?.name}</h1> <button type="button">Logout</button>
        </>
      )}
    </header>
  )
}

export default Header
