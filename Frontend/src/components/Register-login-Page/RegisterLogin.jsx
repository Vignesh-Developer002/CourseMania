import React, { useState } from "react";
import "../Register-login-Page/RegisterLogin.css";
import { CiSearch } from "react-icons/ci";
import { ImInstagram } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import assets from "../../assets/asset.js";
import { toast, Flip, Bounce } from "react-toastify";

const RegisterLogin = ({
  userName,
  setUserName,
  loginData,
  setLoginData,
  setUserLoggedIn,
  setLoginPage,
  login,
  setLogin,
  setIslogged,
}) => {
  const [formError, setFormError] = useState({}); // register form error handling
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginFormErr, setLoginFormErr] = useState({});

  // setting value to the state variables for register form
  function handelValues(e) {
    const { name, value } = e.target;
    setUserName({ ...userName, [name]: value });
  }

  //preventing the default behaviour
  function handleSubmit(e) {
    e.preventDefault();
    if (login) {
      setFormError(validate(userName)); //this for register form
      setIsSubmit(true);
      //Account  created successfully alert message
      if (Object.keys(formError).length === 0 && isSubmit) {
        toast.success("Your account has been created successfully", {
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
        setLogin(false);
        setIslogged(true);
        setLoginPage(true);
        setIsSubmit(false);
      }
    } else {
      setLoginFormErr(validateData(userName));
      if (!userName.name && !userName.email) {
        toast.error("You are not register", {
          position: "top-center",
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
      if (
        loginFormErr.email === "Email Match" &&
        loginFormErr.password === "password Match"
      ) {
        toast.success("Log in successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        setLogin(false);
        setIslogged(false);
        setLoginPage(false);
        setUserLoggedIn(true);
        localStorage.setItem("Name", userName.name);
      }
    }
  }

  // setting value to the state variables for login form
  function handleLoginValues(e) {
    const { value, name } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  // validate the register form data with login form data
  function validateData(values) {
    let err = {};
    if (!values.email && !values.password) {
      err.email = "Not match";
    }
    if (
      values.email.length > 0 &&
      loginData?.email?.length > 0 &&
      values.email === loginData.email
    ) {
      err.email = "Email Match";
    } else if (!loginData.email) {
      err.email = "Email required*";
    } else if (values.email !== loginData.email) {
      err.email = "Email Mismatch";
    }

    if (!values.password && !values.email) {
      err.password = "Not match";
    }
    if (
      values.password.length > 0 &&
      loginData.password.length > 0 &&
      values.password === loginData.password
    ) {
      err.password = "password Match";
    } else if (!loginData.password) {
      err.password = "password required*";
    } else if (values.password !== loginData.password) {
      err.password = "password Mismatch";
    }
    return err;
  }

  function validate(values) {
    const errors = {};
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.name) {
      errors.name = "User name is required *";
    } else if (values.name.length < 5) {
      errors.name = "User name must contain 5 characters";
    }
    if (!values.email) {
      errors.email = "Email is required *";
    } else if (regex.test(values.name)) {
      errors.email = "Enter the proper email";
    } else if (values.email.length < 5) {
      errors.email = "choose strong email address";
    }
    if (!values.password) {
      errors.password = "password is required *";
    } else if (values.password.length < 5) {
      errors.password = "Choose strong password";
    }
    return errors;
  }

  // By clicking the heading CourseMania redirect to home page
  function loginHandler() {
    setLogin(false); // register page input field disable
    setLoginPage(false); // for disable the register page
    setIslogged(false); ////login page input field disable
  }

  // By clicking the already have an account button
  function changeLoginPage() {
    setLogin(false);
    setIslogged(true);
    setLoginPage(true);
  }

  return (
    // <bg-transpernt>
    <div className="register-content-main">
      {/* center */}
      <div className="register-content">
        {/* flex */}
        <div className="reg-head">
          <h2 onClick={() => loginHandler()}>CourseMania</h2>

          <div className="nav">
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Sign Up</li>
            </ul>
          </div>

          {/* flex */}
          <div className="search-content">
            <input
              type="text"
              id="filter_value"
              autoComplete="off"
              placeholder="What are you looking for?"
            />
            <CiSearch className="search-icon-2" />
          </div>
        </div>

        <hr />
        {/* flex */}
        <div className="register-body">
          <div className="left-conntent">
            <img className="doll-icon-2" src={assets.doll_icon} alt="" />
          </div>

          {/* flex-column */}
          <form className="form-content" onSubmit={(e) => handleSubmit(e)}>
            {/* flex -column*/}
            <div className="form-heading">
              <h1 className={login ? "" : "green"}>
                {login ? "Create an account" : "Log in to CourseMania"}
              </h1>
              <p>Enter your detail below</p>
            </div>

            {/* flex-column */}
            <div className="input-container">
              {login ? (
                <>
                  <input
                    className="borderLess"
                    value={userName.name}
                    onChange={(e) => handelValues(e)}
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Name"
                  />
                  <span
                    style={{ color: "red", marginTop: "0px", fontSize: "13px" }}
                  >
                    {formError.name}
                  </span>

                  <input
                    className="borderLess"
                    value={userName.email}
                    onChange={(e) => handelValues(e)}
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder=" Email or Phone Number"
                  />
                  <span
                    style={{ color: "red", marginTop: "0px", fontSize: "13px" }}
                  >
                    {formError.email}
                  </span>

                  <input
                    className="borderLess"
                    value={userName.password}
                    onChange={(e) => handelValues(e)}
                    name="password"
                    autoComplete="off"
                    type="password"
                    placeholder="Password"
                  />
                  <span
                    style={{ color: "red", marginTop: "0px", fontSize: "13px" }}
                  >
                    {formError.password}
                  </span>
                </>
              ) : (
                <>
                  {" "}
                  <input
                    className="borderLess"
                    value={loginData.email}
                    onChange={(e) => handleLoginValues(e)}
                    name="email"
                    autoComplete="off"
                    type="text"
                    placeholder=" Email or Phone Number"
                  />
                  <span
                    className={
                      loginFormErr.email == "Email Match"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {loginFormErr.email}
                  </span>
                  <input
                    className="borderLess"
                    value={loginData.password}
                    onChange={(e) => handleLoginValues(e)}
                    name="password"
                    autoComplete="off"
                    type="password"
                    placeholder="Password"
                  />
                  <span
                    className={
                      loginFormErr.password == "password Match"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {loginFormErr.password}
                  </span>
                </>
              )}
            </div>

            {/* flex -column*/}
            {login ? (
              <>
                <div className="form-btn">
                  <button>Create Account</button>
                  {/* flex */}
                  <div className="google-btn">
                    <img src={assets.google_icon} alt="" />
                    <p>Sign up with Google</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="loginButton">
                  <button
                    onClick={()=>validateData()}
                    type="submit"
                    className="loginbtn"
                  >
                    Log in
                  </button>
                  <p>Forget Password?</p>
                </div>
              </>
            )}

            {/* flex */}

            {login ? (
              <>
                <div className="have-an-account">
                  <p>Already have an account?</p>
                  <button className="a" onClick={() => changeLoginPage()}>
                    Log in
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}

            {/*  */}
          </form>
        </div>

        {/* footer */}
        <div className="bg-green">
          <div className="register-footer">
            <ul className="about">
              <li>About</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>

            <ul className="business">
              <li>Udemy Business</li>
              <li>Teach On Udemy</li>
              <li>Get The App</li>
            </ul>

            <ul className="support">
              <li>Help And Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* social-icons */}
          {/* flex */}
          <div className="social-bottom">
            <a href="">Follow Us :</a>
            <div className="social-icons-bottom">
              <ImInstagram className="icons" />
              <FaFacebookSquare className="icons" />
              <FaTwitter className="icons" />
              <FaYoutube className="icons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
