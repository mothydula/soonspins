import React from 'react'
import { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Carousel, Container, Section, Button, Col, Card } from 'react-bootstrap'
import { thatReturnsArgument } from 'react-modular-audio-player';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-modular-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ReactPlayer from 'react-player';
import Plyr from 'react-plyr';
import { Player } from 'video-react';
import { BrowserView, MobileView } from 'react-device-detect';

import $ from "jquery";
const Body = () => {
  const [index, setIndex] = useState(0);
  const [timerToggle, setTimerToggle] = useState(true)
  const listenRef = useRef();
  const [listenText, setListenText] = useState("Listen Now")
  const [mediaPlayerToggle, setMediaPLayerToggle] = useState(false);
  const cardStyle= {margin: "0 auto"}
  const myMethod = () => {
    setIndex((oldIndex) => (oldIndex + 1) % 3);
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  let playlist = [
    {
      src: "peanutbutter_society_12.mp3",
      title: "PB SOCIETY 12",
      artist: "Tim"
    },
  ];
  const playAudio = () => {
    if (mediaPlayerToggle === false) {
      $("#audioContainer").slideDown("fast")
      setListenText("Hide")
      setMediaPLayerToggle(true);
    }
    else {
      let sounds = document.getElementsByTagName('audio');
      let i = 0;
      for(i=0; i<sounds.length; i++) sounds[i].pause();
      $("#audioContainer").slideUp("fast")
      setListenText("Listen Now")
      setMediaPLayerToggle(false);
    }
  }

  const playAudioMobile = () => {
    if (mediaPlayerToggle === false) {
      $("#audioContainer").slideDown("fast")
      setListenText("Hide")
      setMediaPLayerToggle(true);
      console.log("You fail winger")
      let player = document.getElementById("audioContainer");
      player.scrollIntoView();
      
    }
    else {
      let sounds = document.getElementsByTagName('audio');
      let i = 0;
      for(i=0; i<sounds.length; i++) sounds[i].pause();
      $("#audioContainer").slideUp("fast")
      setListenText("Listen Now")
      setMediaPLayerToggle(false);
    }
  }
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    fetch('https://soonspins.herokuapp.com/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time)
    })
  }, [])
  return (
    <div>
      <BrowserView>
        <Container fluid id="main-carousel" className="no-gutters" style={{ width: "100%" }}>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="kp_large.JPG"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>DJ KPMADMAN MIX COMING SOON</h3>
                <p>Wednesday September 30th 7PM</p>
                <Button ref={listenRef} onClick={playAudio} variant="outline-light">{listenText}</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>
              <Player className="carousel-height">
                <source src="trailer_final.mp4" />
              </Player>
              <Carousel.Caption>
                <h3>WELCOME TO SOONSPINS</h3>
                <p>Click to watch</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </BrowserView>
      <MobileView>
        <Col style={{alignItems: "center"}}>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="kp_large.JPG" />
              <Card.Body>
                <Card.Title>DJ KPMADMAN MIX COMING SOON</Card.Title>
                <Card.Text>
                Wednesday September 30th 7PM
    </Card.Text>
    <Button ref={listenRef} onClick={playAudioMobile} variant="outline-light">{listenText}</Button>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
            <Player>
                <source src="trailer_final.mp4" />
              </Player>
              <Card.Body>
                <Card.Title>WELCOME TO SOONSPINS</Card.Title>
                <Card.Text>
                Press play to watch
    </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </MobileView>
    </div>
  );
}

export default Body