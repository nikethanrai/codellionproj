import React, { Component } from 'react';
import { Col, Row, CardGroup, Button, Card } from 'react-bootstrap';

const Practice = () => {

    return (
        <section className="section practice-section">
            <h2 className="section-title fw-bolder ">Practice Advice</h2>
            <p className="section-desc">Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics </p>
            <Row xs={1} md={4} className="g-4 ">
                <Col >
                    <Card className='practice-card' style={{ width: '230px', height: '340px' }}>
                        <Card.Body className='p-4'>

                            <Card.Title className='fw-bold practice-card-title'>A single source
                                of truth</Card.Title>
                            <Card.Text className='practice-card-desc' style={{ fontSize: '14px' }}>
                                Newton thought that
                                light was made up of
                                particles, but then it
                                was discovered
                            </Card.Text>
                        </Card.Body  >
                        <Card.Img variant="bottom" src="/images/Picture1.png" />


                    </Card>
                </Col>
                <Col>
                    <Card className='practice-card' style={{ width: '230px', height: '340px' }}>
                        <Card.Body className='p-4'>
                            <Card.Title className='fw-bold practice-card-title'>Fastest way to
                                organize</Card.Title>
                            <Card.Text className='practice-card-desc' style={{ fontSize: '14px' }}>
                                “Quantum mechanics”
                                is the description of the
                                behaviour of matter
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="/images/Picture3.png" />


                    </Card>
                </Col>
                <Col>
                    <Card className='practice-card' style={{ width: '230px', height: '340px' }}>
                        <Card.Body className='p-4'>

                            <Card.Title className='fw-bold practice-card-title '>Fastest way to
                                take action</Card.Title>
                            <Card.Text className='practice-card-desc' style={{ fontSize: '14px' }}>
                                They describe a
                                universe consisting of
                                bodies moving
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="/images/Picture4.png" />


                    </Card>
                </Col>
                <Col>
                    <Card className='practice-card' style={{ width: '230px', height: '340px' }}>
                        <Card.Body className='p-4'>

                            <Card.Title className='fw-bold practice-card-title '>Work better
                                together</Card.Title>
                            <Card.Text className='practice-card-desc' style={{ fontSize: '14px' }}>
                                They finally obtained
                                a consistent description
                                of the behaviour
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" src="/images/Picture6.png" />


                    </Card>
                </Col>
            </Row>
        </section>
    );

}

export default Practice;