import React, { useRef, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card, Col, Button, Jumbotron, Container, CardDeck, CardColumns } from 'react-bootstrap'
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-modular-audio-player';
import Artist from './Artist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery"
const Artists = (props) => {
  const artists = props.artists
  const rowRef = useRef()
  const [rowHeight, setRowHeight] = useState(0)
  let i = 0
  useEffect(() => {
    $("#play-icon").html("<FontAwesomeIcon icon={faEllipsisH } color='white' />")
  }, [])
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
    <Container>
      <Row>
            <Container id="featured-artists" fluid style={{ marginBottom: 0, textAlign: "center", padding: 15, paddingTop: 30 }}>
              <h1 className="title-h1" style={{fontSize: "2rem"}}>SOONSPINS SPACE</h1>
            </Container>
          </Row>
        <Row ref={rowRef} className="artist-row" style={{ width: "100%", padding: 15, }}>

          {Object.entries(artists).map((entry, i) =>

            <Col md={3} style={{ marginBottom: 15 }}>
              <Card className="soonspins-card" style={{ marginBottom: 15, width: "100%", height: "100%" }}>
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
    </Container>
  )
}

export default Artists