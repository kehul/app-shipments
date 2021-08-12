import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../assets/styles/Footer.scss';
import Facebook from '../assets/static/Facebook-icon.svg';
import Instagram from '../assets/static/Instagram-icon.svg';
import Twitter from '../assets/static/TwitterIcon.svg';

const Footer = () => (
    <footer className="footer">
        <Container>
            <Row className="itemsFooter">
                <Col xs={4} className="text-center">Términos y condiciones</Col>
                <Col xs={4} className="text-center">Copyright © 2021 Company 123</Col>
                <Col xs={4} className="text-center">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Nav.Link href="#">
                            <img src={Facebook} />
                        </Nav.Link>
                        <Nav.Link href="#">
                            <img src={Instagram} />
                        </Nav.Link>
                        <Nav.Link href="#">
                            <img src={Twitter} />
                        </Nav.Link>
                    </Nav>
                </Col>
            </Row>  
        </Container>
    </footer>
);

export default Footer; 