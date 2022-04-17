import React from "react";
import "./Banner.css";
import banner from "../../images/banner/banner.png";

const Banner = () => {
  const icon = "fa-solid fa-earth-americas";
  return (
    <div className="container py-2 py-lg-5">
      <div className="row row-cols-1 row-cols-lg-2 pt-lg-5">
        <div className="col">
          <div className="banner">
            <img className="img-fluid" src={banner} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="banner-details p-3 p-lg-0">
            <h1>
              Travel With <span style={{ color: "orange" }}>Trawell</span>
            </h1>
            <p>
              Trawell is only for traveler. Because it's the one of the most
              popular travel company. The name and reputation of this company is
              spread all over the world.Everyone who travels with us travels
              with great joy.From the beginning till now no-one has any
              complaint.And we always think of the comfort and convenience of
              the clients.So we hope you too can travel the place of your choice
              with us.
            </p>
            <button className="explore-btn mt-lg-3">
              <span className="px-2">Explore</span>
              <i class="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
