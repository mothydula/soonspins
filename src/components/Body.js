import React from 'react'
import {useState, useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Carousel, Container, Section, Button } from 'react-bootstrap'
import { thatReturnsArgument } from 'react-modular-audio-player';
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-modular-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ReactPlayer from 'react-player';
import Plyr from 'react-plyr';
import $ from "jquery";
const Body = () => {
    const [index, setIndex] = useState(0);
    const [timerToggle, setTimerToggle] = useState(true)
    const listenRef = useRef();
    const myMethod = ()=>{
      setIndex((oldIndex)=>(oldIndex+1)%3);
  }

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    let playlist = [
      { src: "https://storage.cloud.google.com/song-files/kaizer%20song%20release.wav?authuser=2",
        title: "Kaizer's Song",
        artist: "Kaizer" },
    ];
    const playAudio = () =>{
        $("#audioContainer").slideDown("fast")
    }
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(()=>{
      fetch('/time').then(res => res.json()).then(data => {
        setCurrentTime(data.time)
      })
    }, [])
    return (
      <Container fluid id="main-carousel" className="no-gutters" style={{width: "100%"}}>
      <Carousel  activeIndex={index} onSelect={handleSelect} interval={5000}>
        <Carousel.Item style={{height: "100%"}}>
          
          <img 
          
            className="d-block w-100"
            src="https://storage.cloud.google.com/soonspins_site_images/IMG_9521.JPG?authuser=2"
            alt="First slide"
          />
          <Carousel.Caption>
    <h3>DJ KPMADMAN MIX COMING SOON</h3>
            <p>Wednesday September 30th 7PM</p>
            <Button ref={listenRef} onClick={playAudio} variant="outline-light">Listen Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: "100%"}}>
          <img
            className="d-block w-100"
            src="https://static.fox32chicago.com/www.fox32chicago.com/content/uploads/2019/11/GETTY-kanye-west-maga-hat-trump.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height: "100%"}}> 
          <img
            className="d-block w-100"
            src="https://static.fox32chicago.com/www.fox32chicago.com/content/uploads/2019/11/GETTY-kanye-west-maga-hat-trump.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
    );
}

export default Body