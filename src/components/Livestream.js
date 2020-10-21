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
                    <h1 className="title-h1" style={{ wordWrap: "break-word", transform: "uppercase" }}>WATCH {artistName.toUpperCase()}'S PERFOMANCE BELOW</h1>
                </Container>
            </Jumbotron>

            <Container fluid id="twitch-video" style={{ backgroundColor: "#black", color: "white", marginBottom: 30, alignItems: "center", textAlign: "-webkit-center" }}>
            {/*<ReactPlayer width="75%" height="75%" url={"https://twitch.tv/"+twitchUsername} />*/}
            <Player>
                    <source src="https://secure17.syncusercontent.com/mfs-60:b44caf170a3fe151935d45576276b89d=============================/p/pool_mix_large.mp4?allowdd=0&datakey=lvRuxyHwQQorXcWcddRnWha8W82fmX10xROHgmYlv36ebSmbI/c2CbNfhBFi9WCzKr7nvVwhBG8aeCzEIQbe1UE65tF86nFUiQhNCu7UoNzrG5hDry0HM9ruCiTaRVVsSmApc0iLOQkZJ9WyZ2JdkmLuEHuReOTjidfHZimQiQ+oxWk2nECKkoebUV650HmWVZwSWH+9HcG4KSOZk2wTP+EUYSFwugBGQS9QtmvBxSSzogluYmakeg7sXQr/9mDOr0nN7wRsBCzqf6vG+XYR2LslnTtVndtAVeEQjh7+WjGXLUC/EB6CbfxkTaI7eQB881107pkiF5eAQyTHlW8hUg&engine=ln-3.1.54&errurl=YFpBk8R1/W8/q8TosPtaixPA5mMuuDA2nEG3Ksbh9pwXsvgykNpx+oTOBETzU4vh2S49gmBFYuY84SXfK2aasjVlzplCe503QPTPTI+uL9Evwq8kSSSZikmSd6Dh8sJqrQ4WjfepkCEzmfvligArH5PQ1a2aKSzofRbJv78SfjKQBVsDNQVeB6MvJzTZ9T8zq12Mjy/dhTPvMvfYvlbY5ZSo2AzzWlUlvnROhpUoUd1askIUP7Sf/xn9LHliXsVnRST/rSDL55F9iVUrOwRsyFdxwcFgc0VkkoM8J9qIEr3D2wK11x7kFl8XSXPDPTB1TSuNiioL1SjyDrgkKtO6VQ==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0icG9vbF9taXhfbGFyZ2UubXA0IjtmaWxlbmFtZSo9VVRGLTgnJ3Bvb2xfbWl4X2xhcmdlLm1wNDs&ipaddress=c4f54f395e55012345dd03ee62d8f2e4a63f201d&linkcachekey=00cb6f250&linkoid=1056630003&mode=100&sharelink_id=9511779960003&timestamp=1602899992591&uagent=e895f8dbb5fbd5c0c8337dd6de65c793d9138d36&signature=d4cbef56c0fd06054688937205cc01ff5a988383&cachekey=60:b44caf170a3fe151935d45576276b89d=============================" />
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