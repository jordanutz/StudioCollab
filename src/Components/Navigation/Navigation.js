import React from 'react'
import './Navigation.scss'
import {Link} from 'react-router-dom'

// Components
import {Container, Row, Col} from 'react-bootstrap'

export const Navigation = ({user, toggleLogin, setToggleLogin}) => {

   return (
      <header className="header">
         <Container>
            <Row style={{margin: 0}}>
               <Col md={5} lg={6} style={{padding: 0}}>
                  <section className="header__logo">
                     <Link to='/'>
                        <h1>StudioCollab</h1>
                     </Link>
                  </section>
               </Col>
               <Col md={7} lg={6} style={{padding: 0}}>
                  <nav className="header__nav">
                     <ul className="header__nav-list">
                        { !user &&
                           <React.Fragment>
                              <li className="header__nav-item">
                                 <Link className="header__nav-link" to='/features'>Features</Link>
                              </li>
                              <li className="header__nav-item">
                                 <Link className="header__nav-link" to='/pricing'>Pricing</Link>
                              </li>
                              <li className="header__nav-item">
                                 <Link to='#' onClick={() => setToggleLogin(!toggleLogin)} className="header__nav-link">Login</Link>
                              </li>
                              <li className="header__nav-item">
                                 <Link id="sign-up" className="header__nav-link" to='/register'>Sign Up</Link>
                              </li>
                           </React.Fragment>
                        }
                     </ul>
                  </nav>
               </Col>
            </Row>
         </Container>
      </header>
   )
}