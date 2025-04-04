import React from "react";
import "../AdminLoginPage/Adminlogin.css";

const AdminLogin = () => {
  // flex-center
  return (
    <div className="adminLogin-container">
      <div className="admin-main-content">
        <div className="admin-left-side">
          {/* flex */}
          <div className="admin-head">
            <h1>WELCOME BACK,ADMIN!🖐</h1>
            <p>Please login to manage your E-learning platform.</p>
          </div>

          {/* flex-column */}
          <div className="input-container">
            <input type="text" placeholder="username" />
            <input type="password" name="" id="" placeholder="Password" />
            <button>Login Now</button>
          </div>
        </div>
        <div className="admin-right-side"></div>
      </div>
    </div>
  );
};

export default AdminLogin;
