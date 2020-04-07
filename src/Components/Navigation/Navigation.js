import React from 'react'
import './Navigation.scss'
import {Link, useLocation} from 'react-router-dom'

// Components
import {Container, Row, Col} from 'react-bootstrap'

export const Navigation = (props) => {

   const {pathname} = useLocation()
   const {user, userLogout} = props

   return (
      <header>
         <Container>
            <Row>
               <Col md={5} lg={7}>
                  {pathname !== '/' && 
                  <section className="logo">
                     <Link to='/'><h1>StudioCollab</h1></Link>
                  </section>
                  }   
               </Col>
               <Col md={7} lg={5}>
                  <nav>
                     <ul>
                        { !user &&
                           <React.Fragment>
                              <li><Link to="/features">Features</Link></li>
                              <li><Link to='/pricing'>Pricing</Link></li>
                              <li><Link to='/login'>Login</Link></li>
                           </React.Fragment>
                        }

                        <li>
                           { user ? 
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