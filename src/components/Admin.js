import React from 'react'
import { useForm } from "react-hook-form";
import { useRef, useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'

import 'video.js/dist/video-js.css'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import $ from 'jquery'
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
const Admin = () => {
    const { register, handleSubmit } = useForm();
    const {register: register2, handleSubmit: handleSubmit2} = useForm();
    const onSubmit = data => console.log(data);
    const onSubmitTwo = data2 => console.log(data2);
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
                    <Row><input type="submit" /></Row>
                </form>
            </Container>
            <Container fluid>{button}</Container>
        </div>
    )
}

export default Admin