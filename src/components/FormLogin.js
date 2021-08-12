import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { FloatingLabel, Form, Button, Card } from 'react-bootstrap';
import '../assets/styles/FormLogin.scss';

const userUrl = "http://localhost:3002/usuarios";
const cookies = new Cookies();

class FormLogin extends Component {
    state = {
        form: {
            useremail: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    userLogin = async() => {
        await axios.get(userUrl, {params: { 
            us_email: this.state.form.useremail,
            us_pass: this.state.form.password
        }}).then(response => {
            return response.data;
        }).then(response => {
            if(response.length > 0) {
                var respuesta = response[0];
                cookies.set('id_usuario', respuesta.id_usuario, {path: "/"});
                cookies.set('us_nombre', respuesta.us_nombre, {path: "/"});
                cookies.set('us_email', respuesta.us_email, {path: "/"});
                cookies.set('us_pass', respuesta.us_pass, {path: "/"});
                window.location.href="./alert";
            } else {
                alert('El correo o la contraseña no son correctos');
            }
        }).catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        if(cookies.get('us_email')) {
            window.location.href="./alert";
        }
    }

    render() {
        return (
            <Card className="formCard">
                <Card.Title className="text-center cardTitle">Ingresa tus datos</Card.Title>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Correo"
                    className="mb-3"
                >
                    <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        name="useremail"
                        onChange={this.handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel 
                    controlId="floatingPassword" 
                    label="Contraseña"
                >
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        name="password" 
                        onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted formText">
                        ¿Olvidaste la contraseña?
                    </Form.Text>
                </FloatingLabel>
                <Button variant="primary" type="submit" className="button" onClick={ () => this.userLogin() }>
                    Ingresar
                </Button>
                <Card.Text className="text-center cardText">
                    ¿No tienes cuenta aún? ¡Regístrate!
                </Card.Text>
            </Card>
        );
    }
}

export default FormLogin;