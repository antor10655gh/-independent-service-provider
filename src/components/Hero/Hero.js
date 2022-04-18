import React from "react";
import "./Hero.css";
import video1 from "../../videos/vid-5.mp4";

const Hero = () => {
  return (
    <div>
      <section className="heroBanner" id="heroBanner">
        <div className="content">
          <h3>Adventure Is Worthwhile</h3>
          <p>Discover new places with us, adventure awaits.</p>
          <button className="discoverBtn">Discover More</button>
        </div>
        <div className="video-container">
          <video src={video1} id="video-slider" loop autoPlay muted></video>
        </div>
      </section>
    </div>
  );
};

export default Hero;
