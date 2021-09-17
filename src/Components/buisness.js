import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

const Buisness = () => {

    return (
        <section className="section buisness-section">
            <h2 className="section-title fw-bolder ">We are providing best <br />
                business service.</h2>
            <p className="section-desc buisness-section-desc">Problems trying to resolve the conflict between the two major realms <br />
                of Classical physics: Newtonian mechanics </p>
            <Row xs={1} md={2} className="g-4 " >
                <Col>
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe width="520" height="330" src="https://www.youtube.com/embed/xTQ7vhtp23w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </Col>

                <Col className='px-5'>
                    <h2 className="section-title fw-bolder buisness-second-title">Most trusted in<br />
                        our field</h2>
                    <p className="section-desc buisness-second-desc" style={{ width: '320px' }}>Most calendars are designed for teams. Slate
                        is designed for freelancers who want a
                        simple way to plan their schedule.</p>
                    <div className='col-table'>
                        <Row xs={1} md={2} className="g-4 " style={{ width: '320px' }}>
                            <Col style={{ width: '20%' }}>
                                <i class="fas fa-users col-icons"></i>
                            </Col>
                            <Col style={{ width: '80%' }}>
                                <h2 className="col-title">the quick fox jumps over the lazy
                                    dog</h2>
                            </Col>
                        </Row>
                        <Row xs={1} md={2} className="g-4 " style={{ width: '320px' }}>
                            <Col style={{ width: '20%' }}>

                            </Col>
                            <Col style={{ width: '80%' }}>
                                <h3 className="col-desc">Things on a very small scale ...
                                </h3>
                            </Col>
                        </Row>
                    </div>
                    <div className='col-table'>
                        <Row xs={1} md={2} className="g-4 " style={{ width: '320px' }}>
                            <Col style={{ width: '20%' }}>
                                <i class="fas fa-tachometer-alt col-icons"></i>
                            </Col>
                            <Col style={{ width: '80%' }}>
                                <h2 className="col-title">the quick fox jumps over the lazy
                                    dog</h2>
                            </Col>
                        </Row>
                        <Row xs={1} md={2} className="g-4 " style={{ width: '320px' }}>
                            <Col style={{ width: '20%' }}>

                            </Col>
                            <Col style={{ width: '80%' }}>
                                <h3 className="col-desc">Things on a very small scale ...
                                </h3>
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>
            <div className='company-logos'>
            <Row xs={1} md={6} className="g-4 ">
                <Col className='company-icons'><i class="fab fa-hooli"></i></Col>
                <Col className='company-icons'><i class="fab fa-lyft"></i></Col>
                <Col className='company-icons'><i class="fab fa-pied-piper-hat"></i></Col>
                
                <Col className='company-icons'><i class="fab fa-stripe"></i></Col>
                <Col className='company-icons'><i class="fab fa-aws"></i></Col>
                <Col className='company-icons'><i class="fab fa-reddit-alien"></i></Col>
            </Row>
            </div>

        </section>
    );
}


export default Buisness;