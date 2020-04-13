import React from 'react'
import './Homepage.scss'

// Components
import {Container, Row, Col} from 'react-bootstrap'
import {Redirect, Link} from 'react-router-dom'

// Redux
import {useSelector} from 'react-redux';

export const Homepage = () => {

   const user = useSelector(state => state.user.user)

   return (
      <div className="homepage">
         { user ? <Redirect to={`/profile/${user.id}`} /> : null }
         <section className="homepage__slider">
            <Container style={{padding: '75px 0 75px 0'}}>  
               <Row style={{position: 'relative'}}>
                  <Col className="mb-5" md={4} style={{position: 'absolute'}}>
                     <h2 className="mb-4">Lights. Camera. <span>Collaborate.</span></h2>
                     <p className="mb-4">StudioCollab powers the connection between content creators and talent to maximize the production experience.</p>
                     <Link to='/register'><button>Sign Up For Free</button></Link>
                  </Col>
                  <Col md={{span: '10', offset: '3'}}>
                     <img src="https://www.qwick.co/img/homemainpicture.png" alt="Overview" />
                  </Col>
               </Row>  
            </Container>
         </section>
         {/* <section className="homepage__banner">
            <Container>
               <section className="homepage__banner-content">
                  <h3></h3>
               </section>
            </Container>
         </section> */}
         {/* <section>
            <Container>
               <section className="homepage__grid">
                  <section className="homepage__grid-item">
                  <section className="homepage__grid-icon">
                  </section>
                     <h3>Lorem Ipsum</h3> 
                     <h4>Project Management</h4>
                  </section>
                  <section className="homepage__grid-item">
                     <section className="homepage__grid-icon">
                     
                     </section>
                     <h3>Networking</h3>
                     <h4></h4>
                  </section>
                  <section className="homepage__grid-item">
                     <section className="homepage__grid-icon">
                     
                     </section>
                     <h3>Networking</h3>
                     <h4>Talent Recruitment</h4> 
                  </section>
                  <section className="homepage__grid-item">
                     <section className="homepage__grid-icon">
                     
                     </section>
                     <h3>Exclusive</h3>
                     <h4>Past Seasons</h4>
                  </section>
                  <section className="homepage__grid-item">
                     <section className="homepage__grid-icon">
                     
                     </section>
                     <h3>For all Ages</h3>
                     <h4>Kids</h4>
                  </section>
               </section>
            </Container>
         </section> */}
      </div>
   )
}