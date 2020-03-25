import React from 'react'
import './Homepage.scss'

// Components
import {Container, Row, Col} from 'react-bootstrap'

const Homepage = () => {
   return (
      <div className="homepage">
         <section className="slider">
            <Container>    
               <Row>
                  <Col className="text-center" xs={{span:2, offset:4}}>1</Col>
                  <Col className="text-center" xs={{span:2, offset:0}}>2</Col>
               </Row>
            </Container>
         </section>

         <section className="solutions dt db">
            <Container>
               <Row className="pb-5 text-center">
                  <Col xs={12}>
                     <h2 className="mb-2">Our Solutions</h2>
                  </Col>
                  <Col sm={{span: 6, offset: 3}}>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel dolor augue. Ut posuere commodo euismod. Praesent ut nunc orci. Lorem ipsum dolor sit amet, consectetur commodo euismod.  </p>
                  </Col>
               </Row>
               <Row className="d-flex justify-content-center">
                  <Col md={{span: 3, offset:0}}>
                     <section className="solution">
                        <h3 className="mb-3">Projects</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel dolor augue. Ut posuere commodo euismod. Praesent ut nunc orci. Lorem ipsum dolor sit amet, consectetur.</p>
                     </section>
                  </Col>
                  <Col md={{span: 3, offset: 0}}>
                     <section className="solution">
                        <h3 className="mb-3">Network</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel dolor augue. Ut posuere commodo euismod. Praesent ut nunc orci. Lorem ipsum dolor sit amet, consectetur.</p>
                     </section>
                  </Col>
                  <Col md={{span: 3, offset: 0}}>
                     <section className="solution">
                        <h3 className="mb-3">Collaborate</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel dolor augue. Ut posuere commodo euismod. Praesent ut nunc orci. Lorem ipsum dolor sit amet, consectetur.</p>
                     </section>
                  </Col>
               </Row>
            </Container>
         </section>

      </div>
   )
}

export default Homepage