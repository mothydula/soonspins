import React from 'react'
import { useForm } from "react-hook-form";
import { useRef, useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import axios from 'axios'
import 'video.js/dist/video-js.css'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import $ from 'jquery'
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import '../Assets/css/default.min.css'
const Admin = () => {
    const { register, handleSubmit } = useForm();
    const {register: register2, handleSubmit: handleSubmit2} = useForm();
    const {register: register3, handleSubmit: handleSubmit3} = useForm();
    const onSubmit = data => console.log(data);
    const onSubmitTwo = twitch_username => {
        console.log(twitch_username)
        axios.post("/setTwitchUser", twitch_username).then(response =>
            {
                console.log(response)
            })
        .catch(
            error=> {
                console.log(error)
            }
        )
    };
    const onSubmitThree = about_text =>{
        console.log(about_text)
        axios.post("/setAboutSection", about_text).then(response =>
            {
                console.log(response)
            })
        .catch(
            error=> {
                console.log(error)
            }
        )
    };
    const { authState, authService } = useOktaAuth();
    
    useEffect(() => {
        $("body").css("background-color", "#F5AD0C")
    }, [])

    if (authState.isPending) {
        return <div>Loading...</div>;
    }

    const button = authState.isAuthenticated ?
    <button onClick={() => { authService.logout() }}>Logout</button> :
    <button onClick={() => { authService.login() }}>Login</button>;

    return (

        <div id="adminPage">
            <Header />
            <Jumbotron fluid style={{ backgroundColor: "#F5AD0C", marginBottom: 0 }}>
                    <Container>
                        <h1 className="title-h1">ADMIN PANEL</h1>
                    </Container>
                </Jumbotron>
            <Container>
                <Jumbotron fluid style={{ backgroundColor: "#F5AD0C", marginBottom: 0 }}>
                    <Container>
                        <h1 className="title-h1">Add New Featured Artist</h1>
                    </Container>
                </Jumbotron>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col><label for="artistName">Artist Name: </label></Col>
                        <Col><input name="artistName" ref={register({ required: true, maxLength: 20 })} /></Col>
                    </Row>
                    <Row>
                        <Col><label for="artistDescription">Artist Description: </label></Col>
                        <Col><input name="artistDescription" ref={register({ pattern: /^[A-Za-z]+$/i })} /></Col>
                    </Row>
                    <Row>
                        <Col><label for="imageUrl">Image URL: </label></Col>
                        <Col><input name="imageUrl" ref={register({ pattern: /^[A-Za-z]+$/i })} /></Col>
                    </Row>
                    <Row><input type="submit" /></Row>
                </form>
            </Container>

            <Container style={{marginBottom: 15}}>
            <Jumbotron fluid style={{ backgroundColor: "#F5AD0C", marginBottom: 0 }}>
                    <Container>
                        <h1 className="title-h1">Update Twitch Username</h1>
                    </Container>
                </Jumbotron>
            <form onSubmit={handleSubmit2(onSubmitTwo)}>
                    <Row>
                        <Col><label for="twitchUsername">Twitch Username: </label></Col>
                        <Col><input name="twitchUsername" ref={register2({ required: true})} /></Col>
                    </Row>
                    <Row>
                        <Col><label for="artistName">Artist Name: </label></Col>
                        <Col><input name="artistName" ref={register2({ required: true})} /></Col>
                    </Row>
                    <Row><input type="submit" /></Row>
                </form>
            </Container>
            <Container style={{marginBottom: 15}}>
            <Jumbotron fluid style={{ backgroundColor: "#F5AD0C", marginBottom: 0 }}>
                    <Container>
                        <h1 className="title-h1">Update About Section</h1>
                    </Container>
                </Jumbotron>
            <form onSubmit={handleSubmit3(onSubmitThree)}>
                    <Row>
                        <Col><label for="aboutText">About Text: </label></Col>
                        <Col><textarea name="aboutText" ref={register3({ required: true})} /></Col>
                    </Row>
                    <Row><input type="submit" /></Row>
                </form>
            </Container>
            <Container fluid>{button}</Container>
            <Footer />
        </div>
    )
}

export default Admin