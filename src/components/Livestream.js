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
import ReactPlayer from 'react-player'
import { Player } from 'video-react';

const Livestream = () => {
    const [changeSource, setChangeSource] = useState(false)
    const containerRef = useRef()
    const [artistName, setArtistName] = useState("MAUX")
    const [twitchUsername, setTwitchUsername] = useState("")
    /*useEffect(() => {
        let list = document.getElementById("twitch-embed");   // Get the <ul> element with id="myList"

        setChangeSource(true)
        if (list.childNodes.length > 1) {
            console.log("boo")
            list.removeChild(list.childNodes[1]);
        }
    }, [changeSource])*/

    useEffect(() => {
        let unmounted = false

        fetch('https://soonspins.herokuapp.com/getTwitchUser').then(res => res.json()).then(data => {
            if (!unmounted) {
                console.log(data)
                setTwitchUsername(data['username'])
                setArtistName(data['artistName'])
            }

        })
        return () => { unmounted = true }
    }, [])
    return (
        <div id="livestream-page">

            <Header />

            <Jumbotron className="mb-5" fluid style={{ backgroundColor: "transparent", marginBottom: 0 }}>
                <Container>
                    <h1 className="title-h1" style={{ wordWrap: "break-word", transform: "uppercase" }}>WATCH MAUX'S PERFOMANCE BELOW</h1>
                </Container>
            </Jumbotron>

            <Container fluid id="twitch-video" style={{ backgroundColor: "#black", color: "white", marginBottom: 30, alignItems: "center", textAlign: "-webkit-center" }}>
            {/*<ReactPlayer width="75%" height="75%" url={"https://twitch.tv/"+twitchUsername} />*/}
            <Player>
                    <source src="https://storage.googleapis.com/soonspins-site-videos/maux1.m4v" />
                </Player>
            </Container>
            <footer style={{ textAlign: "end", bottom: 0, position: "fixed", width: "100%" }} className="footer">
                <div className="container-fluid">
                    © 2020 SOONSPINS
      </div>
            </footer>
        </div>
    )
}

export default Livestream