import React, { useEffect, useState } from "react";
import "./Gallery.css";
import SingleGallery from "./SingleGallery/SingleGallery";

const Gallery = () => {
  const [gallerys, setGallerys] = useState([]);
  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((json) => setGallerys(json));
  }, []);
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center mb-4 mb-lg-5">
        <h2>
          Our <span style={{ color: "orange" }}>Gallery</span>
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
        {gallerys.map((gallery) => (
          <SingleGallery key={gallery.id} gallery={gallery}></SingleGallery>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
