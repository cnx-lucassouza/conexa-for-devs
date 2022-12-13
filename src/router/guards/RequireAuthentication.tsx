import { useAuthContext } from '@/contexts/Auth'
import { FunctionComponent } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

const RequireAuthentication: FunctionComponent<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { token, user } = useAuthContext()

  return (
    <Route
      {...rest}
      render={props => {
        return token && user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }}
    />
  )
}

export default RequireAuthentication
