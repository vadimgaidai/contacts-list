import { FC, useEffect } from 'react'
import { Route, Switch, useLocation, withRouter } from 'react-router-dom'

import Main from './pages/Login'

const App: FC = () => {
  const location = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [location])

  return (
    <Switch>
      <Route path="/" component={Main} exact />
    </Switch>
  )
}

export default withRouter(App)
