import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import NavigationBar from './NavigationBar';
const App = () => {
    return(
        <Container fluid>
            <Row>
                <Col md={12}>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <NavigationBar/>
                </Col>
            </Row>
        </Container>
    )
};

export default App;