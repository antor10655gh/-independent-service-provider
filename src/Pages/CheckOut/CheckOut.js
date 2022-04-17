import React from "react";
import { useParams } from "react-router-dom";
import "./CheckOut.css";

const CheckOut = () => {
  let { checkoutId, picture } = useParams();
  return (
    <div>
      <h1>{checkoutId}</h1>
    </div>
  );
};

export default CheckOut;
