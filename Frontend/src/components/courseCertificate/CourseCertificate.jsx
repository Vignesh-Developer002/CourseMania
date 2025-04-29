import React, { useContext, useState } from "react";
import "../courseCertificate/courseCertificate.css";
import AdminNav from "../AdminNav/AdminNav";
import AdminNavTop from "../AdminNav-top/AdminNavTop";
import assets from "../../assets/asset";
import { globalStore } from "../context/StoreContext";
import axios from "axios";

const CourseCertificate = () => {
  const url = "http://192.168.1.82:4000";
  const { cousreImg, setCourseImg, certificateImg, setCertificateImg } =
    useContext(globalStore);
  const [btnStatusLeft, setBtnLeftStatus] = useState(false);
  const [courseAdminData, setCourseAdminData] = useState({
    courseName: "",
    courseDuration: "",
    coursePrice: "",
    courseType: "",
    courseStatus: "",
  });
  const [certiAdminData, setCertiAdminData] = useState({
    certiName: "",
    certiDuration: "",
    certiPrice: "",
    certiType: "",
    certiStatus: "",
  });
  //function for handle course and certificate image
  function handleCourseCertiImg(e) {
    const { name } = e.target;
    if (name === "courseImg") {
      setCourseImg(e.target.files[0]);
    } else {
      setCertificateImg(e.target.files[0]);
    }
    console.log(e.target.files[0]);
  }

  //function for assigning the admin certificate data to the state variable
  function handleCertiData(e) {
    const { name, value } = e.target;
    setCertiAdminData((prev) => ({ ...prev, [name]: value }));
  }

  // function for assigning the admin course data to the state varaible
  function handleCourseData(e) {
    const { name, value } = e.target;
    setCourseAdminData((prev) => ({ ...prev, [name]: value }));
  }

  //function for handleCancel button
  function handleCancel() {
    setCourseAdminData({
      courseName: "",
      courseDuration: "",
      coursePrice: "",
      courseType: "",
      courseStatus: "",
    });
    setCertiAdminData({
      certiName: "",
      certiDuration: "",
      certiPrice: "",
      certiType: "",
      certiStatus: "",
    });
  }

  // function fot handel submit
  async function handleAdminSubmit(e) {
    e.preventDefault();
    if (
      Object.values(courseAdminData).every((i) => i.length > 0) &&
      Object.values(certiAdminData).every((i) => i.length > 0)
    ) {
      //call api
      const response = await axios.post(
        `${url}/addCourseCertificate`,
        courseAdminData,
        certiAdminData
      );
      console.log(response.data);
    } else {
    }
  }

  return (
    <div className="gallery-container">
      <AdminNav />
      <AdminNavTop />
      {/* flex-col */}
      <div className="Admin-center">
        {/* -------------course---------------- */}
        {/* border */}
        <div className="center-content">
          <h1>Add Course Details</h1>
          <hr className="courseCerti-line" />
          {/* flex */}
          <div className="course-main-1">
            {/* flex */}
            <div className="left-side-course">
              {/* flex-col */}
              <div className="left-side-course-img">
                <p>Upload Course Image</p>
                <div className="course-img-upload">
                  <label htmlFor="courseImg">
                    <img src={assets.image_upload} alt="" />
                  </label>
                  <input
                    type="file"
                    onChange={(e) => handleCourseCertiImg(e)}
                    name="courseImg"
                    id="courseImg"
                    required
                    hidden
                  />
                </div>
              </div>
              {/* flex-column */}
              <div className="left-side-course-details">
                {/* flex-col */}
                {/* courseName: "", courseDuration: "", coursePrice: "", courseType:
                "", courseStatus: "", */}
                <div className="course-name">
                  <p>Course Name</p>
                  <input
                    type="text"
                    placeholder="Name"
                    name="courseName"
                    id=""
                    value={courseAdminData.courseName}
                    onChange={(e) => handleCourseData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-duration">
                  <p>Course Duration</p>
                  {/* courseName: "", courseDuration: "", coursePrice: "",
                  courseType: "", courseStatus: "", */}
                  <input
                    type="text"
                    placeholder="Duration"
                    name="courseDuration"
                    id=""
                    value={courseAdminData.courseDuration}
                    onChange={(e) => handleCourseData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-price">
                  <p>Course price</p>
                  <input
                    type="text"
                    placeholder="Price"
                    name="coursePrice"
                    id=""
                    value={courseAdminData.coursePrice}
                    onChange={(e) => handleCourseData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-type">
                  <p>Course Type</p>
                  <input
                    type="text"
                    placeholder="Type"
                    name="courseType"
                    id=""
                    value={courseAdminData.courseType}
                    onChange={(e) => handleCourseData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-trend">
                  <p>Course status</p>
                  <input
                    type="text"
                    placeholder="Status"
                    name="courseStatus"
                    id=""
                    value={courseAdminData.courseStatus}
                    onChange={(e) => handleCourseData(e)}
                  />
                </div>
              </div>
            </div>
            <div className="right-side-course-preview">
              <p className="c-preview">preview</p>
              {/* flex */}
              <div className="right-prev-det">
                <div className="right-course-preview">
                  <div className="course-img-prev">
                    <img
                      className="prev-img-course-certificate"
                      src={assets.course_img_2}
                      alt=""
                    />
                  </div>
                  <img
                    className="courseCerti-del"
                    src={assets.delete_logo}
                    alt=""
                  />
                </div>
                {/* flex-col */}
                <div className="course-details-prev">
                  {/* flex-col */}
                  <div className="course-name-prev">
                    <p className="prev-headings">Course Name :</p>
                    <p className="courseCerti-data">
                      {courseAdminData.courseName.length > 0
                        ? courseAdminData.courseName
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-duration-prev">
                    <p className="prev-headings">Course Duration :</p>
                    <p className="courseCerti-data">
                      {courseAdminData.courseDuration.length > 0
                        ? courseAdminData.courseDuration
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-price-prev">
                    <p className="prev-headings">Course price :</p>
                    <p className="courseCerti-data">
                      {courseAdminData.coursePrice.length > 0
                        ? courseAdminData.coursePrice
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-type-prev">
                    <p className="prev-headings">Course Type :</p>
                    <p className="courseCerti-data">
                      {courseAdminData.courseType.length > 0
                        ? courseAdminData.courseType
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-trend-prev">
                    <p className="prev-headings">Course status :</p>
                    <p className="courseCerti-data">
                      {courseAdminData.courseStatus.length > 0
                        ? courseAdminData.courseStatus
                        : "No Data available"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --------certificate------------------ */}
        {/* border */}
        <div className="center-content">
          <h1>Add Certificate Details</h1>
          <hr className="courseCerti-line" />
          {/* flex */}
          <div className="course-main-1">
            {/* flex */}
            <div className="left-side-course">
              {/* flex-col */}
              <div className="left-side-course-img">
                <p>Upload Certificate Image</p>
                <div className="course-img-upload">
                  <label htmlFor="certificateImg">
                    <img src={assets.image_upload} alt="" />
                  </label>
                  <input
                    type="file"
                    onChange={(e) => handleCourseCertiImg(e)}
                    name="certificateImg"
                    id="certificateImg"
                    required
                    hidden
                  />
                </div>
              </div>
              {/* flex-column */}
              {/* certiName: "", certiDuration: "", certiPrice: "", certiType: "",
              certiStatus: "", */}
              <div className="left-side-course-details">
                {/* flex-col */}
                <div className="course-name">
                  <p>Certificate Name</p>
                  <input
                    type="text"
                    value={certiAdminData.certiName}
                    placeholder="Name"
                    name="certiName"
                    id=""
                    onChange={(e) => handleCertiData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-duration">
                  <p>Certificate Duration</p>
                  <input
                    type="text"
                    value={certiAdminData.certiDuration}
                    placeholder="Duration"
                    name="certiDuration"
                    id=""
                    onChange={(e) => handleCertiData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-price">
                  <p>Certificate price</p>
                  <input
                    type="text"
                    value={certiAdminData.certiPrice}
                    placeholder="Price"
                    name="certiPrice"
                    id=""
                    onChange={(e) => handleCertiData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-type">
                  <p>Certificate Type</p>
                  <input
                    type="text"
                    value={certiAdminData.certiType}
                    placeholder="Type"
                    name="certiType"
                    id=""
                    onChange={(e) => handleCertiData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-trend">
                  <p>Certificate status</p>
                  <input
                    type="text"
                    value={certiAdminData.certiStatus}
                    placeholder="Status"
                    name="certiStatus"
                    id=""
                    onChange={(e) => handleCertiData(e)}
                  />
                </div>
              </div>
            </div>
            {/* hr------------- */}
            <div className="right-side-course-preview">
              <p>preview</p>
              {/* flex */}
              <div className="right-prev-det">
                <div className="right-course-preview">
                  <div className="course-img-prev">
                    <img
                      className="prev-img-course-certificate"
                      src={assets.certification_img_2}
                      alt=""
                    />
                  </div>
                  <img
                    className="courseCerti-del"
                    src={assets.delete_logo}
                    alt=""
                  />
                </div>
                {/* flex-col */}
                <div className="course-details-prev">
                  {/* flex-col */}
                  <div className="course-name-prev">
                    <p className="prev-headings">Certificate Name :</p>
                    <p className="courseCerti-data">
                      {certiAdminData.certiName.length > 0
                        ? certiAdminData.certiName
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-duration-prev">
                    <p className="prev-headings">Certificate Duration :</p>
                    <p className="courseCerti-data">
                      {certiAdminData.certiDuration.length > 0
                        ? certiAdminData.certiDuration
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-price-prev">
                    <p className="prev-headings">Certificate price :</p>
                    <p className="courseCerti-data">
                      {certiAdminData.certiPrice.length > 0
                        ? certiAdminData.certiPrice
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-type-prev">
                    <p className="prev-headings">Certificate Type :</p>
                    <p className="courseCerti-data">
                      {certiAdminData.certiType.length > 0
                        ? certiAdminData.certiType
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-trend-prev">
                    <p className="prev-headings">Certificate status :</p>
                    <p className="courseCerti-data">
                      {certiAdminData.certiStatus.length > 0
                        ? certiAdminData.certiStatus
                        : "No Data available"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-courseCerti-buttons">
        <div className="course-cert-btn">
          <button
            className={btnStatusLeft ? "courseCerti-green" : "normal-btn"}
            onClick={() => handleCancel()}
          >
            Cancel
          </button>
          <button
            className={"courseCerti-green"}
            onClick={(e) => handleAdminSubmit(e)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCertificate;
