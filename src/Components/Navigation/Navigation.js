import React from 'react'
import './Navigation.scss'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'

// Redux 
import {unsetUser} from '../../redux/actions'
import {useSelector, useDispatch} from 'react-redux';

// Components
import {Container, Row, Col} from 'react-bootstrap'

const Navigation = (props) => {

   const user = useSelector(state => state.user, [])
   const dispatch = useDispatch()

   const userLogout = () => {
      axios.get('/api/logout').then(res => {
         dispatch(unsetUser(null))
         props.history.push('/')
      })
      .catch(err => console.log(err))
   }

   return (
      <header>
            <Container>
               <Row>
                  <Col md={5} lg={7}>
                     {props.location.pathname !== '/' && 
                     <section className="logo">
                        <Link to='/'><h1>StudioCollab</h1></Link>
                     </section>
                     }   
                  </Col>
                  <Col md={7} lg={5}>
                     <nav>
                        <ul>
                           { !user.user &&
                              <React.Fragment>
                                 <li><Link to="/features">Features</Link></li>
                                 <li><Link to='/pricing'>Pricing</Link></li>
                                 <li><Link to='/login'>Login</Link></li>
                              </React.Fragment>
                           }

                           <li>
                              { user.user ? 
                                 <button className="sign-up" onClick={() => userLogout()}>Sign Out</button>
                                 :
                                 <Link className="sign-up" to='/register'>Sign Up</Link>
                              }       
                           </li>
                        </ul>
                     </nav>
                  </Col>
               </Row>
            </Container>
      </header>
   )
}

export default withRouter(Navigation)