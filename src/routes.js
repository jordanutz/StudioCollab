import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Components
import Homepage from './Components/Homepage/Homepage'

export default (
  <Switch>
    <Route exact path='/' component={Homepage} />
  </Switch>
)