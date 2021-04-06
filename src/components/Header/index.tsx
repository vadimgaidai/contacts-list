import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentTypes } from '../../currentTypes'
import { selectIsAuth, selectUser } from '../../redux/user/selectors'
import Button from '../Button'
import style from './header.module.scss'

const Header: FC = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)
  const user = useSelector(selectUser)

  const onLogout = () => {
    dispatch({
      type: currentTypes.RESET_STORAGE,
    })
  }
  return (
    <header className={style.section}>
      {isAuth && (
        <>
          <h1>{user?.name}</h1>{' '}
          <button className={style.button} type="button" onClick={onLogout}>
            Logout
          </button>
        </>
      )}
    </header>
  )
}

export default Header
