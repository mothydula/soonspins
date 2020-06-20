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
    const [twitchUsername, setTwitchUsername] = useState("")
    useEffect(() => {

        $("body").css("background-color", "black")
    }, [])
    useEffect(() => {
        let list = document.getElementById("twitch-embed");   // Get the <ul> element with id="myList"
 
        setChangeSource(true)
        if(list.childNodes.length > 1){
            console.log("boo")
            list.removeChild(list.childNodes[1]);
        }  
    }, [changeSource])
    
    useEffect(() => {
        fetch('/getTwitchUser').then(res => res.json()).then(data => {
            console.log(data)
            setTwitchUsername(data['TwitchUser'])
            setArtistName(data['ArtistName'])
          })
    }, [])
    return (
        <div id="livestream-page">

            <Header />

            <Jumbotron fluid style={{ backgroundColor: "black", marginBottom: 0 }}>
                <Container>
                    <h1 className="title-h1" style={{wordWrap: "break-word"}}>WATCH {artistName}'S LIVESTREAM BELOW</h1>
                </Container>
            </Jumbotron>

            <Container fluid id="twitch-video" style={{ height: "100vh", backgroundColor: "#black", color: "white", marginBottom: 30}}>

                <ReactTwitchEmbedVideo  channel={twitchUsername} width="100%" height="100%" muted={true} />
            </Container>
            <Footer />
        </div>
    )
}

export default Livestream