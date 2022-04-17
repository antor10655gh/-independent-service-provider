import React from "react";
import "./ExtraService.css";

const ExtraService = (props) => {
  const { id, name, icon, description } = props.extraPackage;
  return (
    <div className="col text-center">
      <div className="card h-100 extraIcon pt-4">
        <i style={{ fontSize: "50px", color: "orange" }} className={icon}></i>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraService;
