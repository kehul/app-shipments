import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import '../assets/styles/FormAlert.scss';

function useAlerts() {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        fetch("https://otp.com.co/pruebas/front_2021/envios.json")
        .then(response => response.json())
        .then(datos => {
            setAlerts(datos)
        })
    }, [])

    return alerts
}

export default function FormCardAlert() {
    const alerts = useAlerts()

    return(
        <Card className="formCardUser">
            <Card.Title className="cardTitleUser">Mi lista de pre-alertas</Card.Title>
        </Card>
    )
}