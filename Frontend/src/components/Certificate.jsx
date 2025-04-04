import React, { useContext } from "react";
import assets from "../assets/asset.js";
import "../components/Certificate.css";
import { useState } from "react";
import { globalStore } from "./context/StoreContext.jsx";
import { useNavigate } from "react-router-dom";

const Certificate = ({
  certificationName,
  img,
  trending,
  duration,
  price,
  totalPurchase,
  id,
  certificate_type,
}) => {
  const [btnColor, setBtnColor] = useState(false);
  const [addPlus, setPlus] = useState("plus");
  const { addToCartCerti, selectCertificate } = useContext(globalStore);
  const navigate = useNavigate();

  function handleCertificate(id) {
    selectCertificate(id);
    navigate("CoursePage");
  }

  function handleAdd(id) {
    setPlus("plus-icon-2");
    addToCartCerti(id);
  }
  return (
    // flex
    <div className="card-main-container">
      <div className="card-top">
        <div className="card-image">
          <span className="overlay-2">{trending}</span>
          <img className="course-image" src={img} alt="" />
        </div>

        <div className="card-body-2">
          {/* flex */}
          <div className="card-heading-main">
            {/* flex-column */}
            <div className="card-left-side">
              <p className="Card-heading">
                {certificationName.slice(0, 16)} ...
              </p>
              <p className="duration-2">
                <span className="green-span">Duration</span> :{" "}
                <strong>{duration}</strong>
              </p>
            </div>
            {/* flex-column */}
            <div className="card-right-side">
              <img
                onClick={() => handleAdd(id)}
                src={addPlus === "plus" ? assets.plus_icon : assets.red_tick}
                className="plus-icon-2"
                alt=""
              />
              <span className="Add-2">
                {addPlus === "plus" ? "Add" : "Added"}
              </span>
            </div>
          </div>
          {/* flex-column*/}
          <div className="certificate-logo">
            <div className="price">
              <p className="rate">
                {price}{" "}
                <i
                  style={{ color: "black", marginLeft: "10px" }}
                >{`(${certificate_type})*`}</i>
              </p>
            </div>
            <img className="certificate-logo-1" src={assets.course_3} alt="" />

            <div className="star-ratings">
              <img className="star-ratings-1" src={assets.star_icon} alt="" />
              <span className="users">
                <i>({totalPurchase})</i>
              </span>
            </div>
          </div>
          {/* button */}
          <div className="btn-main-container">
            <button
              onClick={() => setBtnColor(true)}
              className={btnColor === false ? "buy-now" : "white-btn"}
            >
              {btnColor === true ? "Enroll Now" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>

      {/* anchor */}
      <div className="link-bottom">
        <button onClick={() => handleCertificate(id)} className="certi-link">
          View More Info
        </button>
      </div>
    </div>
  );
};

export default Certificate;
