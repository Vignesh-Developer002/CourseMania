import React, { useContext } from "react";
import "../components/Home.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { globalStore } from "./context/StoreContext";

const Home = () => {
  const { isChecheck, setIsChecked, courseTrend, setCourseValue } =
    useContext(globalStore);

  //handling free course checkbox
  function handleFreeCourse() {
    setIsChecked((prev) => ({ ...prev, freeCourse: !isChecheck.freeCourse }));
  }

  //handling paid course checkbox
  function handelPaidCourse() {
    setIsChecked((prev) => ({ ...prev, paidCourse: !isChecheck.paidCourse }));
  }

  //courseTrend handler
  function handleCourseTrend(e) {
    setCourseValue(e.target.value);
  }

  return (
    <>
      <div className="home-heading">
        <h1>Popular Courses</h1>
      </div>

      <div className="filter-group-parent">
        <div className="filter-group">
          <div className="course-container-1">
            <p>Professional Course</p>
            <RiArrowDropDownLine className="drop-down-1" />
          </div>

          <div className="course-container-2">
            <input
              type="checkbox"
              checked={isChecheck.freeCourse}
              onChange={() => handleFreeCourse()}
            />
            <span>Free Courses</span>
          </div>

          <div className="course-container-3">
            <input
              type="checkbox"
              checked={isChecheck.paidCourse}
              onChange={() => handelPaidCourse()}
            />
            <span>Paid Courses</span>
          </div>

          <div className="course-container-4">
            <span className="corse-content-head">Sort :</span>
            <select
              name=""
              id="course-trend"
              className="select-option"
              onChange={(e) => handleCourseTrend(e)}
            >
              <option value="All">{courseTrend.All}</option>
              <option value="New">{courseTrend.New}</option>
              <option value="Best Seller">{courseTrend.BestSeller}</option>
              <option value="Popular">{courseTrend.Popular}</option>
              <option value="Trending">{courseTrend.Trending}</option>
            </select>
            {/* <span className="Course-content-4">Low To High</span>
            <RiArrowDropDownLine className="drop-down-1" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
