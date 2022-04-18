import React from "react";
import Banner from "../../components/Banner/Banner";
import Contact from "../Contact/Contact";
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
      <Contact></Contact>
    </div>
  );
};

export default Home;
