import React from "react";
import { useParams } from "react-router-dom";
import bookImg from "../../images/book-img.svg";
import "./CheckOut.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  let { checkoutName } = useParams();

  const handleBooking = () => {
    toast("Booking Successful");
  };
  return (
    <div className="container py-3 py-lg-4">
      <header className="text-center mb-4 mb-lg-5">
        <h2>
          Booking For <span style={{ color: "orange" }}>{checkoutName}</span>
        </h2>
        <div
          style={{
            width: "150px",
            borderBottom: "3px solid orange",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center">
        <div className="col">
          <div className="book-banner">
            <img src={bookImg} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="book-details">
            <form action="">
              <div className="inputBox">
                <h3>Where to</h3>
                <input type="text" placeholder="place name" required />
              </div>
              <div className="inputBox">
                <h3>How many</h3>
                <input type="number" placeholder="number of guest" required />
              </div>
              <div className="inputBox">
                <h3>Arrivals</h3>
                <input type="date" required />
              </div>
              <div className="inputBox">
                <h3>Leaving</h3>
                <input type="date" required />
              </div>
              <input onClick={handleBooking} type="submit" value="Book Now" />
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
