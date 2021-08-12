import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormAlert from '../components/FormAlert';
import FormCardAlert from '../components/FormCardAlert';
import CardAlert from '../components/CardAlert';
import '../assets/styles/Alert.scss';

const Login = () => (
    <Container className="contentAlert">
        <Row>
            <Col xs={5}>
                <FormAlert />
            </Col>
            <Col xs={7}>
                <CardAlert />
                <FormCardAlert />
            </Col>
        </Row>
    </Container>
);

export default Login;