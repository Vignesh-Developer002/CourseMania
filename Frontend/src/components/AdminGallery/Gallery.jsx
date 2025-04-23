import React, { useContext, useEffect, useState } from "react";
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
import axios from "axios";
import { toast, Bounce } from "react-toastify";

const Gallery = () => {
  const {
    setGalleryName,
    contactsecData,
    setContactSecData,
    setEditData,
    setCallUseEffect,
    setSaveId,
  } = useContext(globalStore);

  // console.log(storeImgToDisplay);
  const [count, setCount] = useState(0);
  const [deletBtn, setDeleteBtn] = useState(false);
  const navigate = useNavigate();
  const url ="http://192.168.1.82:4000"
  // function for handling the manage gallery name
  function handleGalleryName() {
    setSaveId(null);
    setGalleryName(true);
    navigate("/ManageContact");
  }

  //function for delete the perticular data in db
  async function handleDelete(num) {
    setDeleteBtn((prev) => !prev);
    const response = await axios.post(
      `${url}/deleteContact/${num}`
    );
    if (response.data) {
      toast.success(`${response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.success(`${response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  //function for edit the selected data
  async function handleEdit(num) {
    setSaveId(num);
    setCallUseEffect(true);
    navigate("/ManageContact");
    const response = await axios.post(
      `${url}/contactdetail/${num}`
    );
    if (response.data.result) {
      setEditData(response.data.result);
      console.log(response.data.result);
    } else {
      console.log("no data found");
    }
  }
  // setInterval(()=>{
  useEffect(() => {
    async function getContactSectionDetails() {
      const response = await axios.get(
        `${url}/contactdetail`
      );
      console.log(contactsecData);
      if (response?.data?.result && Array.isArray(response?.data?.result)) {
        setContactSecData(response?.data?.result);
        console.log(contactsecData);
      } else {
        toast.error("no data available", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }
    // setInterval(() => {
    getContactSectionDetails();
    // }, 1000);
  }, [deletBtn]);

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

          {contactsecData.map((dt, idx) => (
            <div key={dt.id} className="inner-content inner-sub">
              <p className="serialNumber">{`${dt.id} .` || ""}</p>
              {/* assets.teaching_icon */}
              <img className="thumbnail" src={dt.imageurl} alt="" />

              <p>{dt.name || ""}</p>
              <p>{dt.description || ""}</p>
              <p className="upload-date">{dt.stored_date || ""}</p>
              <div className="edit-Delete">
                <img
                  onClick={() => handleEdit(dt.id)}
                  src={assets.edit2_logo}
                  alt=""
                />
                <img
                  onClick={() => handleDelete(dt.id)}
                  src={assets.delete_logo}
                  alt=""
                />
              </div>
            </div>
          ))}

          {/*dynamic update-end */}
          {/* pagination */}
          <div className="pagnation-content">
            {/* flex */}
            <div className="show-content">
              <span className="showEntries">Show</span>
              <div className="number">
                <span className="num-Count">
                  {count < 0 ? setCount(0) : count}
                </span>
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
                  <div className="pages" key={i}>
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
