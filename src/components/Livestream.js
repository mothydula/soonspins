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
    const [artistName, setArtistName] = useState("DJ KPMADMAN")
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
                    <h1 className="title-h1" style={{ wordWrap: "break-word", transform: "uppercase" }}>WATCH {artistName.toUpperCase()}'S PERFOMANCE FRIDAY</h1>
                </Container>
            </Jumbotron>

            {/*<Container fluid id="twitch-video" style={{ backgroundColor: "#black", color: "white", marginBottom: 30, alignItems: "center", textAlign: "-webkit-center" }}>*/}
            {/*<ReactPlayer width="75%" height="75%" url={"https://twitch.tv/"+twitchUsername} />*/}
            {/*<Player>
                    <source src="https://secure17.syncusercontent.com/mfs-60:b44caf170a3fe151935d45576276b89d=============================/p/pool_mix_large.mp4?allowdd=0&datakey=psi4I5Rg18L/IGFCDjRjoGD9Mn+1yJJG9wPf1xMkpmzMyN+3yciBwCvuXduWBeJx0NNtsxwT60zYScczbOav3uRhL08sG5RKVeer+6Cwx79Bqol01nkUatoqX1lvDuIDQHqjsSuQq4xMlNW5niqvxSngpF5DpqbhenoZ2Y7636L4nqjlfqU3IvU5afpaOdEpScEBObAtr0dtO3UB5SHqMwLTNBMdno05jr/Xreu2TU5WSiYRwG5/VbMrhD5yBJ7b2G/MdiwBEjv5O71qlbVgWl5MXQ6eRaIW+ZYKwsb8HI5BiQqy0tP6G6g0jiiQZs+br8mvr0efTekVsIgiARh4CQ&engine=ln-3.1.52&errurl=T86QdfyHfjb77EHNqedL70g4fe83d31wAStjM0ZE6sJkOtqavLSAdJnwMJvtKbZ178iJSiimYWnGun2jfaqRkYRHiTQbU1qRZNUuVHc6duiIdaOxtrte/9aN9omEKYDNunKgfv6rFKPpwvAdvCrC2Y6rCpGeuSjZ49VstBzFT9yGc4Y9BKrNxVgT8E/CpMini2stMX8Im7EY7G1sKSyP2wZ5GHxFYoWZ3RVrBXmVocUfpYA3TvSpMYO+A7RvEBs47GXBRe46pNLDUw38K+ZbYTN8LCr3RsmQBCRhj6gfnUyiIovKdoEUVub6Ral8sT+gjnh/p1JDdsyDeuZvtq3SGA==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0icG9vbF9taXhfbGFyZ2UubXA0IjtmaWxlbmFtZSo9VVRGLTgnJ3Bvb2xfbWl4X2xhcmdlLm1wNDs&ipaddress=c4f54f395e55012345dd03ee62d8f2e4a63f201d&linkcachekey=00cb6f250&linkoid=1056630003&mode=100&sharelink_id=9511779960003&timestamp=1602557088989&uagent=e895f8dbb5fbd5c0c8337dd6de65c793d9138d36&signature=29935584d6680b983f2001996f101c9c22ed540f&cachekey=60:b44caf170a3fe151935d45576276b89d=============================" />
                </Player>*/}
            {/*</Container>*/}
            <footer style={{ textAlign: "end", bottom: 0, position: "fixed", width: "100%" }} className="footer">
                <div className="container-fluid">
                    © 2020 SOONSPINS
      </div>
            </footer>
        </div>
    )
}

export default Livestream