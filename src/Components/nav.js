import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {

    return (
        <Navbar bg="light" variant="light" className='sticky-top'>

            <Navbar.Brand className='mb-0 fw-bold nav-title' href="#home">Indicorp</Navbar.Brand>
            <Nav className="me-auto m-auto  ">
                <Nav.Link className='px-4 fw-bolder' style={{fontSize:'14px'}} href="#home">Home</Nav.Link>
                <Nav.Link className='px-4 fw-bolder' style={{fontSize:'14px'}} href="#features">Features</Nav.Link>
                <Nav.Link className='px-4 fw-bolder' style={{fontSize:'14px'}} href="#pricing">Pricing</Nav.Link>
            </Nav>

        </Navbar>
    )

}

export default Navigation;