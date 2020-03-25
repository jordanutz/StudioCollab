import React from 'react'
import './Navigation.scss'

// Components
import {Container, Row, Col} from 'react-bootstrap'

const Navigation = () => {
   return (
      <header>
            <Container>
               <Row>
                  <Col md={5} lg={7}>
                     <section className="logo">
                        <h1>StudioCollab</h1>
                     </section>
                  </Col>
                  <Col md={7} lg={5}>
                     <nav>
                        <ul>
                           <li>Features</li>
                           <li>Pricing</li>
                           <li>Login</li>
                           <li className="sign-up">Sign Up</li>
                        </ul>
                     </nav>
                  </Col>
               </Row>
            </Container>
      </header>
   )
}

export default Navigation