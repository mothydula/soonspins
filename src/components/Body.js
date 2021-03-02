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
  const [contentPayload, setContentPayload] = useState([])
  const [mixCloudPayload, setMixCloudPayload] = useState([])
  let iFrames = []
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
      $("#outer-playlist").html("");
      $("#outer-playlist").hide();
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

  const playMixCloudAudio = (embedCode, mobile) => {

    console.log("YOUNG")
    let sounds = document.getElementsByTagName('audio');
    console.log(sounds)
    let i = 0;
    for (i = 0; i < sounds.length; i++) sounds[i].pause();
    $("#audioContainer").hide()
    $("#outer-playlist").html(embedCode)
    $("#outer-playlist").slideDown("fast")
    $("#outer-playlist").children().attr('id','mixcloud-embed')
    console.log($("#outer-playlist").children()[0])
    let player = document.getElementById("audioContainer");

    if(mobile){
      let player = document.getElementById("outer-playlist");
      // player.scrollIntoView();
    }
  }

  useEffect(() => {

  }, [])

  const playAudioMobile = (playlistToChange, buttonRef) => {
    let sounds = document.getElementsByTagName('audio');
    let i = 0;
    for (i = 0; i < sounds.length; i++) sounds[i].pause();
    if ($("#audioContainer").is(":hidden")) {
      $("#outer-playlist").hide();
      $("#audioContainer").slideDown("fast")
      console.log("HAAAAAAAAAAAAA" + $(buttonRef).html())
      setAudioButtonList((oldList) => { return [...oldList, buttonRef] })
      setMediaPLayerToggle(true);
      setMediaPLayerToggle2(false);
      console.log("You fail winger")
      let player = document.getElementById("audioContainer");
      // player.scrollIntoView();

    }
    else {
      console.log("HAAAAAAAAAAAAA" + $(buttonRef).html())
      setAudioButtonList((oldList) => { return [...oldList, buttonRef] })
      setMediaPLayerToggle(true);
      setMediaPLayerToggle2(false);
      console.log("You fail winger")
      let player = document.getElementById("audioContainer");
      // player.scrollIntoView()
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
      // player.scrollIntoView();

    }
    else {
      $("#audioContainer2").slideUp("fast")
      setListenText2("Listen Now")
      setMediaPLayerToggle2(false);
    }
  }
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    console.log("rerender: " + $("#audioContainer").is(":visible"))
  }, [playlist])

  useEffect(() => {
    $("#outer-playlist").hide();
  }, [])

  useEffect(() => {
    fetch("https://soonspins-site.uc.r.appspot.com/getPostData").then(response => response.json()).then(data => {
      setContentPayload(data)
      console.log(data)
    }).catch(
      error => {
        console.log(error)
      }
    )
  }, [])

  useEffect(() => {
    fetch("https://soonspins-site.uc.r.appspot.com/getMixCloudData").then(response => response.json()).then(data => {
      setMixCloudPayload(data)
      console.log(data)

      console.log("YOUNG!")
    }).catch(
      error => {
        console.log(error)
      }
    )
  }, [])

  return (
    <div>
      <BrowserView>
        <Container fluid id="main-carousel" className="no-gutters" style={{ width: "100%", height: "50%", overflow:"auto" }}>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
            {mixCloudPayload.map((contentObject, index) => (
              <Carousel.Item style={{ width: "100%"}} id={index}>

                <img
                  className="d-block w-100 carousel-height"
                  src={contentObject['image_url']}
                  onClick={() => playMixCloudAudio(contentObject['embed_code'], false)}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{contentObject['title']}</h3>
                  <p>{contentObject['description']}</p>
                  <Button ref={listenRef} onClick={() => playMixCloudAudio(contentObject['embed_code'], false)} variant="outline-light" id="button">{listenText}</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
            {contentPayload.map((contentObject, index) => (
              <Carousel.Item style={{ width: "100%"}}>

                <img

                  className="d-block w-100 carousel-height"
                  src={contentObject['image_url']}
                  onClick={() => playMixCloudAudio(contentObject['embed_code'], false)}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{contentObject['content_title']}</h3>
                  <p>{contentObject['content_description']}</p>
                  {(contentObject['content_type'] === "audio") ? (<Button ref={listenRef} onClick={() => playAudio([
                    {
                      src: contentObject['content_url'],
                      title: contentObject['content_title'],
                      artist: contentObject['content_title']
                    },
                  ], "#button")} variant="outline-light" id="button">{listenText}</Button>) : (<Button variant="outline-light" href="https://soonspins.com/livestream" >WATCH NOW</Button>)}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
            {/*<Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/q_mix_pic.jpg"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3>DJQ MIX</h3>
                <p>This is tasty</p>
                <span><Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "https://storage.googleapis.com/song-files/q_mix.mp3",
                    title: "DJQ MIX",
                    artist: "DJQ"
                  },
                ], "#button8")} variant="outline-light" id="button8">{listenText}</Button> </span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/pootiecat_pic.jpg"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3>DJ POOTIECAT MIX</h3>
                <p>Enjoy your Wednesday :)</p>
                <span><Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "https://storage.googleapis.com/song-files/pootiecat_mix.mp3",
                    title: "DJ POOTIECAT MIX",
                    artist: "DJ POOTIECAT"
                  },
                ], "#button8")} variant="outline-light" id="button8">{listenText}</Button> </span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/psylasso_cover.jpg"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3>PSYLASSO EXPERIENCE MIX</h3>
                <p>What we do...</p>
                <span><Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "https://storage.googleapis.com/song-files/psylasso_mix.mp3",
                    title: "PSYLASSO EXPERIENCE MIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button8")} variant="outline-light" id="button8">{listenText}</Button> </span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/IMG-0007.JPG"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3>132 MIX</h3>
                <p>Eremsy's SOONSPINS debut</p>
                <span><Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "https://storage.googleapis.com/song-files/132_mix.mp3",
                    title: "132 MIX",
                    artist: "EREMSY"
                  },
                ], "#button8")} variant="outline-light" id="button8">{listenText}</Button> </span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/maux_pic.jpg"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3>MAUX DJ SET</h3>
                <p>Oh shit</p>
                <Button variant="outline-light" href="https://soonspins.com/livestream" >WATCH NOW</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/ds_pic_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3>DANCE THE STRESS AWAY MIX</h3>
                <p>2 step with a glass of whiskey straight</p>
                <span><Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "https://storage.googleapis.com/song-files/ds_mix.mp3",
                    title: "DANCE THE STRESS AWAY MIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button7")} variant="outline-light" id="button7">{listenText}</Button> </span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/jj_pic.jpg"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3>JARED JACKSON MIX</h3>
                <p>JJ.</p>
                <span><Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "https://storage.googleapis.com/song-files/jj_mix.mp3",
                    title: "JARED JACKSON MIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button6")} variant="outline-light" id="button6">{listenText}</Button> </span>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/bc_mix_pic.jpg"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3>BANDCAMP DAY MIX OUT NOW</h3>
                <p>Yea, we're late</p>
                <span><Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "https://storage.googleapis.com/song-files/bc_mix.mp3",
                    title: "BANDCAMP DAY MIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button5")} variant="outline-light" id="button5">{listenText}</Button> </span>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/nairobi_pic.jpg"
                alt="First slide"
              />
              <Carousel.Caption >
                <h3 style={{ color: "black" }} >NAIROBI UGANDA MIX OUT NOW</h3>
                <p style={{ color: "black" }} >Neighboring countries, neighborly sounds...</p>
                <span><Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "https://storage.googleapis.com/song-files/nairobi_uganda_mix.mp3",
                    title: "NAIROBI/UGANDA MIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button4")} variant="outline-dark" id="button4">{listenText}</Button> </span>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/soonspins-3.png"
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
                src="https://storage.googleapis.com/soonspins_site_images/miami_pic_desktop.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>MIAMI BASS MIX OUT NOW</h3>
                <p>Wednesday October 20th 12PM</p>
                <span><Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "https://storage.googleapis.com/song-files/miami_mix.mp3",
                    title: "MIAMI BASS",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button3")} variant="outline-light" id="button3">{listenText}</Button> </span>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/kp_large.JPG"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>DJ KPMADMAN's POOL MIX OUT NOW</h3>
                <p>Friday October 16th 7PM</p>
                <Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "https://storage.googleapis.com/song-files/pool_mix.mp3",
                    title: "POOLMIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button2")} variant="outline-light" id="button2">{listenText}</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>

              <img

                className="d-block w-100 carousel-height"
                src="https://storage.googleapis.com/soonspins_site_images/ss_sc.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>A SOONSPINS CHAT</h3>
                <p>KP & Mothy Dula discuss the beginnings of and the context surrounding SOONSPINS</p>
                <Button ref={listenRef} onClick={() => playAudio([
                  {
                    src: "https://storage.googleapis.com/song-files/ssonpins_chat_1.mp3",
                    title: "A SOONSPINS CHAT",
                    artist: "SOONSPINS"
                  },
                ], "#button1-mobile")} variant="outline-light" id="button1-mobile">{listenText}</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "100%" }}>
              <Player className="carousel-height">
                <source src="https://storage.googleapis.com/soonspins-site-videos/trailer_final.mp4" />
              </Player>
              <Carousel.Caption>
                <h3>WELCOME TO SOONSPINS</h3>
                <p>Click to watch</p>
              </Carousel.Caption>
            </Carousel.Item>*/}

          </Carousel>
        </Container>
      </BrowserView>
      <MobileView>
        <Col style={{ alignItems: "center" }}>
        { mixCloudPayload.map((contentObject, index) => (
            <Row>
              <Card className="soonspins-card" onClick={() => playMixCloudAudio(contentObject['embed_code'], false)}>

                <Card.Img variant="top"
                  src={contentObject['image_url']}
                  onClick={() => playMixCloudAudio(contentObject['embed_code'], false)}/>
                <Card.Body>
                  <Card.Title>{contentObject['title']}</Card.Title>
                  <Card.Text>{contentObject['description']}</Card.Text>
                  {<Button ref={listenRef} onClick={() => playMixCloudAudio(contentObject['embed_code'], true)} variant="outline-light" id="button">{listenText2}</Button>}
                </Card.Body>
              </Card>
            </Row>
          ))}
          {contentPayload.map((contentObject, index) => (
            <Row>
            {(contentObject['content_type'] === "audio") ? (<Button ref={listenRef} onClick={() => playAudioMobile([
              {
                src: contentObject['content_url'],
                title: contentObject['content_title'],
                artist: contentObject['content_title']
              },
            ], "#button")} variant="outline-none" id="button">{}
              <Card className="soonspins-card" >


                <Card.Img variant="top" src={contentObject['image_url']} />
                <Card.Body>
                  <Card.Title>{contentObject['content_title']}</Card.Title>
                  <Card.Text>{contentObject['content_description']}</Card.Text>
                  {(contentObject['content_type'] === "audio") ? (<Button ref={listenRef} onClick={() => playAudioMobile([
                    {
                      src: contentObject['content_url'],
                      title: contentObject['content_title'],
                      artist: contentObject['content_title']
                    },
                  ], "#button")} variant="outline-light" id="button">{listenText2}</Button>) : (<Button variant="outline-light" href="https://soonspins.com/livestream" >WATCH NOW</Button>)}
                </Card.Body>
              </Card>

              </Button>) : (<Button variant="outline-none" href="https://soonspins.com/livestream" >WATCH NOW</Button>)}
            </Row>
          ))}
          {/*<Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/q_mix_pic.jpg" />
              <Card.Body>
                <Card.Title>DJQ MIX</Card.Title>
                <Card.Text>
                  This is tasty
    </Card.Text>
                <span><Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "https://storage.googleapis.com/song-files/q_mix.mp3",
                    title: "DJQ MIX",
                    artist: "DJQ"
                  },
                ], "#button8-mobile")} id="button8-mobile" variant="outline-light">{listenText2}</Button> </span>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/pootiecat_pic.jpg" />
              <Card.Body>
                <Card.Title>DJ POOTIECAT MIX</Card.Title>
                <Card.Text>
                  Enjoy your Wednesday :)
    </Card.Text>
                <span><Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "https://storage.googleapis.com/song-files/pootiecat_mix.mp3",
                    title: "DJ POOTIECAT MIX",
                    artist: "DJ POOTIECAT"
                  },
                ], "#button8-mobile")} id="button8-mobile" variant="outline-light">{listenText2}</Button> </span>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/psylasso_cover.jpg" />
              <Card.Body>
                <Card.Title>PSYLASSO EXPERIENCE MIX</Card.Title>
                <Card.Text>
                  What we do...
    </Card.Text>
                <span><Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "https://storage.googleapis.com/song-files/psylasso_mix.mp3",
                    title: "PSYLASSO EXPERIENCE MIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button8-mobile")} id="button8-mobile" variant="outline-light">{listenText2}</Button> </span>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/IMG-0007.JPG" />
              <Card.Body>
                <Card.Title>132 MIX</Card.Title>
                <Card.Text>
                  Eremsy's SOONSPINS debut
    </Card.Text>
                <span><Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "https://storage.googleapis.com/song-files/132_mix.mp3",
                    title: "132 MIX",
                    artist: "EREMSY"
                  },
                ], "#button8-mobile")} id="button8-mobile" variant="outline-light">{listenText2}</Button> </span>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/maux_pic.jpg" />
              <Card.Body>
                <Card.Title>DJ MAUX SET</Card.Title>
                <Card.Text>
                  Oh shit.
    </Card.Text>
                <Button variant="outline-light" href="https://soonspins.com/livestream">WATCH NOW</Button>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/ds_pic_1.jpg" />
              <Card.Body>
                <Card.Title>DANCE THE STRESS AWAY MIX</Card.Title>
                <Card.Text>
                  2 step with a glass of whiskey straight
    </Card.Text>
                <span><Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "ds_mix.mp3",
                    title: "DANCE THE STRESS AWAY MIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button7-mobile")} id="button7-mobile" variant="outline-light">{listenText2}</Button> </span>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/jj_pic.jpg" />
              <Card.Body>
                <Card.Title>JARED JACKSON MIX</Card.Title>
                <Card.Text>
                  JJ.
    </Card.Text>
                <span><Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "https://storage.googleapis.com/song-files/jj_mix.mp3",
                    title: "JARED JACKSON MIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button6-mobile")} id="button6-mobile" variant="outline-light">{listenText2}</Button> </span>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/bc_mix_pic.jpg" />
              <Card.Body>
                <Card.Title>BANDCAMP DAY MIX OUT NOW</Card.Title>
                <Card.Text>
                  Yea we're late
    </Card.Text>
                <span><Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "https://storage.googleapis.com/song-files/bc_mix.mp3",
                    title: "BANDCAMP DAY MIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button5-mobile")} id="button5-mobile" variant="outline-light">{listenText2}</Button> </span>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/nairobi_pic.jpg" />
              <Card.Body>
                <Card.Title>NAIROBI UGANDA MIX OUT NOW</Card.Title>
                <Card.Text>
                  Neighboring countries, neighborly sounds...
    </Card.Text>
                <span><Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "https://storage.googleapis.com/song-files/nairobi_uganda_mix.mp3",
                    title: "NAIROBI/UGANDA MIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button4-mobile")} id="button4-mobile" variant="outline-light">{listenText2}</Button> </span>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/soonspins-3.png" />
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
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/miami_pic_mobile.jpg" />
              <Card.Body>
                <Card.Title>MIAMI BASS MIX OUT NOW</Card.Title>
                <Card.Text>
                  Wednesday October 20th 12PM
    </Card.Text>
                <span><Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "https://storage.googleapis.com/song-files/miami_mix.mp3",
                    title: "MIAMI BASS",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button3-mobile")} id="button3-mobile" variant="outline-light">{listenText2}</Button> </span>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/kp_large.JPG" />
              <Card.Body>
                <Card.Title>DJ KPMADMAN'S POOL MIX OUT NOW</Card.Title>
                <Card.Text>
                  Friday October 16th 7PM
    </Card.Text>
                <Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "https://storage.googleapis.com/song-files/pool_mix.mp3",
                    title: "POOLMIX",
                    artist: "DJ KPMADMAN"
                  },
                ], "#button2-mobile")} id="button2-mobile" variant="outline-light">{listenText2}</Button>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="soonspins-card">
              <Card.Img variant="top" src="https://storage.googleapis.com/soonspins_site_images/ss_sc.jpg" />
              <Card.Body>
                <Card.Title>A SOONSPINS CHAT</Card.Title>
                <Card.Text>
                  KP & Mothy Dula discuss the beginnings of and the context surrounding SOONSPINS
    </Card.Text>
                <Button ref={listenRef} onClick={() => playAudioMobile([
                  {
                    src: "https://storage.googleapis.com/song-files/ssonpins_chat_1.mp3",
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
                <source src="https://storage.googleapis.com/soonspins-site-videos/trailer_final.mp4" />
              </Player>
              <Card.Body>
                <Card.Title>WELCOME TO SOONSPINS</Card.Title>
                <Card.Text>
                  Press play to watch
    </Card.Text>
              </Card.Body>
            </Card>
          </Row>*/}
        </Col>
      </MobileView>
      <SoundPlayer playlist={{ playlist: playlist }} />
      <div id="outer-playlist"></div>
    </div>
  );
}

export default Body
