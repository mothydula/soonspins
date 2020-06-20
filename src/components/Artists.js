import React, { useRef, useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card, Col, Button, Jumbotron, Container, CardDeck } from 'react-bootstrap'
import Artist from './Artist'
const Artists = (props) => {
    const artists = props.artists
    const rowRef = useRef()
    const [rowHeight, setRowHeight] = useState(0)
    let i = 0

    useEffect(() => {
        console.log(rowRef.current.style.height)

    }, [])
    useEffect(() => {
        console.log()
    }, [rowHeight])
    return (
        <div>
            <div className="line"></div>
            <Jumbotron fluid style={{ backgroundColor: "black", marginBottom: 0 }}>
                <Container>
                    <h1 className="title-h1">FEATURED ARTISTS</h1>
                </Container>
            </Jumbotron>
            <Row ref={rowRef} className="artist-row" style={{ width: "100%" }}>

                {Object.entries(artists).map((entry, i) =>

                    <Col xs={12} lg={3} style={{ margin: "auto" }}>
                        <Card >
                            <Card.Img variant="top" src="https://i.ibb.co/YDdYMJt/MXaZMwX.png" className="card-pic" />
                            <Card.Body >
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