import React, { useEffect, useState } from "react";
import "../AdminNav-top/AdminNavTop.css";
import assets from "../../assets/asset";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";
import { IoIosLogOut } from "react-icons/io";

const AdminNavTop = () => {
  const [adminName, setAdminName] = useState("");
  const [adminLoggedIn, setAdminLoggedIn] = useState(false); // show and hide the loggout option
  useEffect(() => {
    async function gettingUserName() {
      try {
        const response = await axios.get("http://192.168.1.82:4000/adminName");
        if (response.data.success) {
          const lowerName = response.data.result[0].name;
          setAdminName(lowerName);
        }
      } catch (e) {
        console.log(e);
      }
    }
    gettingUserName();
  });

  //function for handle the admin logout
  function handleAdminLogOut() {
    setAdminLoggedIn(false);
  }

  return (
    <>
      <RxHamburgerMenu className="AdminBurger" />
      <div className="adminNavTop">
        {/* flex-between */}
        <div className="left-side-admin">
          <div className="left_log">
            <img src={assets.edit_logo} alt="" />
            <img src={assets.message_logo} alt="" />
          </div>
          <div className="search_bar">
            <img src={assets.search_logo} alt="" />
            <input type="text" placeholder="Search anything here..." />
          </div>
        </div>
        {/* flex */}
        <div className="right-side-admin">
          <div className="right_log">
            <img src={assets.brightness_logo} alt="" />
            <img src={assets.flag_logo} alt="" />
          </div>
          <div className="right-side-profile">
            <div className="profile-bg" onClick={() => setAdminLoggedIn(true)}>
              <span>{adminName.toUpperCase().slice(0, 1)}</span>
              {/* <img src="" alt="" /> */}
            </div>

            {/* logout menu */}
            {adminLoggedIn && (
              <div className="admin-logout" onClick={() => handleAdminLogOut()}>
                <p className="colorChange">Logout</p>
                <IoIosLogOut className="admin-log-out colorChange" />
              </div>
            )}

            <div className="profile-content">
              <p className="profileName">{adminName ? adminName : ""}</p>
              <p className="profilEmail">vigneshvijay221299@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavTop;
