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
import SoundPlayer from './SoundPlayer'
import $ from "jquery";
const Body = () => {
  const [index, setIndex] = useState(0);
  const [timerToggle, setTimerToggle] = useState(true)
  const listenRef = useRef();
  const [listenText, setListenText] = useState("Listen Now")
  const [listenText2, setListenText2] = useState("Listen Now")
  const [mediaPlayerToggle, setMediaPLayerToggle] = useState(false);
  const [mediaPlayerToggle2, setMediaPLayerToggle2] = useState(false);
  const [audioButtonList, setAudioButtonList] = useState([])
  const [playlist, setPlaylist] = useState([
    {
      src: "",
      title: "",
      artist: ""
    },
  ])
  const cardStyle = { margin: "0 auto" }
  const myMethod = () => {
    setIndex((oldIndex) => (oldIndex + 1) % 3);
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  /*let playlist = [
    {
      src: "soonspins_intro_1.wav",
      title: "A SOONSPINS CHAT",
      artist: "SOONSPINS"
    },
  ];*/
  const playAudio = (playlistToChange, buttonRef) => {
    //let sounds = document.getElementsByTagName('audio');
    //let i = 0;
    //for (i = 0; i < sounds.length; i++) sounds[i].play();
    if ($("#audioContainer").is(":hidden") && $(buttonRef).html() === "Listen Now") {
      $("#audioContainer").slideDown("fast")
      console.log("HAAAAAAAAAAAAA" + $(buttonRef).html())
      setAudioButtonList((oldList) => { return [...oldList, buttonRef] })
      setMediaPLayerToggle(true);
      setMediaPLayerToggle2(false);
      var millisecondsToWait = 1000;
      setTimeout(function () {
        // Whatever you want to do after the wait
      }, millisecondsToWait);
      window.scrollBy({
        top: 100,
        left: 0,
        behavior: 'smooth'
      });
    }

    else {
      let i = 0;
      for (i = 0; i < audioButtonList.length; i++) {
        $(audioButtonList[i]).html("Listen Now")
      }

      setMediaPLayerToggle(false);

    }
    console.log(buttonRef.innerHTML)
    setPlaylist(playlistToChange);
  }

  const playAudioMobile = (playlistToChange, buttonRef) => {
    let sounds = document.getElementsByTagName('audio');
    let i = 0;
    for (i = 0; i < sounds.length; i++) sounds[i].pause();
    if ($("#audioContainer").is(":hidden")) {
      $("#audioContainer").slideDown("fast")
      console.log("HAAAAAAAAAAAAA" + $(buttonRef).html())
      setAudioButtonList((oldList) => { return [...oldList, buttonRef] })
      setMediaPLayerToggle(true);
      setMediaPLayerToggle2(false);
      console.log("You fail winger")
      let player = document.getElementById("audioContainer");
      player.scrollIntoView();

    }
    else {
      console.log("HAAAAAAAAAAAAA" + $(buttonRef).html())
      setAudioButtonList((oldList) => { return [...oldList, buttonRef] })
      setMediaPLayerToggle(true);
      setMediaPLayerToggle2(false);
      console.log("You fail winger")
      let player = document.getElementById("audioContainer");
      player.scrollIntoView()
    }
    console.log(buttonRef.innerHTML)
    setPlaylist(playlistToChange);
  }
  const playAudio2Mobile = () => {
    let sounds = document.getElementsByTagName('audio');
    let i = 0;
    for (i = 0; i < sounds.length; i++) sounds[i].pause();
    if (mediaPlayerToggle2 === false) {
      $("#audioContainer").hide()
      $("#audioContainer2").slideDown("fast")
      setListenText2("Hide")
      setListenText("Listen Now")
      setMediaPLayerToggle2(true);
      setMediaPLayerToggle(false);
      console.log("You fail winger")
      let player = document.getElementById("audioContainer2");
      player.scrollIntoView();

    }
    else {
      $("#audioContainer2").slideUp("fast")
      setListenText2("Listen Now")
      setMediaPLayerToggle2(false);
    }
  }
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    fetch('https://soonspins.herokuapp.com/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time)
    })
  }, [])
  useEffect(() => {
    console.log("rerender: " + $("#audioContainer").is(":visible"))
  }, [playlist])
  return (
    <div>
      <BrowserView>
        <Container fluid id="main-carousel" className="no-gutters" style={{ width: "100%" }}>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="soonspins-3.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>SOONSPINS PATREON UP NOW</h3>
                <p>Monday October 26th 12PM</p>
                <Button target="_blank" href="https://www.patreon.com/soonspace" variant="outline-light" >VISIT</Button> 
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="miami_pic_desktop.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>MIAMI BASS MIX OUT NOW</h3>
                <p>Wednesday October 20th 12PM</p>
                <span><Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "miami_mix.mp3",
                    title: "MIAMI BASS",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button3")} variant="outline-light" id="button3">{listenText}</Button> </span>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="kp_large.JPG"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>DJ KPMADMAN's POOL MIX OUT NOW</h3>
                <p>Friday October 16th 7PM</p>
                <span><Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "pool_mix.mp3",
                    title: "POOLMIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button2")} variant="outline-light" id="button2">{listenText}</Button> <Button href="https://soonspins.com/livestream" variant="outline-light">WATCH</Button></span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="ss_sc.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>A SOONSPINS CHAT</h3>
                <p>KP & Mothy Dula discuss the beginnings of and the context surrounding SOONSPINS</p>
                <Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "ssonspins_chat_1.mp3",
                    title: "A SOONSPINS CHAT",
                    artist: "SOONSPINS"
                  },
                ], "#button1-mobile")} variant="outline-light" id="button1-mobile">{listenText}</Button>
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
        <Col style={{ alignItems: "center" }}>
        <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="soonspins-3.png" />
              <Card.Body>
                <Card.Title>SOONSPINS PATREON UP NOW</Card.Title>
                <Card.Text>
                  Monday October 26th 12PM
    </Card.Text>
    <Button target="_blank" href="https://www.patreon.com/soonspace" variant="outline-light" >VISIT</Button>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="miami_pic_mobile.jpg" />
              <Card.Body>
                <Card.Title>MIAMI BASS MIX OUT NOW</Card.Title>
                <Card.Text>
                  Wednesday October 20th 12PM
    </Card.Text>
                <span><Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "miami_mix.mp3",
                    title: "MIAMI BASS",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button3-mobile")} id="button3-mobile" variant="outline-light">{listenText2}</Button> </span>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="kp_large.JPG" />
              <Card.Body>
                <Card.Title>DJ KPMADMAN'S POOL MIX OUT NOW</Card.Title>
                <Card.Text>
                  Friday October 16th 7PM
    </Card.Text>
                <span><Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "pool_mix.mp3",
                    title: "POOLMIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button2-mobile")} id="button2-mobile" variant="outline-light">{listenText2}</Button> <Button href="https://soonspins.com/livestream" variant="outline-light">WATCH</Button></span>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="ss_sc.jpg" />
              <Card.Body>
                <Card.Title>A SOONSPINS CHAT</Card.Title>
                <Card.Text>
                  KP & Mothy Dula discuss the beginnings of and the context surrounding SOONSPINS
    </Card.Text>
                <Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "ssonspins_chat_1.mp3",
                    title: "A SOONSPINS CHAT",
                    artist: "SOONSPINS"
                  },
                ], "#button1-mobile")} id="button1-mobile" variant="outline-light">{listenText}</Button>
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
      <SoundPlayer playlist={{ playlist: playlist }} />
    </div>
  );
}

export default Body