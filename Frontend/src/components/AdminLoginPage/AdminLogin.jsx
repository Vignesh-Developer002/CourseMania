import React, { useContext, useEffect, useState } from "react";
import "../AdminLoginPage/Adminlogin.css";
import assets from "../../assets/asset.js";
import { useNavigate } from "react-router-dom";
import { globalStore } from "../context/StoreContext.jsx";
import { Bounce, toast, Flip } from "react-toastify";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();
  // const { isBackBtnClick, setIsBackBtnClick } = useContext(globalStore);
  const [passwordShow, setPasswordShow] = useState(false);
  const [adminDetails, setAdminDetails] = useState({
    name: "",
    password: "",
  });

  const [error, setError] = useState({});

  function handleNavigate() {
    navigate("/");
    setIsBackBtnClick(false);
  }
  function handleAdminLogin(e) {
    const { name, value } = e.target;
    setAdminDetails({ ...adminDetails, [name]: value });
  }

  function handlePasswordShow() {
    setPasswordShow((prev) => !prev);
  }

  async function handleAdminData() {
    try {
      if (adminDetails.name && adminDetails.password) {
        let adminData = await axios.post(
          "http://192.168.1.82:4000/admins",
          adminDetails
        );

        if (
          adminData.status === 200 &&
          Object.keys(adminData.data.results[0])
        ) {
          toast.success("Welcome Admin!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
          });
          navigate("/Gallery");
          setAdminDetails({
            name: "",
            password: "",
          });
        }
      }
    } catch (err) {
      console.log(err.results);
      if (err.results === undefined) {
        toast.error("User not found !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
  }

  function handleAdminDataValidation(e) {
    e.preventDefault();
    setError(formValidation(adminDetails));
  }

  function formValidation(value) {
    let err = {};
    if (!value.name.length && !value.password.length) {
      err.name = "Name is required";
      err.password = "Password is required";
      toast.error("Please Login to Continue", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
    }

    if (!value.name) {
      err.name = "Name is required";
    } else if (value.name.length <= 5) {
      err.name = "Name must contain 5 character";
    }
    if (!value.password) {
      err.password = "Password is required";
    } else if (value.password.length <= 5) {
      err.password = "Password must contain 5 character";
    }
    if (value.name.length > 5 && value.password.length > 5) {
      err.name = "Looks good";
      err.password = "Looks good";
    }
    if (value.name.length > 5) {
      err.name = "Looks good";
    } else if (value.password.length > 5) {
      err.password = "Looks good";
    }

    return err;
  }

  // flex-center
  return (
    // bg-grey
    <div className="adminLogin-container">
      {/* main-card */}
      <div className="admin-main-content">
        <form
          className="admin-left-side"
          onSubmit={(e) => handleAdminDataValidation(e)}
        >
          <h1 className="head" onClick={() => handleNavigate()}>
            CourseMania
          </h1>
          {/* flex */}
          <div className="admin-head">
            <h1>WELCOME BACK, ADMIN!🖐</h1>
            <p>Please login to manage your E-learning platform.</p>
          </div>
          <hr className="horizontal_line" />

          {/* flex-column */}
          <div className="input-container-1">
            <div className="user-input">
              <img className="user_logo" src={assets.admin_icon} alt="" />
              <input
                className="user-admin"
                type="text"
                id="name"
                name="name"
                placeholder="username"
                autoComplete="off"
                value={adminDetails.name}
                onChange={(e) => handleAdminLogin(e)}
              />
            </div>
            <span
              className={
                error.name === "Looks good" ? "green-color" : "red-color"
              }
            >
              {error.name}
              {error.name ? "*" : <></>}
            </span>

            <div className="password-content">
              <img className="lock_log" src={assets.lock_icon} alt="" />
              <input
                className="user-admin"
                type={passwordShow ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                value={adminDetails.password}
                onChange={(e) => handleAdminLogin(e)}
              />
              {passwordShow ? (
                <img
                  className="password_show_logo"
                  src={assets.eye_open_icon}
                  alt=""
                  onClick={() => handlePasswordShow()}
                />
              ) : (
                <img
                  className="password-hide_logo"
                  src={assets.eye_hide_solid}
                  alt=""
                  onClick={() => handlePasswordShow()}
                />
              )}
            </div>
            <span
              className={
                error.password === "Looks good" ? "green-color" : "red-color"
              }
            >
              {error.password}
              {error.password ? "*" : <></>}
            </span>
            {/* flex */}
            <button
              className="admin-btn"
              type="submit"
              onClick={() => handleAdminData()}
            >
              <div className="btn-center">
                <h4>Login Now</h4>
                <img
                  className="logout_logo"
                  src={assets.admin_login_icon}
                  alt=""
                />
              </div>
            </button>
          </div>
        </form>

        {/* flex */}
        <div className="admin-right-side">
          <img className="right-side-bg" src={assets.rightSide_bg} alt="" />
          <div className="right-side-center-content">
            <img src={assets.right_side_center_logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
