import React from "react";
import "./Review.css";

const Review = (props) => {
  const { id, name, picture, review } = props.review;
  return (
    <div className="col">
      <div className="slider">
        <div className="box">
          <img className="img-fluid" src={picture} alt="" />
          <h3>{name}</h3>
          <p>{review}</p>
          <div className="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
