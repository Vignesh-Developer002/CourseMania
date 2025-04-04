import React, { useContext } from "react";
import "../header/Header.css";
import { FaSearch } from "react-icons/fa";
import assets from "../../assets/asset.js";
import { globalStore } from "../context/StoreContext.jsx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const {
    searchCourse,
    setSearchCourse,
    filterSearchResult,
    searchErr,
    setIsClicked,
  } = useContext(globalStore);
  //removing duplicate from the search filter array
  let uniqueData = Array.from(new Set(filterSearchResult));

  function handleCourseClick() {
    setIsClicked(true);
    navigate("CoursePage");
  }

  return (
    <>
      <div className="header-content">
        <div className="input-content">
          <FaSearch className="Search-icon" />
          <input
            type="text"
            value={searchCourse}
            onChange={(e) =>
              setSearchCourse(e.target.value.toLocaleLowerCase())
            }
            placeholder="Search for Courses"
          />
        </div>
        {/* search overlay container */}
        {filterSearchResult.length > 0 && (
          <div className="search-container">
            <ul className="unOrder">
              {uniqueData.map((res, i) => (
                <li onClick={() => handleCourseClick()} key={i}>
                  {res}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="description">
          <p className="para-1">Explore What Perfessionals Like You Are </p>
          <p className="para-2"> Learning The Most</p>
        </div>

        <div className="btn-img1">
          <button>
            <a href="#course">Visit Courses</a>
          </button>
          <img
            className="doll-icon"
            src={assets.doll_icon}
            alt="Learning-Image"
          />
        </div>
        <img className="bg-icon-1" src={assets.bg_icon} alt="bg_icon" />
      </div>
      <div className="course-content">
        <img className="udemy" src={assets.udemy_icon} alt="" />
        <img className="course-2" src={assets.course_2} alt="" />
        <img className="course-3" src={assets.course_3} alt="" />
        <img className="course-4" src={assets.course_4} alt="" />
      </div>
      <hr />
    </>
  );
};

export default Header;
