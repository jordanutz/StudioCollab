import React,{useState} from 'react'
import './Register.scss'
import axios from 'axios'
import {useHistory, Redirect} from 'react-router-dom'

// Redux
import {useSelector, useDispatch} from 'react-redux';
import {setUser} from '../../redux/actions'

// Components
import Form from 'react-bootstrap/form'
import {Button, Col, Container, Row} from 'react-bootstrap'
import Cinema from './assets/cinema.svg'
import Star from './assets/star.svg'


export const Register = () => {

   const [validated, setValidated] = useState(false)
   const [register, setRegister] = useState({name: '', email: '', password: ''})
   const [toggle, setToggle] = useState(
      {contentCreator: false, talent: false}
   )
   const user = useSelector(state => state.user.user)
   const dispatch = useDispatch()
   const history = useHistory()
   const [page, setPage] = useState(1)
  
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
               history.push(`/profile/${res.data.id}`)
            }
         })
      }
   }

   // Destructure Values from State
   const {name, email, password} = register

   return (
      <div className="register">
         { user ? <Redirect to={`/profile/${user.id}`} /> : null }
         <Container>
            <Row>
               <Col md={{span: 6, offset: 3}}>
                  <Row>
                     <Form className="register__form" noValidate validated={validated} onSubmit={event => handleSubmit(event, name, email, password)}>
                        <h2 className="mb-4 text-center">Register</h2>

                        { page === 1 &&
                           <Form.Row className="mb-4 d-flex flex-column">
                              <p className="mb-4 text-center">Please select your account type.</p>
                              <div className="d-flex justify-content-around">
                                 <section className={`register__selection ${toggle.contentCreator ? 'register__selection--selected' : null}`} onClick={() => setToggle({contentCreator: true, talent: false})}>
                                    {toggle.contentCreator && <i className="fas fa-check"></i>}
                                    <img src={Cinema} alt="Content Creator"/>
                                    <h3>Content Creator</h3></section>
                                 <section className={`register__selection ${toggle.talent ? 'register__selection--selected' : null}`} onClick={() => setToggle({contentCreator: false, talent: true})}>
                                    {toggle.talent && <i className="fas fa-check"></i>}
                                    <img src={Star} alt="Talent" />
                                    <h3>Talent</h3></section>
                              </div>
                              {toggle.talent || toggle.contentCreator ? <button onClick={() => setPage(2)} className="register__next btn btn-primary">Next <i className="fas fa-chevron-right"></i></button> : null}
                           </Form.Row>
                        }

                        { page === 2 &&
                           <React.Fragment>
                              <Form.Row>
                                 <Form.Group className="register__name" controlId="validationName" as={Col} xs="12">
                                    <Form.Control type="text" placeholder="Full Name" value={name} onChange={event => setRegister({...register, name: event.target.value})} required>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                    Please provide a valid name.
                                    </Form.Control.Feedback>
                                 </Form.Group>
                                 <Form.Group className="register__email" controlId="validationEmail" as={Col} md="12">
                                    <Form.Control type="email" placeholder="Email" value={email} onChange={event => setRegister({...register, email: event.target.value})} required>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                    </Form.Control.Feedback>
                                 </Form.Group>
                                 <Form.Group className="register__password" controlId="validationPassword" as={Col} md="12">
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={event => setRegister({...register, password: event.target.value})} required>
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                    Please provide a valid password.
                                    </Form.Control.Feedback>
                                 </Form.Group>
                              </Form.Row>
                              <Form.Row style={{margin: '0'}} className="register__submit">
                                 <Col md={4}> <Button className="register__submit" onClick={() => setPage(1)}>Previous</Button></Col>
                                 <Col md={4}> <Button className="register__submit" type="submit">Submit</Button></Col>
                              </Form.Row>
                           </React.Fragment>
                        }
                     </Form>
                  </Row>
               </Col>
            </Row>
         </Container>
      </div>
   )
}