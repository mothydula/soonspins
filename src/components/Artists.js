import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card, Col, Button, Jumbotron, Container } from 'react-bootstrap'
import Artist from './Artist'
const Artists = (props) => {
    const artists = props.artists
    console.log(Object.entries(artists) + "huh")
    return (
        <div>
            <Jumbotron fluid style={{backgroundColor: "#434343", marginBottom: 0}}>
                <Container>
                    <h1 className="title-h1">FEATURED ARTISTS</h1>
                </Container>
            </Jumbotron>
            <Row className="artist-row" style={{ width: "100%" }}>
                {Object.entries(artists).map((entry) =>
                    <Col s={4}>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/YDdYMJt/MXaZMwX.png" className="card-pic"/>
                            <Card.Body>
                                <Card.Title>{entry[0]}</Card.Title>
                                <Card.Text>

                                    {entry[1]}
                                </Card.Text>
                                <Button variant="primary">Learn more.</Button>
                            </Card.Body>
                        </Card>

                    </Col>

                )}
            </Row>
        </div>
    )
}

export default Artists