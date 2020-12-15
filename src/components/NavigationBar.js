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
                <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                <Nav.Link as={NavLink} to='/join-us'>Join Us</Nav.Link>
                <NavDropdown title='Flight Operations' id='basic-nav-dropdown'>
                    <NavDropdown.Item as={NavLink} to='/operations/today'>Todays Operations</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/operations/map'>Live Map</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/operations/fleet'>Our Fleet</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/operations/hubs'>Our Hubs</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Crew Bag' id='basic-nav-dropdown'>
                    <NavDropdown.Item href='https://www.fsairlines.net/crewcenter/' target='_blank' rel='noopener noreferrer'>Crew Center</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/crew/setting-up'>Setting Up</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/crew/training'>Training</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/crew/booking'>Choosing and Booking Flights</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/crew/flying'>Flying Tips</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/crew/maintenance'>Aircraft Maintenance</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/crew/ranks'>Ranks</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/crew/rules'>Rules</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/crew/checklists'>Checklists and Guides</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/crew/liveries'>Liveries</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/crew/useful-links'>Useful Links</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavigationBar;