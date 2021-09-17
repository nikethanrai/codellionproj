import React, { Component } from 'react';
import { Col, Row, CardGroup, Button, Card } from 'react-bootstrap';


const Mainpage = () => {

    return (
        <section className='section section-mainpage'>
            <h1 className='main-page-title pt-3'>EMPOWER YOUR<br></br>BUISNESS</h1>
            <p className='main-page-desc pt-3 '>We know how large objects will act,<br />
                but things on a small scale.</p>

            <Button className='rounded-pill fw-bolder py-3 px-4' style={{ color: 'white' }} variant="warning">Get Quote Now</Button>
            <Button className='rounded-pill fw-bolder py-3 px-4 m-2' variant="outline-primary">Learn More</Button>
            <div className='py-4'>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card className='shadow main-card' style={{width: '310px',height:'210px'}}>
                        <Card.Body className='p-4'>
                            <i className="fas fa-briefcase card-icon pb-2"></i>

                            <Card.Title className='fw-bold card-title'>Digital Marketing</Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                            We focus on ergonomics and
                  meeting you where you work.
                            </Card.Text>
                        </Card.Body  >

                    </Card>
                    </Col>
                    <Col>
                    <Card className='shadow main-card' style={{ width: '310px',height:'210px' }}>
                        <Card.Body className='p-4'>
                        <i className="fas fa-building card-icon pb-2"></i>
                            <Card.Title className='fw-bold card-title'>National top 50 firms</Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                            Just type what's on your mind
                  and we'll get you there.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    </Col>
                    <Col>
                    <Card className='shadow main-card' style={{ width: '310px',height:'210px' }}>
                        <Card.Body className='p-4'>
                        <i className="fas fa-archive card-icon pb-2"></i>

                            <Card.Title className='fw-bold card-title '>Digital Marketing</Card.Title>
                            <Card.Text style={{fontSize:'14px'}}>
                            the quick fox jumps over the
                  lazy dog
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
            </div>



        </section>
    );
}

export default Mainpage;