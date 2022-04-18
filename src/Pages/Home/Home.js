import React from "react";
import Banner from "../../components/Banner/Banner";
import ExtraServices from "../ExtraServices/ExtraServices";
import Gallery from "../Gallery/Gallery";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ExtraServices></ExtraServices>
      <Gallery></Gallery>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
