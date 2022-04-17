import React from "react";
import "./SingleGallery.css";

const SingleGallery = (props) => {
  const { name, picture, description } = props.gallery;
  return (
    <div className="col">
      <div className="box">
        <img className="img-fluid" src={picture} alt="" />
        <div className="content">
          <h3>{name}</h3>
          <p>{description}</p>
          <button className="seeMore-btn">See More</button>
        </div>
      </div>
    </div>
  );
};

export default SingleGallery;
