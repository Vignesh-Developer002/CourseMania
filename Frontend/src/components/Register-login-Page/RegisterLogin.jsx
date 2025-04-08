import React, { useContext, useEffect, useState } from "react";
import "../Register-login-Page/RegisterLogin.css";
import { CiSearch } from "react-icons/ci";
import { ImInstagram } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import assets from "../../assets/asset.js";
import axios from "axios";
import { toast, Flip, Bounce } from "react-toastify";
import { globalStore } from "../context/StoreContext.jsx";

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
  const {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    displayUserName,
    setDispalyUserName,
    setIsSubmit,
  } = useContext(globalStore);
  const [databaseLoginData, setDatabaseLoginData] = useState(null); //assigning the matched login data email and password from data base
  const [formError, setFormError] = useState({}); // register form error handling
  const [registerDuplicateData, setregisterDuplicateRecord] = useState(""); // assigning duplicate data stored in local storage

  //getting duplicate data to local storage
  let dupData;
  useEffect(() => {
    if (localStorage.getItem("DuplicateData")) {
      dupData = localStorage.getItem("DuplicateData");
      setregisterDuplicateRecord(dupData);
      console.log(registerDuplicateData);
    }
  }, [localStorage.getItem("DuplicateData")]);

  const [loginFormErr, setLoginFormErr] = useState({});
  useEffect(() => {
    if (databaseLoginData !== null) {
      setLoginEmail(databaseLoginData["Email"]);
      setLoginPassword(databaseLoginData["password"]);
    }
  }, [databaseLoginData]);

  // setting value to the state variables for register form
  function handelValues(e) {
    const { name, value } = e.target;
    setUserName({ ...userName, [name]: value });
  }

  // preventing default behaviour of thr form
  function handleSubmit(e) {
    e.preventDefault();
  }

  //adding register form data to the data base
  async function handleAdd() {
    if (login) {
      // setLoginFormErr(validateData(userName)); // login form data validation
      setFormError(validate(userName)); //this for register form
      //Account  created successfully alert message
      try {
        if (
          userName.name &&
          userName.email &&
          userName.password &&
          Object.keys(formError).length === 0
        ) {
          const res = await axios.post(
            "http://192.168.1.82:4000/users",
            userName
          );
          if (res.status == 200 && Object.keys(formError).length === 0) {
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
            setUserName({
              name: "",
              email: "",
              password: "",
            });
          }
        }
      } catch (err) {
        console.log(err);
        if (err.response.data) {
          localStorage.setItem("DuplicateData", err.response.data);
          toast.error("User is already register Login now to continue.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
          });
          setUserName({
            name: "",
            email: "",
            password: "",
          });
        }
      }
    }
  }

  // login form logic
  // setting value to the state variables for login form
  function handleLoginValues(e) {
    const { value, name } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }
  // getting data from data base based on the login data
  async function validateData() {
    setLoginFormErr(handleValidateLogin(loginData));
    try {
      // checking the login data and the database register data are same for login
      if (loginData.email && loginData.password) {
        const loginUser = await axios.post(
          "http://192.168.1.82:4000/login",
          loginData
        );

        // getting the user name from database for display the profile in navbar
        const getUserData = await axios.post(
          "http://192.168.1.82:4000/userData",
          loginData
        );

        if (getUserData.data?.results.length !== 0) {
          setDispalyUserName(getUserData.data?.results[0].Name);
        } else {
          setDispalyUserName("");
        }

        if (loginUser.data?.results.length !== 0) {
          setUserLoggedIn(true);
          setLogin(false);
          setIslogged(false);
          setLoginPage(false);
          setIsSubmit(true);

          toast.success("Login Success!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
          });
        } else {
          setLogin(false);
          setIslogged(false);
          setLoginPage(false);
          setIsSubmit(false);
          toast.error("User not found please register to continue.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
          });
        }
        setDatabaseLoginData(loginUser.data.results[0]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  //validate the login data
  function handleValidateLogin(values) {
    let err = {};
    if (!values.email && !values.password) {
      err.email = "Email is required";
      err.password = "password is required";
    }
    if (!values.email) {
      err.email = "Email is required";
    }
    if (!values.password) {
      err.password = "password is required";
    }
    return err;
  }

  // login form data validataion
  function validate(values) {
    const errors = {};
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.name) {
      errors.name = "User name is required *";
    } else if (values.name.length < 5) {
      errors.name = "User name must contain 5 characters"; ///////////////////////////////
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
    } else if (values.password.length <= 5) {
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
                  <button type="submit" onClick={() => handleAdd()}>
                    Create Account
                  </button>
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
                    type="button"
                    onClick={() => validateData()}
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
