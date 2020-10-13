import React from 'react'
import Header from './Header'
import { Container, Jumbotron, Row } from 'react-bootstrap'
const testPage = () =>{
    return (
        <div>
            <Header />
            <Jumbotron fluid style={{ backgroundColor: "transparent", marginBottom: 0 }}>
                <Container>
                    <h1 className="title-h1" style={{ wordWrap: "break-word", transform: "uppercase" }}>COMING SOON</h1>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default testPage