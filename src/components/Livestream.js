import React from 'react'
import {useRef, useState, useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import videojs from 'video.js'
import VideoPlayer from './VideoPlayer'
import TwitchPlayerOne from './TwitchPlayer'
import 'video.js/dist/video-js.css'
import { Container } from 'react-bootstrap'
import $ from 'jquery'
const Livestream = () => {
    const [changeSource, setChangeSource] = useState(false)
    const containerRef = useRef()
    const [videoJsOptions, setVideoJsOptions] = useState({
        autoplay: true,
                controls: true,
                sources: [{
                  src: 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4',
                  type: 'video/mp4'
                }],
                height: $('.video-container').css("height"),
                width: $('.video-container').css("width")
        });
    useEffect(() => {
        console.log($('.video-container').css("height")+ " "+ $('.video-container').css("width"))
            setChangeSource(true)
           
        $(".video-js").css("width", "100%")
        $(".video-js").css("height", "100vh")
        //videojs(Object.keys(videojs.getPlayers())[0]).src('http://techslides.com/demos/sample-videos/small.mp4')
    }, [])
   
    return (
        <div >
            <Header />
            <Container className="video-container" fluid ref={containerRef} style={{height: "100vh", width: "100%"}}>
            <TwitchPlayerOne />
            </Container>
            <Footer />
        </div>
    )
}

export default Livestream