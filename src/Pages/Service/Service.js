import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, price, picture, shortDescription, time } = props.packagee;
  const navigate = useNavigate();

  const handleCheckOut = (name) => {
    navigate("/checkout/" + name);
  };
  return (
    <div class="col">
      <div class="card h-100">
        <div className="service-banner">
          <img className="img-fluid" src={picture} alt="" />
          <div className="price">
            <span>{price}</span>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star px-1"></i>
            <i class="fa-solid fa-star px-1"></i>
            <i class="fa-solid fa-star px-1"></i>
            <i class="fa-solid fa-star px-1"></i>
            <i class="fa-regular fa-star px-1"></i>
          </div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{shortDescription}</p>
        </div>
        <div className="checkout-details d-flex justify-content-between align-items-center p-3 pb-4">
          <button onClick={() => handleCheckOut(name)} className="checkout-btn">
            Book Now <i class="fa-regular fa-credit-card"></i>
          </button>
          <div>
            <i style={{ color: "orange" }} class="fa-regular fa-clock mx-1"></i>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
