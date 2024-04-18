import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand style={{ margin: 0, padding: 0 }}>
                        <img
                            src={`${process.env.PUBLIC_URL}/Nicer-Lawns-LogoPNGTransparency.png`}
                            height="80" // Adjusted height for optimal vertical fit and square appearance
                            className="d-inline-block align-top" // This class helps align your image vertically
                            alt="Your Logo"
                            style={{ marginLeft: '-15px' }} // Adjust marginLeft to push the logo more to the left if needed
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact-us">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/services">
                            <Nav.Link>Services</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
