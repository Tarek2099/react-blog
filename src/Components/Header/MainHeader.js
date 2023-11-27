import React from 'react'
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";


const MainHeader = () => {
  const handleToggler = () => {};
  return (
    <div className="header">
      <div className="container">
        <Navbar>
          <NavbarBrand href="/" className="navbrand">
            My Blog
          </NavbarBrand>
          <NavbarToggler onClick={handleToggler} />
          <Collapse navbar className="ms-auto">
            <Nav className="navlist " navbar>
              <NavItem>
                <Link to="/" className="navlink">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="navlink">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="navlink">
                  Contact
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/write" className="navlink">
                  Write
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default MainHeader;