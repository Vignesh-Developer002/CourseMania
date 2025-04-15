import React, { useState } from "react";
import "../ManageContact/ManageContact.css";
import AdminNav from "../components/AdminNav/AdminNav.jsx";
import AdminNavTop from "../components/AdminNav-top/AdminNavTop.jsx";
import ManageGallery from "../ManageGallery/ManageGallery.jsx";
import assets from "../assets/asset.js";

const ManageContact = () => {
  const [btns, setBtns] = useState("");
  return (
    <div className="gallery-container">
      <AdminNav />
      <AdminNavTop />
      <div className="Admin-center">
        <ManageGallery />
        <div className="contact-details">
          <h1>Add Contact Details</h1>
          <hr className="contact-hr" />
          {/* flex */}
          <div className="contact-details-sub">
            {/* flex -parent */}
            <div className="left-contact">
              {/* flex-column */}
              {/* border-dotted */}
              <div className="upload-image">
                <p>Upload Contact Image</p>
                <label htmlFor="upload" className="upload">
                  <img src={assets.image_upload} alt="" />
                </label>
                <input type="file" id="upload" required hidden />
              </div>
              {/* flex-column */}
              <div className="form-content">
                <div className="name-container">
                  <label>Image Name</label>
                  <input type="text" placeholder="Name" />
                </div>

                <div className="description-container">
                  <label>Image Description</label>
                  <div className="des-div">
                    <textarea  className="text-area" cols={300} type="text" placeholder="Description" />
                  </div>
                </div>
              </div>
            </div>

            <div className="right-contact">
              <p className="preview">Preview</p>
              {/* flex */}
              <div className="right-side-preview">
                <div className="image-pre">
                  <img className="delete" src={assets.delete_logo} alt="" />
                  <img className="pre-image" src={assets.prev_img} alt="" />
                </div>
                {/* flex-column -parent*/}
                <div className="details-right">
                  {/* flex-column */}
                  <div className="name-detail">
                    <h2>Image Name</h2>
                    <p>Support Team</p>
                  </div>

                  <div className="image-detail">
                    <h2>Image Description</h2>
                    <p>Help desk and support staff in office</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact -section -details */}
        <div className="contact-section">
          <h1>Add Contact Section Detail</h1>
          <hr className="section-hr" />
          {/* flex-col */}
          <div className="col-flex">
            <div className="company">
              <label htmlFor="">Company Name</label>
              <input type="text" placeholder="Enter Title Name" />
            </div>

            <div className="address">
              <label htmlFor="">Address</label>
              <input type="text" placeholder="Enter Company Address" />
            </div>

            <div className="phone">
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder="Enter Phone Number" />
            </div>

            <div className="insta">
              <label htmlFor="">Instagram URL</label>
              <input type="text" placeholder="Instagram URL" />
            </div>

            <div className="linkedIn">
              <label htmlFor="">Instagram URL</label>
              <input type="text" placeholder="linkedIn URL" />
            </div>
          </div>
        </div>

        {/* cancel-update */}
        <div className="cancel-update">
          <button
            className={btns === "cancel" ? "greenBackground" : "cancel"}
            onClick={() => setBtns("cancel")}
          >
            cancel
          </button>
          <button
            className={btns === "update" ? "greenBackground" : "update"}
            onClick={() => setBtns("update")}
          >
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageContact;
