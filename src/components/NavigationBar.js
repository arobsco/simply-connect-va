import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const NavigationBar = () => {
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand as={Link} to='/'>Simply Connect Airlines</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                <Nav.Link as={NavLink} to="/about">Join Us</Nav.Link>
                <NavDropdown title='Flight Operations' id='basic-nav-dropdown'>
                    <NavDropdown.Item>Todays Operations</NavDropdown.Item>
                    <NavDropdown.Item>Live Map</NavDropdown.Item>
                    <NavDropdown.Item>Our Fleet</NavDropdown.Item>
                    <NavDropdown.Item>Our Hubs</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Crew Bag" id="basic-nav-dropdown">
                    <NavDropdown.Item>Crew Center</NavDropdown.Item>
                    <NavDropdown.Item>Setting Up FSAirlines</NavDropdown.Item>
                    <NavDropdown.Item>Booking Flights</NavDropdown.Item>
                    <NavDropdown.Item>Flying</NavDropdown.Item>
                    <NavDropdown.Item>Aircraft Maintenance</NavDropdown.Item>
                    <NavDropdown.Item>Ranks</NavDropdown.Item>
                    <NavDropdown.Item>Rules</NavDropdown.Item>
                    <NavDropdown.Item>Penalties</NavDropdown.Item>
                    <NavDropdown.Item>Checklists and Guides</NavDropdown.Item>
                    <NavDropdown.Item>Liveries</NavDropdown.Item>

                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavigationBar;