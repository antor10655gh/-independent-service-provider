import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <NavDropdown title="Blog" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/blog1">
                  Blog-1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog2">
                  Blog-2
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog3">
                  Blog-3
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link className="pe-lg-3" as={Link} to="/about">
                About
              </Nav.Link>
              {user ? (
                <Button onClick={handleSignOut} className="logOut-btn">
                  Log Out
                </Button>
              ) : (
                <Nav.Link id="login-btn" eventKey={2} as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
