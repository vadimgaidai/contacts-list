import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom'

import { selectIsAuth } from './redux/user/selectors'

import Login from './pages/Login'
import Main from './pages/Main'
import CreateContactModal from './components/modals/list/CreateContactModal'
import EditContactModal from './components/modals/list/EditContactModal'
import NotFound from './pages/NotFound'

const App: FC = () => {
  const isAuth = useSelector(selectIsAuth)
  const location = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [location])

  return (
    <Switch>
      <Route exact path="/">
        {isAuth ? <Main /> : <Redirect to="/login" />}
      </Route>
      <Route exact path="/login">
        {!isAuth && location.pathname === '/login' ? (
          <Login />
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <Route path="/new" component={CreateContactModal} />
      <Route path="/:id/edit" component={EditContactModal} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default withRouter(App)
