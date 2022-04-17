import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    toast(error.message);
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    toast("Sent email");
  };

  return (
    <div className="container py-2 py-lg-4">
      <div className="total-form mx-auto bg-white mt-4">
        <div className="just-form p-4">
          <header className="mb-4 text-start fw-bold">
            <h3>Create an account</h3>
          </header>
          <div className="form-details text-start">
            <Form onSubmit={handleSubmitForm}>
              <Form.Group className="mb-4" controlId="formBasicName1">
                <Form.Control
                  ref={firstNameRef}
                  type="text"
                  placeholder="First name"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicName2">
                <Form.Control
                  ref={lastNameRef}
                  type="text"
                  placeholder="Last name"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
                <Form.Control
                  ref={confirmPasswordRef}
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </Form.Group>
              <Button className="signUP-btn" type="submit">
                Create an account
              </Button>
              <ToastContainer />
            </Form>
            <div className="text-center mt-2">
              <span className="me-2">Already have an account?</span>
              <span>
                <Link style={{ color: "orange" }} to="/login">
                  Login
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

export default SignUp;
