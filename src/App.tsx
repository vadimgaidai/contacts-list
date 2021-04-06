import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  withRouter,
} from 'react-router-dom'

import { selectIsAuth } from './redux/user/selectors'

import Login from './pages/Login'
import Main from './pages/Main'
import CreateContactModal from './components/modals/list/CreateContactModal'
import EditContactModal from './components/modals/list/EditContactModal'

const App: FC = () => {
  const isAuth = useSelector(selectIsAuth)
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    window.scroll(0, 0)
  }, [location])

  useEffect(() => {
    if (!isAuth) {
      history.push('/login')
    } else if (location.pathname === '/login') {
      history.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])

  return (
    <Switch>
      <Route path="/login" component={Login} exact />
      <Route path="/new" component={CreateContactModal} />
      <Route path="/:id/edit" component={EditContactModal} />
      <Route path="/" component={Main} exact />
    </Switch>
  )
}

export default withRouter(App)
