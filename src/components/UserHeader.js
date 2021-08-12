import React from 'react';
import Cookies from 'universal-cookie';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Component } from 'react';

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
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Mi cuenta</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Ayuda</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3" onClick={()=>this.logout()}>Cerrar sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
};

export default UserHeader;