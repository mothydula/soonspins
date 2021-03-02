import React from 'react'
import Header from './Header'
import { Container, Jumbotron, Row } from 'react-bootstrap'
const testPage = () => {
    return (
        <div>
            <Header />
            <Jumbotron fluid style={{ backgroundColor: "transparent", marginBottom: 1000 }}>
                <Container>
                    <h1 className="title-h1" style={{ wordWrap: "break-word", transform: "uppercase" }}>COMING SOON</h1>
                </Container>
            </Jumbotron>
            <footer style={{ textAlign: "end", bottom: 0, position: "fixed", width: "100%" }} className="footer">
                <div className="container-fluid">
                    © 2020 SOONSPINS
      </div>
            </footer>
        </div>
    )
}

export default testPage
