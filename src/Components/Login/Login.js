import React, {useState} from 'react'
import './Login.scss'
import axios from 'axios'
import {useHistory, Redirect, Link} from 'react-router-dom'

// Components
import Form from 'react-bootstrap/form'
import {Button, Col} from 'react-bootstrap'

// Redux 
import {useSelector, useDispatch} from 'react-redux'
import {setUser} from '../../redux/actions'

export const Login = ({setToggleLogin}) => {

   const [login, setLogin] = useState({email: '', password: ''})
   const [validated, setValidated] = useState(false)
   const user = useSelector(state => state.user.user)
   const dispatch = useDispatch()
   const history = useHistory()

   const handleSubmit = (event, email, password) => {
      const form = event.currentTarget;

      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
         setValidated(true);
      } else {
         event.preventDefault();
         event.stopPropagation();

         const validatedUser = {
            email,
            password
         }
         
         axios.post('/api/login', validatedUser).then(res => {
            dispatch(setUser(res.data[0]))
            history.push(`/profile/${res.data[0].id}`)
         })
      }
   }

   const {email, password} = login;

   return (
      <div className="login">
         { user ? <Redirect to={`/profile/${user.id}`} /> : null }
         <section className="login__form">
            <Form noValidate validated={validated} onSubmit={(event) => handleSubmit(event, email, password)}>
               <h2 className="mb-4 text-center">Login</h2>
               <Form.Row>
                  <Form.Group className="login__email" controlId="validationEmail" as={Col} md="12">
                     <Form.Control type="email" placeholder="Email" value={email} onChange={event => setLogin({...login, email: event.target.value})} required>
                     </Form.Control>
                     <Form.Control.Feedback type="invalid">
                     Please provide a valid email.
                     </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="login__password" controlId="validationPassword" as={Col} md="12">
                     <Form.Control type="password" placeholder="Password" value={password} onChange={event => setLogin({...login, password: event.target.value})} required>
                     </Form.Control>
                     <Form.Control.Feedback type="invalid">
                     Please provide a valid password.
                     </Form.Control.Feedback>
                  </Form.Group>
               </Form.Row>
               <Form.Row className="mb-4">
                  <Button type="submit">Submit</Button>
               </Form.Row>
               <Form.Row style={{margin: '0'}}>
                  <p>Don't have an account? <Link to='/register' onClick={() => setToggleLogin(false)}>Sign Up</Link></p>
               </Form.Row>
            </Form>
         </section>
      </div>
   )
}