import React, { useContext, useState } from "react";
import "../AdminGallery/Gallery.css";
import AdminNav from "../AdminNav/AdminNav";
import AdminNavTop from "../AdminNav-top/AdminNavTop";
import ManageGallery from "../../ManageGallery/ManageGallery";
import assets from "../../assets/asset";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { globalStore } from "../context/StoreContext";

const Gallery = () => {
  const { setGalleryName } = useContext(globalStore);
  const [bgColor, setBgColor] = useState(""); // for pagination number bg color changing state
  const [indexNumber, setIndexNumber] = useState(null); // for assigning the index number of clicked pagination number
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  // function for handling the manage gallery name
  function handleGalleryName() {
    setGalleryName(true);
    navigate("/ManageContact");
  }

  function handleBgColor(num, index) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let res = arr.map((n, i) => n === num);
    let idx = res.indexOf(true);
    setIndexNumber(idx);
    setBgColor("greenBg");
  }

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
                <input type="text" placeholder="Search objective code" />
                <img src={assets.search_logo2} alt="" />
              </div>
            </div>
          </div>

          <button onClick={() => handleGalleryName()}>
            Add New Image <span className="filter-pluse"> +</span>
          </button>
        </div>
        {/* stored image display */}
        <div className="image-content">
          <div className="inner-content">
            <p className="head-1">SI.No</p>
            <p className="head-1">Thumbnail</p>
            <p className="head-1">Image Title</p>
            <p className="head-1">Description</p>
            <p className="head-1">Upload Date</p>
            <p className="head-1">Actions</p>
          </div>
          {/*dynamic update-start */}
          <div className="inner-content inner-sub">
            <p className="serialNumber">01</p>
            <img className="thumbnail" src={assets.storeimage_logo} alt="" />
            <p>Meet Our Instructors</p>
            <p>Group Photo of our Teaching Staff...</p>
            <p className="upload-date">28-Mar-2025</p>
            <div className="edit-Delete">
              <img src={assets.edit2_logo} alt="" />
              <img src={assets.delete_logo} alt="" />
            </div>
          </div>

          <div className="inner-content inner-sub">
            <p className="serialNumber">02</p>
            <img className="thumbnail" src={assets.storeimage_logo} alt="" />
            <p>Meet Our Instructors</p>
            <p>Group Photo of our Teaching Staff...</p>
            <p className="upload-date">28-Mar-2025</p>
            <div className="edit-Delete">
              <img src={assets.edit2_logo} alt="" />
              <img src={assets.delete_logo} alt="" />
            </div>
          </div>

          <div className="inner-content inner-sub">
            <p className="serialNumber">01</p>
            <img className="thumbnail" src={assets.storeimage_logo} alt="" />
            <p>Meet Our Instructors</p>
            <p>Group Photo of our Teaching Staff...</p>
            <p className="upload-date">28-Mar-2025</p>
            <div className="edit-Delete">
              <img src={assets.edit2_logo} alt="" />
              <img src={assets.delete_logo} alt="" />
            </div>
          </div>
          {/*dynamic update-start */}
          {/* pagination */}
          <div className="pagnation-content">
            {/* flex */}
            <div className="show-content">
              <span className="showEntries">Show</span>
              <div className="number">
                <span className="num-Count">{count}</span>
                {/* flex-column */}
                <div className="up-down">
                  <FaAngleUp onClick={() => setCount((prev) => prev + 1)} />
                  <FaAngleDown onClick={() => setCount((prev) => prev - 1)} />
                </div>
              </div>
              <span className="showEntries">entries</span>
            </div>
            {/* flex-page number */}
            <div className="page-numbers">
              <div className="left-angle">
                <FaAngleLeft className="leftRight" />
              </div>

              {/* need to map */}
              {[1, 2, 3, 4, 5].map((n, i) => {
                return (
                  <div
                    className={bgColor === "greenBg" ? "greenBg" : "pages"}
                    key={i}
                    onClick={() => handleBgColor(n, i)}
                  >
                    {n}
                  </div>
                );
              })}

              <div className="right-angle">
                <FaAngleRight className="leftRight" />
              </div>
            </div>
          </div>
          {/* pagination end */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
