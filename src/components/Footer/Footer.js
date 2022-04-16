import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row row-cols-1 row-cols-lg-3 p-2 p-lg-4">
        <div className="col">
          <div className="footer-left">
            <img src={logo} alt="" />
            <p className="text-justify mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
              laboriosam ut natus laudantium corporis, earum repellendus rem
              molestias cumque excepturi reprehenderit!
            </p>
          </div>
        </div>
        <div className="col">
          <h3 className="text-start">Link</h3>
          <nav className="mt-lg-5 mb-2 mb-lg-0">
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
        <div className="col text-start">
          <h3 className="pb-3">Contact</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button className="submit-btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <p>©copy right by- AM Antor</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
