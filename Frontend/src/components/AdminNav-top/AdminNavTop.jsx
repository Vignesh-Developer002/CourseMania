import React from "react";
import "../AdminNav-top/AdminNavTop.css";
import assets from "../../assets/asset";

const AdminNavTop = () => {
  return (
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
            <img src={assets.admin_logo} alt="" />
            <div className="profile-content">
                <p className="profileName">John Doe</p>
                <p className="profilEmail">johndoe@gmail.com</p>
            </div>
           </div>
      </div>
    </div>
  );
};

export default AdminNavTop;
