import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from './Parts/NavigationBar';
import Footer from './Parts/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Fleet from './Pages/Operations/Fleet';
import JoinUs from './Pages/JoinUs';

const App = () => {
    return(
        <Container fluid>
            <Router>
            <Row>
                <Col md={12}>
                    <NavigationBar/>
                </Col>
            </Row>
            <Row>
                <Col md={12} className='mt-1'>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/join-us' component={JoinUs}/>
                    <Route path='/operations/fleet' component={Fleet}/>
                </Col>
            </Row>
            </Router>
            <Footer/>
        </Container>
    )
};

export default App;