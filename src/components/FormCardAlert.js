import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../assets/styles/FormAlert.scss';

function useAlerts() {

	const [alerts, setAlerts] = useState([])

	useEffect(() => {
		fetch("http://localhost:3001/envios")
		.then(response => response.json())
		.then(datos => {
			setAlerts(datos)
		})
	}, [])

	return alerts
}

export default function FormCardAlert() {

	const alerts = useAlerts()

	return (

		<Card className="formCardAlert">
            <Card.Title className="cardTitleAlert">Mi lista de pre-alertas</Card.Title>

            
            {alerts.map(item => (
                <div key={item.id_envio} className="cardElement">
                    <Card.Subtitle className="mb-2 text-muted">Legion laptop</Card.Subtitle>
                    <p>{item.Discripcion}</p>
                    <Card.Text className="cardDate">
                        <small className="text-muted">{item.Fecha}</small>
                    </Card.Text>
                </div>
            ))}
            
        </Card>
	)
}