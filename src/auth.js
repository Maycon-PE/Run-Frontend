import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const isAuth = () => {
  if (!sessionStorage.getItem('token')) return false

  return true
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={props =>
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to='/' />
      )}
    />
  )
}

export default PrivateRoute