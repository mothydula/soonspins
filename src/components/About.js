import React from 'react'
import { useRef, useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import 'video.js/dist/video-js.css'
import { Container, Jumbotron, Row } from 'react-bootstrap'
import $ from 'jquery'
import {BrowserView, MobileView} from 'react-device-detect';

const About = () => {
    const [aboutText, setAboutText] = useState("")
    useEffect(() => {
        $("#page-background").css("background-color", "black")
    }, [])
  useEffect(() => {
    fetch('https://soonspins.herokuapp.com/getAboutSection').then(res => res.json()).then(data => {
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

            <Container fluid id="about-text" style={{ height: "100vh", backgroundColor: "black", color: "white", WebkitAlignItems: "center", textAlign: "center"}}>
                <p style={{textAlign: "left", margin: "0 auto", position: "relative", width: "50%", fontSize: "large", marginBottom: "15px"}}>
                    {/*aboutText*/}
                    Here at SOONSPINS our goal is to present the masses with high quality sounds and and high quality visuals. Inspired by a variety of mediums, SOONSPINS is truly independent and an ode to underground culture. 
                </p>
                <BrowserView>
                    <img src="/soonspins_2.png" height="20%" width="25%" alt="" style={{}}/>
                </BrowserView>
            </Container>
            <Footer />
        </div>
    )
}

export default About
