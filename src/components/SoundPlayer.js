import AudioPlayer from 'react-modular-audio-player';
import React from 'react'
import {useEffect, } from 'react'
import $ from "jquery"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Carousel, Container, Section } from 'react-bootstrap'

const SoundPlayer = () => {
    let playlist = [
        { src: "https://storage.cloud.google.com/song-files/kaizer%20song%20release.wav?authuser=2",
          title: "Kaizer's Song",
          artist: "Kaizer" },
      ];

    useEffect(() => {
        $("#audioContainer").hide()
    }, [])

    return(
        <Container id="audioContainer" fluid style={{backgroundColor: "#f74209", border: "5px solid black"}}>
            <AudioPlayer 
      audioFiles={playlist}
      playerWidth="100%"
      fontSize="1.5rem"
      iconSize="1.5rem"
      sliderClass="my-slider"
      playIcon="https://storage.cloud.google.com/soonspins_site_images/play-button-arrowhead.svg?authuser=2"
      playHoverIcon="https://storage.cloud.google.com/soonspins_site_images/play-button-arrowhead.svg?authuser=2"
      pauseIcon="https://storage.cloud.google.com/soonspins_site_images/pause-multimedia-big-gross-symbol-lines.svg?authuser=2"
      pauseHoverIcon="https://storage.cloud.google.com/soonspins_site_images/pause-multimedia-big-gross-symbol-lines.svg?authuser=2"
    />
        </Container>
    );
    
}

export default SoundPlayer

  