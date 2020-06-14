import React from 'react'
import { useRef, useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import videojs from 'video.js'
import VideoPlayer from './VideoPlayer'
import TwitchPlayerOne from './TwitchPlayer'
import 'video.js/dist/video-js.css'
import { Container, Jumbotron, Row } from 'react-bootstrap'
import $ from 'jquery'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

const Livestream = () => {
    const [changeSource, setChangeSource] = useState(false)
    const containerRef = useRef()
    const [artistName, setArtistName] = useState("NULL")
    useEffect(() => {

        $("body").css("background-color", "#F5AD0C")
    }, [])
    useEffect(() => {
        let list = document.getElementById("twitch-embed");   // Get the <ul> element with id="myList"
 
        setChangeSource(true)
        if(list.childNodes.length > 1){
            console.log("boo")
            list.removeChild(list.childNodes[1]);
        }  
    }, [changeSource])
    return (
        <div id="livestream-page">

            <Header />

            <Jumbotron fluid style={{ backgroundColor: "#F5AD0C", marginBottom: 0 }}>
                <Container>
                    <h1 className="title-h1" style={{wordWrap: "break-word"}}>WATCH {artistName}'S LIVESTREAM BELOW</h1>
                </Container>
            </Jumbotron>

            <Container fluid id="twitch-video" style={{ height: "100vh", backgroundColor: "#F5AD0C", color: "#BD3712", marginBottom: 30}}>

                <ReactTwitchEmbedVideo  channel="desertheartsrecords" width="100%" height="100%" muted={true} />
            </Container>
            <Footer />
        </div>
    )
}

export default Livestream