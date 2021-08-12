import React from 'react';
import { FloatingLabel, Form, Button, Card, Row, Col } from 'react-bootstrap';
import '../assets/styles/FormAlert.scss';

const FormAlert = () => (
    <Card className="formCardUser">
        <Card.Title className="cardTitleUser">Nueva pre-alerta</Card.Title>
        <FloatingLabel label="Tienda de procedencia" className="formAlert">
            <Form.Control type="text" placeholder="Tienda" />
        </FloatingLabel>
        <Row className="g-2 formAlert">
            <Col md="7">
                <FloatingLabel controlId="floatingSelectGrid" label="Empresa de envío">
                    <Form.Select aria-label="Floating label select example">
                        <option>Seleccionar</option>
                        <option value="1">Mega Envíos</option>
                        <option value="2">Envíos Ultra</option>
                        <option value="3">Siempre a tiempo</option>
                    </Form.Select>
                </FloatingLabel>
            </Col>
            <Col md="5">
                <FloatingLabel controlId="floatingInputGrid" label="Valor del envío">
                    <Form.Control type="text" placeholder="Valor" />
                </FloatingLabel>
            </Col>
        </Row>
        <FloatingLabel controlId="floatingInputGrid" label="Número de tracking" className="formAlert">
            <Form.Control type="text" placeholder="Tracking" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingSelectGrid" label="Tipo de paquete" className="formAlert">
            <Form.Select aria-label="Floating label select example">
                <option>Seleccionar</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Descripción del paquete" className="formAlert">
            <Form.Control
            as="textarea"
            placeholder="Descripción"
            style={{ height: '100px' }}
            />
        </FloatingLabel>
        <Form.Label>¿Cómo te gustaría enviar el paquete a Venezuela?</Form.Label>
        <Form>
        {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check
                inline
                label="Marítimo"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
            />
            <Form.Check
                inline
                label="Áereo"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
            />
            </div>
        ))}
        </Form>
        <Card.Text>
            *El tipo de envío lo podrás modificar por medio de una Solicitud especial desde tu almacén.
        </Card.Text>
        <Button variant="primary" type="submit" className="button">
            Registar pre-alerta
        </Button>
    </Card>
);

export default FormAlert;