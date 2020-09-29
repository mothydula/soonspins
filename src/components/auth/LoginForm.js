// src/LoginForm.jsx

import React, { useState } from 'react';
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import { useEffect } from 'react';
import $ from 'jquery'
import Footer from '../Footer'
import Header from '../Header'
const LoginForm = ({ issuer }) => {
    const { authService } = useOktaAuth();
    const [sessionToken, setSessionToken] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    useEffect(() => {
        $("body").css("background-color", "#F5AD0C")
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const oktaAuth = new OktaAuth({ issuer: issuer });
        oktaAuth.signIn({ username, password })
            .then(res => {
                const sessionToken = res.sessionToken;
                setSessionToken(sessionToken);
                // sessionToken is a one-use token, so make sure this is only called once
                authService.redirect({ sessionToken });
            })
            .catch(err => console.log('Found an error', err));
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    if (sessionToken) {
        // Hide form while sessionToken is converted into id/access tokens
        return null;
    }


    return (
        <div id="admin-login" style={{backgroundColor: "#F5AD0C"}}>
            <Header />
            <Jumbotron fluid style={{ backgroundColor: "#F5AD0C", marginBottom: 0 }}>
                <Container>
                    <h1 className="title-h1">ADMIN PANEL LOGIN</h1>
                </Container>
            </Jumbotron>
            <Container style={{backgroundColor: "#F5AD0C"}}>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <label>
                                Username:
                        </label>
                        </Col>
                        <Col>
                            <input
                                id="username" type="text"
                                value={username}
                                onChange={handleUsernameChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>
                                Password:
                        </label>
                        </Col>
                        <Col>
                            <input
                                id="password" type="password"
                                value={password}
                                onChange={handlePasswordChange} />
                        </Col>

                    </Row>
                    <Row>
                        <input id="submit" type="submit" value="Submit" />
                    </Row>
                </form>
            </Container>
            <footer style={{ textAlign: "end" }} className="footer fixed-bottom">
                <div className="container-fluid">
                    © 2020 SOONSPINS
                </div>
            </footer>
        </div>
    );
};
export default LoginForm;