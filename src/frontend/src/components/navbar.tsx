"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navbarAccount = {
  label: "Profile",
  url: "#account"
}

const navbarEntries = [
  { label: "Balance", url: "#balance" },
  { label: "Settings", url: "#settings" },
  { label: "Exit", url: "#exit" }
];

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          CloverStack
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={navbarAccount.url}>
              {navbarAccount.label}
            </Nav.Link>
            <NavDropdown title="Burger" id="basic-nav-dropdown">
              {navbarEntries.map((entry, i) => (
                <NavDropdown.Item key={i} href={entry.url}>
                  {entry.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
