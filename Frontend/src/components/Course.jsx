import React, { useContext } from "react";
import "../components/Course.css";
import Cart from "./Cart.jsx";
import assets from "../assets/asset.js";
import { fetchUserData } from "../components/data/data.jsx";
import SkeletonAnimation from "./SkeletonAnim/SkeletonAnimation.jsx";
import { globalStore } from "./context/StoreContext.jsx";
import { FaArrowRight } from "react-icons/fa";

const Course = () => {
  const url = "http://localhost:4000"
  // "http://localhost:4000/courses"
  const { courseData, error, isLoading } = fetchUserData(
   ` ${url}/courses`
  );
  const { courseFilterData } = useContext(globalStore);

  return (
    <>
      <div className="view-course">
        <a href="">View More Courses</a>
      </div>

      <div className="right-arrow">
        <img src={assets.right_arrow} />
      </div>

      <div className="animated-arrow">
        <FaArrowRight className="animate" />
      </div>

      <div className="courses-content" id="course">
        {isLoading ? (
          <SkeletonAnimation count={3} />
        ) : error ? (
          <p style={{ color: "red", fontSize: "20px" }}>
            {error} {":("}
          </p>
        ) : (
          courseFilterData.map((course, index) => {
            // let image;
            // if (index % 2 === 0) {
            //   image = courses[1].img;
            // } else {
            //   image = courses[2].img;
            // }
            return (
              <Cart
                course={course}
                error={error}
                isLoading={isLoading}
                key={course.id}
                id={course.id}
                courseName={course.name}
                status={course.status}
                duration={course.duration}
                img={course.image}
                totalPurchase={course.total_purchased}
                price={course.new_price}
                course_type={course.course_type}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Course;
