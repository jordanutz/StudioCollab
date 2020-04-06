import React, {useEffect} from 'react'
import './Navigation.scss'
import {Link, withRouter} from 'react-router-dom'

// Components
import {Container, Row, Col} from 'react-bootstrap'

const Navigation = (props) => {

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
                        { !props.user &&
                           <React.Fragment>
                              <li><Link to="/features">Features</Link></li>
                              <li><Link to='/pricing'>Pricing</Link></li>
                              <li><Link to='/login'>Login</Link></li>
                           </React.Fragment>
                        }

                        <li>
                           { props.user ? 
                              <button className="sign-up" onClick={() => props.userLogout()}>Sign Out</button>
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