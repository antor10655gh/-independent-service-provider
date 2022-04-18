import React, { useEffect, useState } from "react";
import Review from "./Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((json) => setReviews(json));
  }, []);
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center mb-4 mb-lg-5">
        <h2>
          Happy <span style={{ color: "orange" }}>Clients</span>
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
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
