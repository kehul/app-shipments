import React from 'react';
import { Navbar, Nav, Col, Form, FormControl, Button } from 'react-bootstrap';
import Tel from '../assets/static/telf.svg';
import Email from '../assets/static/Correo.svg';
import Location from '../assets/static/Ubicacion.svg';
import '../assets/styles/Header.scss';

const Header = () => (
    <Navbar expand="lg" className="hero">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Col sm={9}>
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <Nav.Link href="#">
                        <img src={Tel} />
                        +1 (786)600.72.96
                    </Nav.Link>
                    <Nav.Link href="#">
                        <img src={Email} />
                        miami@12345.com
                    </Nav.Link>
                    <Nav.Link href="#">
                        <img src={Location} />
                        5989nw 102nd ave, Miami,
    FL 33178, United States
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Col>
        <Col sm={3}>
            <Navbar.Collapse>
            <Form className="d-flex navbarSearch">
                <FormControl
                    type="search"
                    placeholder="Escribe aqui"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success" className="buttonHero">Buscar</Button>
                </Form>
            </Navbar.Collapse>
        </Col>
    </Navbar>
);

export default Header;