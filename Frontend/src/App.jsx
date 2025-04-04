import React, { useState } from "react";
import "./components/App.css";
import { Route, Routes } from "react-router-dom";
import RegisterLogin from "./components/Register-login-Page/RegisterLogin.jsx";
import HomeContent from "./components/HomeContent/HomeContent.jsx";
import CoursePage from "./components/CoursePage/CoursePage.jsx";
import CartPage from "./components/CartPage/CartPage.jsx";
import CheckOutPage from "./components/CheckoutPage/CheckOutPage.jsx";

const App = () => {
  const [login, setLogin] = useState(false); //register page input field setup
  const [loginPage, setLoginPage] = useState(false); // for showing the register page
  const [isLogged, setIslogged] = useState(false); //login page input field setup
  const [userLoggedIn, setUserLoggedIn] = useState(false); // checking and changing the profile of the user based on login is true or false
  // handel register form input field value
  const [userName, setUserName] = useState({
    name: "",
    email: "",
    password: "",
  });
  //handle login form input field vlaue
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="app-container">
      {loginPage ? (
        <RegisterLogin
          loginData={loginData}
          setLoginData={setLoginData}
          userName={userName}
          setUserName={setUserName}
          userLoggedIn={userLoggedIn}
          setUserLoggedIn={setUserLoggedIn}
          setIslogged={setIslogged}
          isLogged={isLogged}
          setLoginPage={setLoginPage}
          login={login}
          setLogin={setLogin}
        />
      ) : (
        <></>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <HomeContent
              setLoginData={setLoginData}
              setUserName={setUserName}
              userLoggedIn={userLoggedIn}
              setUserLoggedIn={setUserLoggedIn}
              setIslogged={setIslogged}
              isLogged={isLogged}
              setLoginPage={setLoginPage}
              login={login}
              setLogin={setLogin}
            />
          }
        />
        <Route path="/Coursepage" element={<CoursePage />} />
        <Route
          path="/CartPage"
          element={<CartPage userLoggedIn={userLoggedIn} />}
        />
        <Route path="/CheckOutPage" element={<CheckOutPage />} />
      </Routes>
    </div>
  );
};

export default App;
