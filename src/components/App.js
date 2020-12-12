import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import NavigationBar from './NavigationBar';
import Home from '../Containers/Home';
import About from '../Containers/About';

const App = () => {
    return(
        <Container fluid>
            <Row>
                <Col md={12}>
                    <Header/>
                </Col>
            </Row>
            <BrowserRouter>
            <Row>
                <Col md={12}>
                    <NavigationBar/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    
                </Col>
            </Row>
            </BrowserRouter>
        </Container>
    )
};

export default App;