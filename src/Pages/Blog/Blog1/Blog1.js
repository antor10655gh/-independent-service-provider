import React from "react";
import "./Blog1.css";
import blog1 from "../../../images/blog/blog1.jpg";

const Blog1 = () => {
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center mb-4 mb-lg-5">
        <h2>Difference between Authorization and Authentication ?</h2>
        <div
          style={{
            width: "350px",
            borderBottom: "3px solid orange",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <div className="blog1-banner">
            <img className="img-fluid w-75" src={blog1} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="authorization my-4">
            <h3>Authorization</h3>
            <ul>
              <li>
                While in authorization process, person’s or user’s authorities
                are checked for accessing the resources.
              </li>
              <li>
                While this process is done after the authentication process.
              </li>
              <li>While in this process, users or persons are validated.</li>
              <li>While it needs user’s privilege or security levels.</li>
            </ul>
          </div>
          <div className="authorization my-4">
            <h3>Authentication</h3>
            <ul>
              <li>
                In authentication process, the identity of users are checked for
                providing the access to the system.
              </li>
              <li>It is done before the authorization process.</li>
              <li>In authentication process, users or persons are verified.</li>
              <li>It needs usually user’s login details.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
