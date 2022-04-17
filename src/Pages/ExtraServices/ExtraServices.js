import React from "react";
import useExtraPackages from "../../hooks/useExtraService/useExtraService";
import ExtraService from "../ExtraService/ExtraService";
import "./ExtraServices.css";

const ExtraServices = () => {
  const [extraPackages, setExtraPackages] = useExtraPackages();
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center mb-4 mb-lg-5">
        <h2>
          Our <span style={{ color: "orange" }}>Services</span>
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
        {extraPackages.map((extraPackage) => (
          <ExtraService
            key={extraPackage.id}
            extraPackage={extraPackage}
          ></ExtraService>
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;
