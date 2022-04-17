import React from "react";
import { useParams } from "react-router-dom";
import useService from "../../hooks/useService/useService";
import "./CheckOut.css";

const CheckOut = () => {
  const [services, setServices] = useService();
  let { checkoutId } = useParams();
  return (
    <div>
      <h1>{checkoutId}</h1>
    </div>
  );
};

export default CheckOut;
