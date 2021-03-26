import React from "react";
import {Nav, Navbar} from "react-bootstrap"

function GlobalNavbar(){
    return(
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Google Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/saved">Saved</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default GlobalNavbar;