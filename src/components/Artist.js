import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Card, Button } from 'react-bootstrap'
const Artist = (props) => {
    return (
        <Col s={3}>
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}