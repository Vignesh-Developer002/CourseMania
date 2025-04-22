import React, { useContext } from "react";
import "../AdminNav/AdminNav.css";
import { globalStore } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
  const { setGalleryName, setSaveId, setEditData, setEditImg } =
    useContext(globalStore);
  const navigate = useNavigate();

  function handlePageNavigation() {
    setGalleryName(false);
    navigate("/Gallery");
    setSaveId(null);
    setEditData([]); //------------------ok------------------
    setEditImg(null);//------------------------------------
  }
  return (
    <div className="admin-nav">
      <h1 className="nav-title" onClick={() => handlePageNavigation()}>
        CourseMania
      </h1>
    </div>
  );
};

export default AdminNav;
