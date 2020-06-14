import React from 'react'
import { useRef, useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import 'video.js/dist/video-js.css'
import { Container, Jumbotron, Row } from 'react-bootstrap'
import $ from 'jquery'

const About = () => {
    const [aboutText, setAboutText] = useState("")
    useEffect(() => {
        setAboutText("hello")
        $("#page-background").css("background-color", "#F5AD0C")
    }, [])
    return (
        <div id="page-background">

            <Header />

            <Jumbotron fluid style={{ backgroundColor: "#F5AD0C", marginBottom: 0 }}>
                <Container>
                    <h1 className="title-h1" style={{wordWrap: "break-word"}}>ABOUT SOONSPINS</h1>
                </Container>
            </Jumbotron>

            <Container id="about-text" style={{ height: "100vh", backgroundColor: "#F5AD0C", color: "#BD3712" }}>
                {aboutText}
                
            </Container>
            <Footer />
        </div>
    )
}

export default About
