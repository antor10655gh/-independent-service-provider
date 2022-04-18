import React from "react";
import "./Blog2.css";
import blog2 from "../../../images/blog/blog2.jpg";

const Blog2 = () => {
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center mb-4 mb-lg-5">
        <h2>Why are you using firebase ?</h2>
        <div
          style={{
            width: "250px",
            borderBottom: "3px solid orange",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <div className="blog1-banner">
            <img className="img-fluid " src={blog2} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="authorization my-4">
            <h3>Firebase Benefit</h3>
            <ul>
              <li>Create Application without backend server.</li>
              <li>No need extra money spent for backend server.</li>
              <li>Sync real time data in the application.</li>
              <li>Quick display data in the application.</li>
              <li>Faster then any backend web services.</li>
            </ul>
          </div>
          <div className="authorization my-4">
            <h3>Some Option for Authentication</h3>
            <ul>
              <li>
                Password-based authentication. Passwords are the most common
                methods of authentication.
              </li>
              <li>Multi-factor authentication.</li>
              <li>Certificate-based authentication.</li>
              <li>Biometric authentication.</li>
              <li>Token-based authentication.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
