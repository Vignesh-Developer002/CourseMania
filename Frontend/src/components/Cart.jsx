import React, { useState } from "react";
import "../components/Cart.css";
import assets from "../assets/asset.js";
import { useNavigate } from "react-router-dom";
import { globalStore } from "./context/StoreContext.jsx";
import { useContext } from "react";

const Cart = ({
  id,
  courseName,
  status,
  duration,
  img,
  price,
  totalPurchase,
  course_type,
}) => {
  const navigate = useNavigate();
  const { addToCart, selectCourse } = useContext(globalStore);
  const [btnColor, setBtnColor] = useState(false);
  const [addPlus, setPlus] = useState("plus");

  function handleNavigate(courseId) {
    navigate("Coursepage");
    selectCourse(courseId);
  }

  function addCourseHandler(id) {
    setPlus("redTick");
    addToCart(id);
  }

  return (
    <>
      {/* flex */}

      <div className="parent-content">
        <div className="card-content">
          <div className="card-img">
            <span className="overlay">{status}</span>
            <img src={img} alt="" />
          </div>

          {/* flex */}
          <div className="card-main">
            <div className="card-body">
              {/* flex-column */}
              <div className="left-content">
                <p className="para-head">{courseName.slice(0, 16)} ...</p>
                <p className="duration">Duration : {duration}</p>
              </div>
              <div className="tick">
                <img
                  onClick={() => addCourseHandler(id)}
                  className="red-tick"
                  src={addPlus === "plus" ? assets.plus_icon : assets.red_tick}
                  alt=""
                />
                <span className="add">
                  {addPlus === "plus" ? "Add" : "Added"}
                </span>
              </div>
            </div>

            {/* flex */}
            <div className="rate-content">
              <span className="rate">${price}</span>
              <span className="combo">
                <i>*{course_type}</i>
              </span>
            </div>
            {/* flex-column */}
            <div className="course-logo">
              <img className="course-icon" src={assets.course_2} alt="" />
              <div className="star-ratings">
                <img src={assets.star_icon} alt="" className="star_icon" />
                <span className="rating-count">
                  <i>({totalPurchase})</i>
                </span>
              </div>
            </div>
            <div className="enroll-container">
              <button
                onClick={() => setBtnColor(true)}
                className={btnColor === false ? "enroll-btn" : "white-btn"}
              >
                {btnColor === true ? "Enroll Now" : "Buy Now"}
              </button>
            </div>
          </div>
        </div>

        <div className="bottom-link">
          <button className="read-more-1" onClick={() => handleNavigate(id)}>
            View More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
