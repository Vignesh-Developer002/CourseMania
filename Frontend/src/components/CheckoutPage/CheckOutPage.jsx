import React, { useState } from "react";
import "../CheckoutPage/CheckOutPage.css";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import assets from "../../assets/asset";
import { ImInstagram } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { educations } from "../../assets/asset.js";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { fetchUserData } from "../data/data.jsx";
import { useContext } from "react";
import { globalStore } from "../context/StoreContext.jsx";

const CheckOutPage = () => {
  const [overlayMenuBar, setOverLayMenuBar] = useState(false);
  const Navigate = useNavigate();

  const { cartItems, certiItem, getCertificateTotal, getTotal } =
    useContext(globalStore);
  const { courseData } = fetchUserData("http://192.168.1.82:4000/courses");
  const { certificateData } = fetchUserData(
    "http://192.168.1.82:4000/Certification"
  );

  let res;
  let courseTotal = getTotal();
  let certificateTotal = getCertificateTotal();
  if (courseTotal !== 0 && certificateTotal !== 0) {
    res = Math.trunc(courseTotal + certificateTotal);
  } else if (courseTotal > 0) {
    res = Math.trunc(courseTotal);
  } else if (certificateTotal > 0) {
    res = Math.trunc(certificateTotal);
  }

  return (
    <div className="checkout-container">
      {/* flex */}
      <div className="checkout-nav">
        <h1 onClick={() => Navigate("/")}>CourseMania</h1>
        {/* flex */}
        <div className="nav-lists">
          {/* flex */}
          <div className="nav-links">
            <Link>Home</Link>
            <Link>Courses</Link>
            <Link>Careers</Link>
            <Link>Blog</Link>
            <Link>About Us</Link>
          </div>
          {/* flex */}
          <div className="user-imgs">
            <img src={assets.user_img} alt="" />
            <span>Lina</span>
            <FaAngleDown className="down-arrow" />
          </div>
        </div>
        <RxHamburgerMenu
          onClick={() => setOverLayMenuBar(true)}
          className="Menu_Bar"
        />
      </div>

      {/* ------------------------- */}
      {/* Menu-bar for mobile devices */}
      {/* <MenuBar overlayMenuBar={overlayMenuBar} setOverLayMenuBar={setOverLayMenuBar} /> */}
      {/* Menu-bar for mobile devices */}
      {/* <MenuBar setCheckOutMenu={setCheckOutMenu} checkoutMenu={checkoutMenu} /> */}

      <div className={overlayMenuBar ? "menu-overlay" : "none"}>
        {/* flex */}
        <div className="cross_icon">
          <RxCross2
            onClick={() => setOverLayMenuBar(false)}
            className="cross"
          />
        </div>
        <hr className="hr-line" />
        <div className="user-pic">
          <img className="userIcon" src={assets.user_img} alt="" />
          {/* flex */}
          <div className="user_name">
            <span>Lina</span>
            <RiArrowDropDownLine className="down" />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="navigation-contend">
          <Link>Home</Link>
          <Link>Courses</Link>
          <Link>Careers</Link>
          <Link>Blog</Link>
          <Link>About Us</Link>
        </div>
        <hr className="hr-line" />
      </div>

      {/* ------------------------- */}

      {/* flex */}
      <div className="checkout-main">
        <div className="left-side-checkout">
          {/* flex-column */}
          <div className="checkout-head">
            <h1>Checkout</h1>
            <p>card Type</p>
            {/* flex */}
            <div className="card-type">
              <div className="grey-border">
                <img src={assets.Paypal_icon} alt="" />
              </div>
              <div className="grey-border">
                <img src={assets.american_icon} alt="" />
              </div>
              <div className="grey-border">
                <img src={assets.visa_icon} alt="" />
              </div>
              <div className="grey-border">
                <img src={assets.color_circle} alt="" />
              </div>
            </div>
          </div>

          {/* flex-column */}
          <form className="checkout-form">
            {/* flex-column */}
            <div className="card-name">
              <label id="name">Name on Card</label>
              <input type="text" id="name" placeholder="Enter name on Card" />
            </div>
            {/* flex-column */}
            <div className="card-no">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Enter Card Number"
              />
            </div>
            {/* flex */}
            <div className="expire-date">
              <div className="expire-date-col">
                <label htmlFor="expire-date">Expiration Date ( MM/YY )</label>
                <input
                  type="text"
                  id="expire-date"
                  placeholder="Enter Expire Date"
                />
              </div>
              <div className="cvc">
                <label htmlFor="cvc">CVC</label>
                <input type="text" id="cvc" placeholder="Enter CVC" />
              </div>
            </div>
            <p className="save">Save my information for faster checkout</p>
            <button className="confirm">Confirm Payment</button>
          </form>
        </div>

        <div className="right-side-checkout">
          <h2>Summary</h2>
          {/* flex-column */}
          <div className="teaching-container">
            {/* flex */}

            {/* -----------------course-start-------------------------- */}
            {courseData.map((course, i) => {
              if (cartItems[course.id]) {
                return (
                  <div key={i}>
                    <div className="teaching">
                      <img src={assets.teaching_icon} alt="" />
                      <div className="teaching-para">
                        <p className="para-3">{course.name} </p>
                        <p className="para-2">{course.duration}</p>
                        <span>${Math.trunc(course.old_price)}</span>
                      </div>
                    </div>
                    <hr className="summary-line" />
                  </div>
                );
              }
            })}
            {/* -------------------Course-end------------------------ */}

            {/* -----------------certificate-start-------------------------- */}
            {certificateData.map((course, i) => {
              if (certiItem[course.id]) {
                return (
                  <div key={i}>
                    <div className="teaching">
                      <img src={assets.teaching_icon} alt="" />
                      <div className="teaching-para">
                        <p className="para-3">{course.name} </p>
                        <p className="para-2">{course.duration}</p>
                        <span>${Math.trunc(course.old_price)}</span>
                      </div>
                    </div>
                    <hr className="summary-line" />
                  </div>
                );
              }
            })}
            {/* -------------------Certificate-end------------------------ */}
            {/* flex-column */}
            <div className="price-container">
              <div className="sub-total">
                <p className="left-title">Subtotal</p>
                {/* Math.trunc(getTotal()) */}
                <p className="price">${res ? res : Number(0)}</p>
              </div>
              <hr className="total-line" />

              <div className="coupon">
                <p className="left-title">Coupon Discount</p>
                <p className="price">0 %</p>
              </div>
              <hr className="total-line" />

              <div className="tax">
                <p className="left-title">Tax</p>
                <p className="price">$5</p>
              </div>
              <hr className="total-line" />

              <div className="total">
                <p className="total-black">Total</p>
                <p className="total-price">
                  {/* getTotal() ? Math.trunc(getTotal()) */}$
                  {res ? res + 5 : Number(0)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education -content */}
      <div className="top-education">
        <h1>Top Education offers and deals are listed here</h1>

        {/* flex */}
        <div className="education-subcontent">
          {/* position-relative */}
          {educations.map((education) => {
            return (
              <div className="square" key={education.id}>
                <div className="img-content">
                  <img src={education.img} alt="" />
                </div>

                {/* absolute */}
                <div className="overlay-content">
                  {/* flex-column */}
                  <div className="percent">
                    <span>{education.percentage}</span>
                    <div className="education-paras">
                      <h1>{education.heading} </h1>
                      <p>{education.para}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* bg-green */}
      <div className="education-footer">
        {/* flex */}
        <div className="left-side-content">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>

          <ul>
            <li>Udemy Business</li>
            <li>Teach On Udemy</li>
            <li>Get The App</li>
          </ul>

          <ul>
            <li>Help And Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* flex */}
        <div className="right-side-content">
          <Link>Follow Us :</Link>

          <div className="social-logo">
            <ImInstagram className="logo" />
            <FaFacebookSquare className="logo" />
            <FaTwitter className="logo" />
            <FaYoutube className="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
