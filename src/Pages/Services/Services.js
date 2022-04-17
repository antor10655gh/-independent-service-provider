import React from "react";
import { useNavigate } from "react-router-dom";
import usePackage from "../../hooks/useService/useService";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [packages, setPackages] = usePackage();

  const navigate = useNavigate();

  const handleGetMoreBtn = () => {
    navigate("/services");
  };

  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center mb-4 mb-lg-5">
        <h2>
          Our <span style={{ color: "orange" }}>Packages</span>
        </h2>
        <div
          style={{
            width: "150px",
            borderBottom: "3px solid orange",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {packages.slice(0, 3).map((packagee) => (
          <Service key={packagee.id} packagee={packagee}></Service>
        ))}
      </div>
      <div className="row pt-5 text-center">
        <div className="col">
          <div className="more-service">
            <button onClick={handleGetMoreBtn} className="getMore-btn">
              <span className="px-2">Get More</span>
              <i class="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
