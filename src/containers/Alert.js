import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormAlert from '../components/FormAlert';
import FormCardAlert from '../components/FormCardAlert';
import CardAlert from '../components/CardAlert';
import '../assets/styles/Alert.scss';

const Login = () => (
    <div className="bg-content">
        <Container className="contentAlert">
            <Row>
                <Col xs={12} md={3}>
                </Col>
                <Col xs={12} md={4}>
                    <FormAlert />
                </Col>
                <Col xs={12} md={5}>
                    <CardAlert />
                    <FormCardAlert />
                </Col>
            </Row>
        </Container>
    </div>
);

export default Login;