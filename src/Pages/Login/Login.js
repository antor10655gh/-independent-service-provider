import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  return (
    <div className="container py-2 py-lg-4">
      <div className="total-form mx-auto bg-white mt-4">
        <div className="just-form p-4">
          <header className="mb-4 text-start fw-bold">
            <h3>Please Login</h3>
          </header>
          <div className="form-details text-start">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Username or Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <span>
                  <Link style={{ color: "#e47657" }} to="/">
                    Forget Password
                  </Link>
                </span>
              </div>
              <Button className="login-btn" type="submit">
                Login
              </Button>
            </Form>
            <div className="text-center mt-2">
              <span className="me-2">Don't have an account?</span>
              <span>
                <Link style={{ color: "#e47657" }} to="/signup">
                  Create an account
                </Link>
              </span>
            </div>
          </div>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
