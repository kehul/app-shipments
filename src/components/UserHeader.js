import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Navbar, Container, Nav, NavDropdown, Col } from 'react-bootstrap';
import Example from '../components/menuUser';
import '../assets/styles/UserHeader.scss';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const cookies = new Cookies();

class UserHeader extends Component {
    logout = () => {
        cookies.remove('id_usuario', {path: "/"});
        cookies.remove('us_nombre', {path: "/"});
        cookies.remove('us_email', {path: "/"});
        cookies.remove('us_pass', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('us_email')){
            window.location.href="./";
        }
    }

    render() {
        return (
            <Navbar expand="lg" className="userHero">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Col sm={5}>
                        <NavbarCollapse>
                            <Example />
                        </NavbarCollapse>
                    </Col>
                    <Col sm={5}>
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="mr-auto navUser">
                            <Nav.Link href="#home">Search</Nav.Link>
                            <Nav.Link href="#link">235.4789 pts</Nav.Link>
                            <NavDropdown title="Usuario" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Ayuda</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3" onClick={()=>this.logout()}>Cerrar sesión</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Container>
            </Navbar>
        );
    }
};

export default UserHeader;