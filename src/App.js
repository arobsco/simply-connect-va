import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from './Parts/NavigationBar';

import Home from './Pages/Home';
import About from './Pages/About';
import Fleet from './Pages/Operations/Fleet';

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