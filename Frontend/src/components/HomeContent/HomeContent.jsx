import React, { useState } from "react";
import Header from "../header/Header.jsx";
import Home from "../Home.jsx";
import Course from "../Course.jsx";
import Certification from "../Certification.jsx";
import CertificationList from "../CertificationList.jsx";
import InstructorSection from "../instructor/InstructorSection.jsx";
import Tutor from "../Tutor/Tutor.jsx";
import "../HomeContent/HomeContent.css";
import Footer from "../Footer/Footer.jsx";
import NavBar from "../NavBar.jsx";

const HomeContent = ({
  setLoginData,
  setUserName,
  userLoggedIn,
  setUserLoggedIn,
  setLoginPage,
  login,
  setLogin,
  setIslogged,
  isLogged,
}) => {
  return (
    //
    <div className={login || isLogged ? "scrollBarHidden" : "Home-container"}>
      <NavBar
        setLoginData={setLoginData}
        setUserName={setUserName}
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
        setIslogged={setIslogged}
        setLoginPage={setLoginPage}
        login={login}
        setLogin={setLogin}
      />
      <Header />
      <Home />
      <Course />
      <Certification />
      <CertificationList />
      <InstructorSection />
      <Tutor />
      <Footer />
    </div>
  );
};

export default HomeContent;
