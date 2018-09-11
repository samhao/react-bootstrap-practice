import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem /*, NavDropdown, MenuItem */
} from "react-bootstrap";

export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">CodeLife</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} to="/news">
              News
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
