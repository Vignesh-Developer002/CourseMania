import React, { useContext, useState } from "react";
import "../CoursePage/CoursePage.css";
import { FaShoppingCart } from "react-icons/fa";
import assets from "../../assets/asset.js";
import { useNavigate } from "react-router-dom";
import { globalStore } from "../context/StoreContext.jsx";

const CoursePage = () => {
  const {
    coursesPage,
    courseCertiData,
    apiData,
    setIsClicked,
    setSearchClick,
    searchClick,
  } = useContext(globalStore); // course-length:13 and Certificate-length:12
  const navigate = useNavigate();
  const [goldStar, setGoldStar] = useState("");
  // console.log(apiData)

  function handleBackPage() {
    setIsClicked(false);
    navigate("/");
    setSearchClick(false);
  }

  return (
    // width-70%
    <div className="course-page-container">
      {/* flex */}
      <div className="course-nav">
        <div className="back-btn">
          <img src={assets.left_arrow} alt="" />
          <span onClick={() => handleBackPage()}>Back</span>
        </div>

        <div className="nav-head">
          <h2>CourseMania</h2>
        </div>

        {/* flex */}
        <div className="right-side-course-container">
          <button className="login-btn-2">Login</button>
          <button className="register-1">Register</button>
          <FaShoppingCart
            className="shop-cart"
            onClick={() => navigate("/CartPage")}
          />
          <span className="cart-overlay">1</span>
        </div>
      </div>
      {/* ----------------------------------------------------------- */}
      <div className="course-sub-conatainer">
        <div className="course-main">
          <h2>
            {coursesPage.length !== 0 ? coursesPage["name"] : "Unconcious Bias"}
          </h2>
          {/* relative */}
          <div className="video-container">
            {/* absolute */}
            <div className="popular-overlay">
              <span>
                {coursesPage.length !== 0 ? coursesPage["status"] : "popular"}
              </span>
            </div>
            {/* width-100% */}
            {/* <video src={assets.video_logo}>
                    
            </video> */}
            <img
              className="video-logo"
              src={
                Object.keys(coursesPage).length === 13
                  ? assets.certification_img_2
                  : assets.video_logo
              }
              alt=""
            />
            {/* temporary */}
            {/* absosute */}
            <div className="video-controller">
              <img src={assets.video_controller} alt="" />
              <p>Preview The Course</p>
            </div>

            <div className="absol">
              <span>
                {coursesPage.length !== 0 ? coursesPage["duration"] : "25mins"}
              </span>
            </div>
          </div>

          <div className="creator-main-container">
            {/* flex-column */}
            {/* position-relative */}
            <div className="creater-left-side">
              <div className="creater-name">
                <img src={assets.user_icon} alt="" />
                <span className="black">Creater :</span>
                <span className="green-1 green-line-1">
                  {coursesPage.length !== 0
                    ? coursesPage["academy_name"]
                    : "Reena Jacob"}
                </span>
              </div>
              <div className="upload-on">
                <img src={assets.file_share_icon} alt="" />
                <span className="black">Uploaded On:</span>
                <span className="green-1">12/04/2022</span>
              </div>
              <div className="duration">
                <img src={assets.Time_icon} alt="" />
                <span className="black">duration :</span>
                <span className="green-1">
                  {coursesPage.length !== 0
                    ? coursesPage["duration"]
                    : "25mins"}
                </span>
              </div>
              <div className="Language">
                <img src={assets.world_icon} alt="" />
                <span className="black">Language:</span>
                <span className="green-1">English</span>
              </div>

              {/* position-absolute */}
              <div className="free-overlay">
                <span>
                  {coursesPage.length !== 0
                    ? coursesPage["course_type"]
                    : "Free"}
                </span>
              </div>
            </div>

            <div className="enroll">
              <button>Enroll Now</button>
            </div>
            {/* flex */}
            <div className="creator-right">
              <div className="star-ratings-2">
                <img src={assets.star_icon} alt="" />
                <span>
                  {coursesPage.length !== 0
                    ? `(${coursesPage["total_purchased"]})`
                    : "(43,435)"}
                </span>
              </div>
            </div>
          </div>

          <div className="detail-container">
            <h3>Details</h3>
            <div className="para">
              {coursesPage.length !== 0
                ? coursesPage["details"]
                : `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, rem ea est provident quibusdam maxime harum accusantium
              quidem magni soluta reprehenderit voluptatibus voluptate
              perspiciatis qui eveniet! Voluptatibus voluptatum dolorem omnis
              nisi incidunt ratione, optio fugiat quasi dolore facere cumque
              autem, iusto id et aliquid neque tenetur nobis repellat? Sapiente
              consectetur dolores voluptatum nam a omnis modi, magni nemo eum
              aliquid? Pariatur, sit voluptatibus consectetur officia amet
              aliquam nostrum eius quasi adipisci. Atque, suscipit tempore?
              Vitae, impedit!`}

              <div className="read-more-container">
                <span className="read-more">Read more</span>
              </div>
            </div>
          </div>
          {/* lesson-section */}
          <div className="lesson">
            <h2>Lessons</h2>

            {/* flex-column */}
            <div className="para-group">
              {/* flex-column */}
              <div className="lesson-para">
                <div className="headings">
                  <h3 className="black-title">Lesson 1 :</h3>
                  <h3 className="green-title">Lesson Title</h3>
                </div>
                <p className="para-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  natus magnam impedit tempora dignissimos aspernatur
                  consequuntur?
                </p>
              </div>

              <div className="lesson-para">
                <div className="headings">
                  <h3 className="black-title">Lesson 2 :</h3>
                  <h3 className="green-title">Lesson Title</h3>
                </div>
                <p className="para-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  natus magnam impedit tempora dignissimos aspernatur
                  consequuntur?
                </p>
              </div>

              <div className="lesson-para">
                <div className="headings">
                  <h3 className="black-title">Lesson 3 :</h3>
                  <h3 className="green-title">Lesson Title</h3>
                </div>
                <p className="para-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  natus magnam impedit tempora dignissimos aspernatur
                  consequuntur?
                </p>
              </div>

              <div className="lesson-para">
                <div className="headings">
                  <h3 className="black-title">Lesson 4 :</h3>
                  <h3 className="green-title">Lesson Title</h3>
                </div>
                <p className="para-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  natus magnam impedit tempora dignissimos aspernatur
                  consequuntur?
                </p>
              </div>

              <div className="read-more-1">
                <p className="read-more-para">Read More</p>
              </div>
            </div>
          </div>

          {/* write-review-section */}
          <div className="write-review-content">
            <h1>Write A Review</h1>
            {/* flex */}
            <div className="type-somethink">
              <div className="left-side-review">
                <input type="text" placeholder="Type Something..." />
                <div className="colorless-star">
                  <img
                    onClick={() => setGoldStar("gold-1")}
                    src={
                      goldStar === "gold-1"
                        ? assets.single_star
                        : assets.colorless_star
                    }
                    alt=""
                  />
                  <img
                    onClick={() => setGoldStar("gold-2")}
                    src={
                      goldStar === "gold-2"
                        ? assets.single_star
                        : assets.colorless_star
                    }
                    alt=""
                  />
                  <img
                    onClick={() => setGoldStar("gold-3")}
                    src={
                      goldStar === "gold-3"
                        ? assets.single_star
                        : assets.colorless_star
                    }
                    alt=""
                  />
                  <img
                    onClick={() => setGoldStar("gold-4")}
                    src={
                      goldStar === "gold-4"
                        ? assets.single_star
                        : assets.colorless_star
                    }
                    alt=""
                  />
                  <img
                    onClick={() => setGoldStar("gold-5")}
                    src={
                      goldStar === "gold-5"
                        ? assets.single_star
                        : assets.colorless_star
                    }
                    alt=""
                  />
                </div>
              </div>

              <div className="review">
                <p className="view-others">View Other's Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------- */}
    </div>
  );
};

export default CoursePage;
