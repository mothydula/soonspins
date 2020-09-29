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
        $("#page-background").css("background-color", "black")
    }, [])
  useEffect(() => {
    fetch('/getAboutSection').then(res => res.json()).then(data => {
        console.log(data)
        setAboutText(data['aboutText'])
    })
  }, [])
    return (
        <div id="page-background">

            <Header />

            <Jumbotron fluid style={{ backgroundColor: "black", marginBottom: 0 }}>
                <Container>
                    <h1 className="title-h1" style={{wordWrap: "break-word"}}>ABOUT SOONSPINS</h1>
                </Container>
            </Jumbotron>

            <Container id="about-text" style={{ height: "100vh", backgroundColor: "black", color: "white", WebkitAlignItems: "center"}}>
                <p style={{textAlign: "left", margin: "0 auto", position: "relative", width: "75%"}}>{aboutText}</p>
                
                
            </Container>
            <Footer />
        </div>
    )
}

export default About
