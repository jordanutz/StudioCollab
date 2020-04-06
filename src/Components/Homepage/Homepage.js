import React from 'react'
import './Homepage.scss'

// Components
import {Container, Row, Col} from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'

// Redux
import {useSelector} from 'react-redux';

const Homepage = () => {

   const user = useSelector(state => state.user.user)

   return (
      <div className="homepage">
         { user ? <Redirect to={`/profile/${user.id}`} /> : null }
         <section className="slider">
            <Container>  
               <Row>
                  <Col className="text-center mb-3" xs={12}>
                     <h1><span>StudioCollab</span></h1>
                  </Col>
               </Row>  
               <Row>
                  <Col className="text-center" xs={{span:2, offset:4}}><Link to='/login'>Login</Link></Col>
                  <Col className="text-center" xs={{span:2, offset:0}}><Link to='/register'>Sign Up</Link></Col>
               </Row>
            </Container>
         </section>
      </div>
   )
}

export default Homepage