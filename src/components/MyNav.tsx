import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../scss/MyNav.scss";
import { Link } from "react-router-dom";



const MyNav = () => {


  return (
    <Navbar bg="light" expand="lg" className="bg">
      <Container className="bg">
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Orders" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/">
              List Orders
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/insert">
              Insert Order
            </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item> */}
              
            </NavDropdown>
            <NavDropdown title="Customers" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/customers">
                List Customers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/customers">
                Insert Customer
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
