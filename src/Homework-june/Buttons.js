import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Counter from './Counter';
import Modal from 'react-bootstrap/Modal';

export default function Buttons() {

    const [increment, setIncrement] = useState(0)
    const [show, setShow] = useState(false);

    const handleClose = () => { setShow(false); setIncrement(0) };
    const handleShow = () => setShow(true);

    const add = (incrementer) => {
        setIncrement(increment + incrementer)

    }

    console.log(increment)

    return (
        <div>
            <div className="wrapper">
                <div className="btnGroup">
                    <Button variant="success" onClick={() => add(1)}>+1</Button>
                    <Button variant="success" onClick={() => add(5)}>+5</Button>
                    <Button variant="success" onClick={() => add(10)}>+10</Button>
                    <Button variant="success" onClick={() => add(50)}>+50</Button>
                    <Button variant="success" onClick={() => add(67)}>+67</Button>
                    <Button variant="success" onClick={() => add(100)}>+100</Button>
                    {increment !== 0 ? <Button variant="danger" onClick={handleShow}>Reset</Button> : ''}
                </div>

                <Counter result={increment} />

            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Reset was pressed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your counter is set back to 0!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Ok
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}