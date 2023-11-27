import { React } from "react"
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Component } from "react";
import { ContextComsumer } from "../Context/MyContext";
import Search from "./Search";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggleHanle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {

    return (
      <div className="header">
        <div className="container">
          <Navbar expand="md">
            <NavbarBrand href="/" className="navbrand">
              My Blog
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleHanle} />
            <Collapse navbar isOpen={this.state.isOpen}>
              <Nav className=" navlist" navbar>
                <NavItem>
                  <Link to="/" className="navlink">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/blogs" className="navlink">
                    Blogs
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

              <div>
                <Nav navbar>
                  <NavItem>
                    <Link to="/login" className="navlink">
                      Login
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/registration" className="navlink">
                      Registration
                    </Link>
                  </NavItem>

                  <NavItem>
                    <i class="fas fa-search"></i>
                  </NavItem>
                </Nav>
              </div>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
export default Header;