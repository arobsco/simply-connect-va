import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';

import Home from '../Containers/Home';
import About from '../Containers/About';
import Fleet from '../Containers/Operations/Fleet';

const App = () => {
    return(
        <Container fluid>
            <BrowserRouter>
            <Row>
                <Col md={12}>
                    <NavigationBar/>
                </Col>
            </Row>
            <Row>
                <Col md={12} className='mt-1'>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/operations/fleet' component={Fleet}/>
                </Col>
            </Row>
            </BrowserRouter>
        </Container>
    )
};

export default App;