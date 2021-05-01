import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (<Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#dashboard">E-Kart</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/dashboard">Home</Nav.Link>
        <Nav.Link href="/mycart">My Cart</Nav.Link>
        <Nav.Link href="/orders">Orders</Nav.Link>
        <NavDropdown title="Settings" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Change Passwords</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>);
  }
}

export default Header;