import React, { useContext, useState } from "react";
import "../components/NavBar.css";
import { FaShoppingCart } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { globalStore } from "./context/StoreContext.jsx";
import { fetchUserData } from "./data/data.jsx";
import { Link } from "react-router-dom";

const NavBar = ({
  setLoginData,
  setUserName,
  userLoggedIn,
  setUserLoggedIn,
  setLoginPage,
  setLogin,
  setIslogged,
}) => {
  const { cartItems, certiItem } = useContext(globalStore);

  let cartCount;
  let certiCount;
  for (let value in cartItems) {
    cartCount = cartItems[value];
  }

  for (let value in certiItem) {
    certiCount = certiItem[value];
  }

  function changeColor() {
    setUnderLine("About");
  }

  //Getting user name from local storage for display in home page
  let userName;
  if (localStorage.getItem("Name")) {
    const userNameFromLocalStorage = localStorage.getItem("Name");
    userName = userNameFromLocalStorage.slice(0, 1).toUpperCase();
    setUserLoggedIn(true);
  } else {
    localStorage.setItem("Name", "");
  }

  const navigate = useNavigate();
  const [Line, setUnderLine] = useState("Home");
  const [showMenu, setShowMenu] = useState(false); // for mobile device menu-bar
  const [showLogout, setShowLogout] = useState(false); // showing and hide the logout overlay or button

  function OnclickHandler() {
    // register form  setup
    setLoginPage(true); // for showing the register page
    setLogin(true); //  for conditionally render the register page input field
  }

  function OnclickLoginHandler() {
    // login page setup
    setLoginPage(true); // for showing the register page
    setIslogged(true); //  for conditionally render the login page input field
  }

  function logoutHandler() {
    setShowLogout(false); // showing and hide the logout overlay or button
    setUserLoggedIn(false); // checking and changing the profile of the user based on login is true or false
    setUserName({
      // clearing the user logout data  while clicking the logout btn
      name: "",
      email: "",
      password: "",
    });
    setLoginData({
      email: "",
      password: "",
    }); // clearing the user login data  while clicking the logout btn

    localStorage.removeItem("Name");
  }
  return (
    <>
      <div className="Nav-content">
        <h1>CourseMania</h1>
        <ul>
          <Link to="/">
            <li
              className={Line === "Home" ? "greenLine" : ""}
              onClick={() => setUnderLine("Home")}
            >
              Home
            </li>
          </Link>
          <a href="#">
            <li
              className={Line === "About" ? "greenLine" : ""}
              onClick={() => changeColor()}
            >
              About
            </li>
          </a>
          <div className="drop-Down-menu">
            <a href="#course">
              <li
                className={Line === "Course" ? "greenLine" : ""}
                onClick={() => setUnderLine("Course")}
              >
                Course{" "}
              </li>
            </a>
            <RiArrowDropDownLine className="dropDown" />
          </div>
          <a href="#tutor">
            <li
              className={Line === "Tutor" ? "greenLine" : ""}
              onClick={() => setUnderLine("Tutor")}
            >
              Tutor
            </li>
          </a>
          <a href="#footer">
            <li
              className={Line === "Contact" ? "greenLine" : ""}
              onClick={() => setUnderLine("Contact")}
            >
              Contact
            </li>
          </a>
        </ul>
        <div className="right-content">
          {/* showing the user profile in home page */}
          {userLoggedIn ? (
            <>
              <span
                className="userLoggedIn"
                onClick={() => setShowLogout(true)}
              >
                {userName}
              </span>
              <span
                className={showLogout ? "logout" : "logoutHidden"}
                onClick={() => logoutHandler()}
              >
                <CiLogout className="logout-icon" /> Logout
              </span>
            </>
          ) : (
            <>
              <button
                className="login-btn"
                onClick={() => OnclickLoginHandler()}
              >
                Login
              </button>
              <button className="reg-button" onClick={() => OnclickHandler()}>
                Register
              </button>
            </>
          )}

          <FaShoppingCart
            onClick={() => navigate("/CartPage")}
            size={30}
            color="#0E8585"
            className="cart"
          />

          {cartCount || certiCount ? <span className="red-dot"></span> : ""}
        </div>
        <div className="menu-content">
          <RxHamburgerMenu
            onClick={() => setShowMenu(true)}
            className="menu-icon"
          />
        </div>
      </div>

      {/* burger-icon */}
      <div className={showMenu ? "menu" : "hide"}>
        <div className="cross-icon">
          <RxCross2 onClick={() => setShowMenu(false)} className="cross" />
        </div>
        <hr className="white-line" />
        <div className="login-content">
          {userLoggedIn ? (
            <>
              <span
                className="userLoggedIn"
                onClick={() => setShowLogout(true)}
              >
                {userName}
              </span>
              <span
                className={showLogout ? "logout" : "logoutHidden"}
                onClick={() => logoutHandler()}
              >
                <CiLogout className="logout-icon" /> Logout
              </span>
            </>
          ) : (
            <>
              <button
                className="login-button"
                onClick={() => OnclickLoginHandler()}
              >
                Login
              </button>
              <button
                className="register-button"
                onClick={() => OnclickHandler()}
              >
                Register
              </button>
            </>
          )}

          <FaShoppingCart
            onClick={() => navigate("/CartPage")}
            className="cart-icon-menu"
          />
          {/* cartCount Indicator */}
          {cartCount ? <span className="overlay-1"></span> : ""}
        </div>
        <hr className="white-line" />

        <div className="menu-list">
          <ul className="list-content">
            <Link to="/">
              <li onClick={() => setShowMenu(false)} className="List">
                Home
              </li>
            </Link>
            <a href="#">
              <li onClick={() => setShowMenu(false)} className="List">
                About
              </li>
            </a>
            <a href="#course">
              <li onClick={() => setShowMenu(false)} className="List">
                Course
              </li>
            </a>
            <a href="#tutor">
              <li onClick={() => setShowMenu(false)} className="List">
                Tutor
              </li>
            </a>
            <a href="#footer">
              <li onClick={() => setShowMenu(false)} className="List">
                Contact
              </li>
            </a>
          </ul>
        </div>
        <hr className="white-line-2" />
        <div className="course-head">
          <h1>CourseMania</h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
