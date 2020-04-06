import React, {useEffect} from 'react';
import './App.scss';
import axios from 'axios'

// Components
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import Homepage from './Components/Homepage/Homepage'
import Register from './Components/Register/Register'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound'

// React Router
import {Switch, Route, withRouter} from 'react-router-dom'

// Redux 
import {unsetUser, setUser} from './redux/actions'
import {useSelector, useDispatch} from 'react-redux';

function App(props) {

  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  console.log(user, 'app')

   useEffect(() => {
      window.scrollTo(0, 0)
      console.log('hit app')
      axios.get('/api/user')
      .then(res => {
        dispatch(setUser(res.data[0]))
      })
      .catch(err => console.log(err))
    },[])

   const userLogout = () => {
      axios.get('/api/logout').then(res => {
         dispatch(unsetUser(null))
         props.history.push('/')
      })
      .catch(err => console.log(err))
   }

  return (
    <div className="App">
      <Navigation userLogout={userLogout} user={user} />
      <main>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/profile/:id' component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default withRouter(App);
