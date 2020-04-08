import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export const AuthRoute = (props) => {
   if (props.user) {
      return <Route {...props} />
   }
   return <Redirect to='/login' />
}