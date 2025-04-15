import React, { useContext } from "react";
import "../AdminNav/AdminNav.css";
import { globalStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
  const { galleryName, setGalleryName } = useContext(globalStore);
  const navigate = useNavigate()

  function handlePageNavigation(){
    setGalleryName(false)
    navigate("/Gallery")

  }
  return (
    <div className="admin-nav">
      <h1 className="nav-title" onClick={()=>handlePageNavigation()}>CourseMania</h1>
    </div>
  );
};

export default AdminNav;
