import React, { useContext } from "react";
import "../ManageGallery/ManageGallery.css";
import assets from "../assets/asset";
import { globalStore } from "../components/context/StoreContext";

const ManageGallery = () => {
   const {galleryName} = useContext(globalStore)
  return (
    <>
      <div className="manage-gallery-content">
        <div className="manage-gallery-head">
          <h1>{galleryName?"Manage Contact Details":"Manage Gallery "}</h1>
          <p>Set measurable learning goals for each subject and grade level</p>
        </div>

        <div className="dashboard">
          <div className="dash-left">
            <img  src={assets.home_logo} alt="" />
            <p>Dashboard</p>
          </div>
          <img className="A-arrow" src={assets.Adminarrow_logo} alt="" />
          <p className="manage-gallery">{galleryName?"Manage Contact Details":"Manage Gallery"}</p>
        </div>
        <hr className="admin-line" />
      </div>
      </>
  );
};

export default ManageGallery;
