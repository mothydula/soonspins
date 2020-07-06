import React, { useRef, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card, Col, Button, Jumbotron, Container, CardDeck } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-modular-audio-player';
import Artist from './Artist'
const Artists = (props) => {
  const artists = props.artists
  const rowRef = useRef()
  const [rowHeight, setRowHeight] = useState(0)
  let i = 0

  let playlist = [
    {
      src: "https://storage.cloud.google.com/song-files/kaizer%20song%20release.wav?authuser=2",
      title: "Song",
      artist: "Singer"
    },
    {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      title: "Another Song",
      artist: "Another Singer"
    }
  ];

  useEffect(() => {
    console.log(rowRef.current.style.height)

  }, [])
  useEffect(() => {
    console.log()
  }, [rowHeight])

  let rearrangedPlayer = [
    {
      className: "tier-top",
      style: { margin: "0.3rem" },
      innerComponents: [
        {
          type: "play",
          style: { width: "fit-content" }
        },
        {
          type: "rewind",
          style: { width: "fit-content" }
        },
        {
          type: "forward",
          style: { width: "fit-content" }
        },
        {
          type: "volume"
        }
      ]
    },
    {
      className: "tier-bottom",
      style: { margin: "0rem 0.3rem 0.3rem 0.3rem" },
      innerComponents: [

        {
          type: "time",
          style: { width: "fit-content" }
        },
        {
          type: "seek"
        }

      ]
    }
  ]

  return (
    <div>
      <div className="line"></div>

          <div style={{ backgroundColor: "grey", borderWidth: 2, borderColor: "white", padding: 5, width: "100%" }}>
            <AudioPlayer
              fontColor="white"

              audioFiles={playlist}
              playerWidth="fit-content"
              fontSize="15px"
              iconSize="1.5rem"
              fontFamily="titling-gothic-fb-wide, sans-serif"
            />
          </div>
          <div className="line"></div>
      <Col>
        
        <Jumbotron fluid style={{ backgroundColor: "black", marginBottom: 0 }}>
          <Container>
            <h1 className="title-h1">FEATURED ARTISTS</h1>
          </Container>
        </Jumbotron>
        <Row lg={4} ref={rowRef} className="artist-row" style={{ width: "100%" }}>

          {Object.entries(artists).map((entry, i) =>

            <Col style={{ marginBottom: 30 }}>
              <Card style={{ width: "100%", height: "100%", marginBottom: 5 }}>
                <Card.Img variant="top" src="https://i.ibb.co/YDdYMJt/MXaZMwX.png" className="card-pic" />
                <Card.Body >
                  <Card.Title style={{ fontWeight: 700 }}>{entry[0]}</Card.Title>
                  <Card.Text>

                    {entry[1]}
                  </Card.Text>
                  <Button style={{ backgroundColor: "transparent", borderColor: "white", borderRadius: 0 }}>Learn more.</Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
        <div className="line"></div>
        
      </Col>
    </div>
  )
}

export default Artists