import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Gender Reveal Scavenger Hunt</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            Boy?
          </NavItem>
          <NavItem eventKey={2} href="#">
            Girl?
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
