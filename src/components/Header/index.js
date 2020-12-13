import React from 'react';
import { Container, Jumbotron, Image } from 'react-bootstrap';
import './header.css';
const Header = () => {
    return(
        <Jumbotron fluid>
            <Container>
                <Image src='https://via.placeholder.com/150' rounded />
                <h1>Welcome to Simply Connect Virtual Airline!</h1>
            </Container>
        </Jumbotron>
    )
}

export default Header;