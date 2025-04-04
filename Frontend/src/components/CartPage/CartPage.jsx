import React, { useContext } from "react";
import "../CartPage/CartPage.css";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import assets from "../../assets/asset.js";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { globalStore } from "../context/StoreContext.jsx";
import { fetchUserData } from "../data/data.jsx";

const CartPage = () => {
  const { courseData } = fetchUserData("http://192.168.1.82:4000/courses");
  const { certificateData } = fetchUserData(
    "http://192.168.1.82:4000/Certification"
  );

  const {
    addToCart,
    removeFromCart,
    cartItems,
    certiItem,
    getTotal,
    addToCartCerti,
    removeFromCerti,
    getCertificateTotal,
  } = useContext(globalStore);
  const [checkoutMenu, setCheckOutMenu] = useState(false);

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

  function handleMenuBar() {
    setCheckOutMenu(false);
  }
  const navigate = useNavigate();

  return (
    // width-80%
    <div className="cartpage-container">
      {/* flex */}
      <div className="cartpage-nav">
        <h1 onClick={() => navigate("/")}>CourseMania</h1>
        <div className="nav-list">
          <Link to="/">Home</Link>
          <Link>Courses</Link>
          <Link>Careers</Link>
          <Link>Blog</Link>
          <Link>About Us</Link>
          {/* flex */}
          <div className="profile">
            <img src={assets.user_img} alt="" />
            {/* flex */}
            <div className="user-content">
              <span>Lina</span>
              <FaAngleDown />
            </div>
          </div>
        </div>
        <RxHamburgerMenu
          onClick={() => setCheckOutMenu(true)}
          className="Menu_Bar"
        />
      </div>

      {/* ------------------------- */}
      {/* Menu-bar for mobile devices */}
      {/* <MenuBar setCheckOutMenu={setCheckOutMenu} checkoutMenu={checkoutMenu} /> */}

      <div className={checkoutMenu ? "menu-overlay" : "none"}>
        {/* flex */}
        <div className="cross_icon">
          <RxCross2 onClick={() => handleMenuBar()} className="cross" />
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

      <div className="cartpage-sup-content">
        {/* flex */}
        <div className="location">
          <span className="Home-title">Home /</span>
          <span className="cart-title">Cart</span>
        </div>
        {/* flex-column */}
        <div className="cart-list-content">
          {/* flex */}
          <div className="card-head">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          {/* flex */}
          {/* ---------------------Course-start--------------------------- */}
          {courseData.map((course, i) => {
            if (cartItems[course.id] > 0) {
              return (
                <div className="cart-details" key={i}>
                  <div className="img-heading">
                    {/* object */}
                    <img src={assets.course_img_2} alt="" />
                    <p>
                      {course.name.length < 14
                        ? course.name + "...."
                        : course.name.slice(0, 14) + "..."}
                    </p>
                  </div>
                  <p className="price">${Math.trunc(course.old_price)}</p>
                  {/* flex */}
                  <div className="quantity-container">
                    <div className="quantity">
                      <span>{cartItems[course.id]}</span>
                      {/* flex-column */}
                      <div className="arrows">
                        <FaAngleUp
                          onClick={() => addToCart(course.id)}
                          className="dolble-arrow"
                        />
                        <FaAngleDown
                          onClick={() => removeFromCart(course.id)}
                          className="dolble-arrow"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sub-total-1">
                    <span>
                      ${Math.trunc(cartItems[course.id] * course.old_price)}
                    </span>
                  </div>
                </div>
              );
            }
          })}
          {/* ---------------------Course-end--------------------------- */}

          {/* ---------------------Certificate-start--------------------------- */}
          {certificateData.map((certi, i) => {
            if (certiItem[certi.id] > 0) {
              return (
                <div className="cart-details" key={i}>
                  <div className="img-heading">
                    <img src={assets.certification_img_2} alt="" />
                    <p>
                      {certi.name.length < 14
                        ? certi.name + "...."
                        : certi.name.slice(0, 14) + ".."}
                    </p>
                  </div>
                  <p className="price">${Math.trunc(certi.old_price)}</p>
                  {/* flex */}
                  <div className="quantity-container">
                    <div className="quantity">
                      <span>{certiItem[certi.id]}</span>
                      {/* flex-column */}
                      <div className="arrows">
                        <FaAngleUp
                          onClick={() => addToCartCerti(certi.id)}
                          className="dolble-arrow"
                        />
                        <FaAngleDown
                          onClick={() => removeFromCerti(certi.id)}
                          className="dolble-arrow"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sub-total-1">
                    <span>
                      ${Math.trunc(certiItem[certi.id] * certi.old_price)}
                    </span>
                  </div>
                </div>
              );
            }
          })}
          {/* ---------------------Certificate-end--------------------------- */}
          {/* flex */}
          <div className="shop-btns">
            <button onClick={() => navigate("/")}>Return To shop</button>
            <button onClick={() => navigate("/CheckoutPage")}>
              Update Cart
            </button>
          </div>
        </div>
        {/* flex */}
        <div className="bottom-card-details">
          {/* flex */}
          <div className="left-side-coupon">
            <input type="text" placeholder="coupon code" />
            <button>Apply coupon</button>
          </div>

          {/* flex-column */}
          <div className="cart-total">
            <h3>Cart Total</h3>
            {/* flex */}
            <div className="subtotal">
              <p>subtotal:</p>
              {/* Math.trunc(getTotal()) */}
              <p>${res}</p>
            </div>
            <hr className="cart-line" />
            {/* flex */}
            <div className="shipping">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr className="cart-line" />
            {/* flex   */}
            <div className="Total">
              <p>Total:</p>
              {/* Math.trunc(getTotal()) */}
              <p>${res}</p>
            </div>

            {/* flex */}
            <div className="proceed-checkout">
              <button onClick={() => navigate("/CheckOutPage")}>
                Procees to checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-footer">
        {/* flex */}
        <div className="footer-sub">
          <div className="about-us">
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="course-list">
            <ul>
              <li>Udemy Business</li>
              <li>Teach On Udemy</li>
              <li>Get The App</li>
            </ul>
          </div>
          <div className="help-support">
            <ul>
              <li>Help And support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* flex */}
        <div className="follow-us-content">
          <Link>Follow Us:</Link>
          {/* flex */}
          <div className="social-icon-list">
            <ImInstagram className="soc-icons" />
            <FaFacebookSquare className="soc-icons" />
            <FaTwitter className="soc-icons" />
            <FaYoutube className="soc-icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
