import React, { useState } from 'react';
import { Button, Offcanvas, ListGroup } from 'react-bootstrap';

const options = [
    {
      name: 'Menú',
      scroll: true,
      backdrop: false,
    }
  ];
  
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
  
    return (
      <>
        <Button variant="" onClick={toggleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#">
                Inicio
                </ListGroup.Item>
                <ListGroup.Item action href="/alert">
                Alertas
                </ListGroup.Item>
                <ListGroup.Item action href="/location">
                Ubicación
                </ListGroup.Item>
                <ListGroup.Item action href="/packs">
                Paquetes
                </ListGroup.Item>
                <ListGroup.Item action href="/send">
                Envíos
                </ListGroup.Item>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}
  
function Example() {
    return (
        <>
        {options.map((props, idx) => (
            <OffCanvasExample key={idx} {...props} />
        ))}
        </>
    );
}
  
export default Example;