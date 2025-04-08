import React from "react";
import "../AdminGallery/Gallery.css";
import AdminNav from "../AdminNav/AdminNav";
import AdminNavTop from "../AdminNav-top/AdminNavTop";
import ManageGallery from "../../ManageGallery/ManageGallery";
import assets from "../../assets/asset";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <AdminNav />
      <AdminNavTop />
      <div className="Admin-center">
        <ManageGallery />
        {/* flex-space-between */}
        <div className="dynamic-content">
          <div className="filter_content">
            <div className="filter-left">
              <img src={assets.filter_logo} alt="" />
              <div className="filetr-search-content">
                <input
                  type="text"
                  placeholder="Search objective code, category"
                />
                <img src={assets.search_logo2} alt="" />
              </div>
            </div>
          </div>

          <button>
            Add New Image <span className="filter-pluse"> +</span>
          </button>
        </div>
        {/* stored image display */}
        <div className="image-content">
          <div className="inner-content">
            <p>SI.No</p>
            <p>Thumbnail</p>
            <p>Image Title</p>
            <p>Description</p>
            <p>Upload Date</p>
            <p>Actions</p>
          </div>
          {/*dynamic update  */}
          <div className="inner-content">
            <p>01</p>
            <img src={assets.storeimage_logo} alt="" />
            <p>Meet Our Instructors</p>
            <p>Group Photo of our Teaching Staff...</p>
            <p>28-Mar-2025</p>
            <div className="edit-Delete">
              <img src={assets.edit2_logo} alt="" />
              <img src={assets.delete_logo} alt="" />
            </div>
          </div>
          {/* pagination */}
          <div className="pagnation-content">
            {/* flex */}
            <div className="show-content">
              <span>Show</span>
              <div className="number">
                <span>05</span>
                {/* flex-column */}
                <div className="up-down">
                  <FaAngleUp />
                  <FaAngleDown />
                </div>
              </div>
            <span>entries</span>
            </div>
            {/* flex */}
            <div className="page-numbers">
              <div className="left-angle">
              <FaAngleLeft />
              </div>

              {/* need to map */}
              <div className="pages">
                1
              </div>
              <div className="right-angle">
              <FaAngleRight />
              </div>
            </div>
          </div>
          {/* pagination end */}


        </div>
        {/* cancel-update */}
        <div className="cancel-update">
          <button className="cancel"></button>
          <button className="update"></button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
