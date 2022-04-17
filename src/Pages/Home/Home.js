import React from "react";
import Banner from "../../components/Banner/Banner";
import ExtraServices from "../ExtraServices/ExtraServices";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ExtraServices></ExtraServices>
    </div>
  );
};

export default Home;
