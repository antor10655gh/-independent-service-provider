import React from "react";
import "./About.css";
import aboutMe from "../../images/about-me.jpg";

const About = () => {
  return (
    <div
      style={{ background: "#e2e2e2" }}
      className="container-fluid p-3 p-lg-5"
    >
      <div className="container p-5">
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col-lg-5">
            <div className="about-banner">
              <img className="img-fluid" src={aboutMe} alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about-details p-4">
              <h1>About Me</h1>
              <h3>
                Designer & <span style={{ color: "orange" }}>Developer</span>
              </h3>
              <p>
                It's Antor, Professional Web Developer. I love to write code,
                it's my passion. I am here to help you, I am here to design your
                web page.I can help you to describe yourself in the best way. No
                matter how difficult your web page is, I'll find an easy way and
                complete your work anyway. Stay connect with me……..😊
              </p>
              <button className="letsTalk-btn">let's talk</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
