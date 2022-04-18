import React from "react";
import "./Contact.css";
import ContactImg from "../../images/contact-img.svg";

const Contact = () => {
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center mb-4 mb-lg-5">
        <h2>
          Our <span style={{ color: "orange" }}>Contact</span>
        </h2>
        <div
          style={{
            width: "150px",
            borderBottom: "3px solid orange",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col-lg-5">
          <div className="contact-banner">
            <img className="img-fluid" src={ContactImg} alt="" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="contact-form">
            <form action="">
              <div className="inputBox">
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
              </div>
              <div className="inputBox">
                <input type="number" placeholder="number" />
                <input type="text" placeholder="subject" />
              </div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <input
                className="contactBtn"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
