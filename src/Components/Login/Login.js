import React, {useState} from 'react'
import '../Register/Register.scss'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

// Components
import Form from 'react-bootstrap/form'
import {Button, Col, Container, Row} from 'react-bootstrap'

// Redux 
import {useDispatch} from 'react-redux'
import {setUser} from '../../redux/actions'

const Login = (props) => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [validated, setValidated] = useState(false)
   const dispatch = useDispatch()

   const handleSubmit = (event, email, password) => {
      const form = event.currentTarget;

      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
         setValidated(true);
      } else {
         event.preventDefault();
         event.stopPropagation();

         const user = {
            email, 
            password, 
         }
         
         axios.post('/api/login', user).then(res => {
            dispatch(setUser(res.data[0]))
            props.history.push(`/profile/${res.data[0].id}`)
         })
      }
   }

   return (
      <div className="register d-flex align-items-center">
         <Container>
            <Row>
               <Col md={{span: 6, offset: 3}}>
                  <Row className="form">
                     <Col md={{span: 12}}>
                        <Form noValidate validated={validated} onSubmit={(event) => handleSubmit(event, email, password)}>
                        <h2 className="mb-4 text-center">Login</h2>
                           <Form.Row>
                              <Form.Group className="full-email" controlId="validationEmail" as={Col} md="12">
                                 <Form.Control type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required>
                                 </Form.Control>
                                 <Form.Control.Feedback type="invalid">
                                 Please provide a valid email.
                                 </Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group className="full-password" controlId="validationPassword" as={Col} md="12">
                                 <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required>
                                 </Form.Control>
                                 <Form.Control.Feedback type="invalid">
                                 Please provide a valid password.
                                 </Form.Control.Feedback>
                              </Form.Group>
                           </Form.Row>
                           <Form.Row style={{margin: '0'}}>
                              <Button type="submit">Submit</Button>
                           </Form.Row>
                        </Form>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default withRouter(Login)