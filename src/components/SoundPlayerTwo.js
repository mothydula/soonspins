import AudioPlayer from 'react-modular-audio-player';
import React from 'react'
import {useEffect, } from 'react'
import $ from "jquery"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Carousel, Container, Section } from 'react-bootstrap'

const SoundPlayerTwo = (props) => {
    let playlist = [
        {
          src: "pool_mix.mp3",
          title: "POOL MIX",
          artist: "DJ KPMADMAN"
        },
      ];

    useEffect(() => {
        $("#audioContainer2").hide()
    }, [])

    return(
        <Container id="audioContainer2" fluid style={{backgroundColor: "#f74209", border: "5px solid black"}}>
            <AudioPlayer 
      audioFiles={playlist}
      playerWidth="100%"
      fontSize="1.5rem"
      iconSize="1.5rem"
      sliderClass="my-slider"
      playIcon="play-button-arrowhead.svg"
      playHoverIcon="play-button-arrowhead.svg"
      pauseIcon="pause-multimedia-big-gross-symbol-lines.svg"
      pauseHoverIcon="pause-multimedia-big-gross-symbol-lines.svg"
    />
        </Container>
    );
    
}

export default SoundPlayerTwo
