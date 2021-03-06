import React, {useEffect, useState, useRef} from 'react';
import './App.scss';
import axios from 'axios'

// Components
import { Navigation } from './Components/Navigation/Navigation'
import { AuthRoute } from './Components/AuthRoute/AuthRoute'
import { Footer } from './Components/Footer/Footer'
import { Homepage } from './Components/Homepage/Homepage'
import { Register } from './Components/Register/Register'
import { Dashboard } from './Components/Dashboard/Dashboard'
import { Login } from './Components/Login/Login'
import { NotFound } from './Components/NotFound/NotFound'

// React Router
import {Switch, Route, useHistory} from 'react-router-dom'

// Redux 
import {unsetUser, setUser} from './redux/actions'
import {useSelector, useDispatch} from 'react-redux';

function App() {

  const user = useSelector(state => state.user.user)
  const [toggleLogin, setToggleLogin] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const overlay = useRef()

   useEffect(() => {
      window.scrollTo(0, 0)
      axios.get('/api/user')
      .then(res => {
        dispatch(setUser(res.data[0]))
      })
      .catch(err => console.log(err))
    },[dispatch])

   const userLogout = () => {
      axios.get('/api/logout').then(res => {
         dispatch(unsetUser(null))
         history.push('/')
      })
      .catch(err => console.log(err))
   }

  return (
    <div className="App">
      <Navigation userLogout={userLogout} user={user} toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} />
      {toggleLogin && <Login setToggleLogin={setToggleLogin} />}
      <main>
        <Switch>
          <Route exact path='/'render={() => <Homepage toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} /> } />
          <Route path='/register' component={Register} />
          <AuthRoute path='/profile/:id' user={user} render={() => <Dashboard /> } />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      {toggleLogin && <section ref={overlay} className="App__overlay" onClick={() => setToggleLogin(false)}></section> }
    </div>
  );
}

export default App;
