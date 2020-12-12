import React from 'react';
import Header from './Header';
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {
    return(
        <Container fluid>
            <Row>
                <Col md={12}>
                    <Header/>
                </Col>
            </Row>
        </Container>
    )
};

export default App;