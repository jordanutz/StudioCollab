import React from 'react'
import {Link, Redirect} from 'react-router-dom'
// Redux 
import {useSelector} from 'react-redux'

const Dashboard = () => {

   const user = useSelector(state => state.user.user)

   return (
      <div>
         { !user ? <Redirect to="/login" /> : null }
         <h1>Future Nostalgia</h1>
         <Link to='/login'>Login</Link>
      </div>
   )
}

export default Dashboard