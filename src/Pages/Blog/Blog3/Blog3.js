import React from "react";
import "./Blog3.css";
import blog3 from "../../../images/blog/blog3.jpg";

const Blog3 = () => {
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center mb-4 mb-lg-5">
        <h2>
          What other services does firebase provide other than authentication ?
        </h2>
        <div
          style={{
            width: "450px",
            borderBottom: "3px solid orange",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col">
          <div className="blog1-banner">
            <img className="img-fluid " src={blog3} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="authorization my-4">
            <p>
              Owned by Google, Firebase is a complete package of products that
              allows to build web and mobile apps, improve the app quality and
              help your clients grow their business.
            </p>
          </div>
          <div className="authorization my-4">
            <h3>
              The dashboard displays your project's usage of Firebase-supported
              infrastructure products, including the following:
            </h3>
            <ul>
              <li>Cloud Storage.</li>
              <li>Cloud Firestore.</li>
              <li>Firebase Realtime Database.</li>
              <li>Firebase Hosting.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
