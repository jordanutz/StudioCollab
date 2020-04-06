import React,{useState} from 'react'
import './Register.scss'
import axios from 'axios'
import {withRouter, Redirect} from 'react-router-dom'

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../redux/actions'

// Components
import Form from 'react-bootstrap/form'
import {Button, Col, Container, Row} from 'react-bootstrap'

const Register = (props) => {

   const [validated, setValidated] = useState(false)
   const [register, setRegister] = useState({name: '', email: '', password: ''})
   const [toggle, setToggle] = useState(
      {contentCreator: false, talent: false}
   )
   const user = useSelector(state => state.user.user)
   const dispatch = useDispatch()
  
   const handleSubmit = (event, name, email, password) => {
      const form = event.currentTarget;

      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
         setValidated(true);
      } else {
         event.preventDefault();
         event.stopPropagation();

         const user = {
            name, email, password, 
            account: toggle.contentCreator ? true : false
         }
         
         axios.post('/api/register', user).then(res => {
            dispatch(setUser(res.data))

            if (user) {
               props.history.push(`/profile/${res.data.id}`)
            }
         })
      }
   }

   // Destructure Values from State
   const {name, email, password} = register

   return (
      <div className="register d-flex align-items-center">
         { user ? <Redirect to={`/profile/${user.id}`} /> : null }
         <Container>
            <Row>
               <Col md={{span: 6, offset: 3}}>
                  <Row className="form">
                     <Form noValidate validated={validated} onSubmit={event => handleSubmit(event, name, email, password)}>
                        <h2 className="mb-4 text-center">Register Your Account</h2>
                        <Form.Row className="mb-3 d-flex flex-column">
                           <h3 className="mb-4 text-center">Select Your Account Type</h3>
                           <div className="d-flex justify-content-around">
                              <Form.Check
                                 type="radio"
                                 label="Content Creator"
                                 name="formHorizontalRadios"
                                 id="contentCreator"
                                 value={toggle.contentCreator}
                                 onChange={() => setToggle({contentCreator: true, talent: false})}
                              />
                              <Form.Check
                                 type="radio"
                                 label="Talent"
                                 name="formHorizontalRadios"
                                 id="talent"
                                 value={toggle.talent}
                                 onChange={() => setToggle({contentCreator: false, talent: true})}
                              />
                           </div>
                        </Form.Row>
                           
                        <Form.Row>
                           <Form.Group className="full-name" controlId="validationName" as={Col} xs="12">
                              <Form.Control type="text" placeholder="Full Name" value={name} onChange={event => setRegister({...register, name: event.target.value})} required>
                              </Form.Control>
                              <Form.Control.Feedback type="invalid">
                              Please provide a valid name.
                              </Form.Control.Feedback>
                           </Form.Group>
                           <Form.Group className="full-email" controlId="validationEmail" as={Col} md="12">
                              <Form.Control type="email" placeholder="Email" value={email} onChange={event => setRegister({...register, email: event.target.value})} required>
                              </Form.Control>
                              <Form.Control.Feedback type="invalid">
                              Please provide a valid email.
                              </Form.Control.Feedback>
                           </Form.Group>
                           <Form.Group className="full-password" controlId="validationPassword" as={Col} md="12">
                              <Form.Control type="password" placeholder="Password" value={password} onChange={event => setRegister({...register, password: event.target.value})} required>
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
                  </Row>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default withRouter(Register)