import Loadable from '@/components/Loadable'
import { FunctionComponent, lazy } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

const Home = Loadable(
  lazy(() => import('@/pages/Home')),
  true,
)

const Router: FunctionComponent = props => {
  return (
    <Switch {...props}>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Router
