import React, { useContext, useState } from "react";
import "../courseCertificate/courseCertificate.css";
import AdminNav from "../AdminNav/AdminNav";
import AdminNavTop from "../AdminNav-top/AdminNavTop";
import assets from "../../assets/asset";
import { globalStore } from "../context/StoreContext";
import axios from "axios";
import { toast, Bounce } from "react-toastify";

const CourseCertificate = () => {
  // course Name
  // course image
  // course status
  // course duration
  // course old price -- need to add
  // course price -- new price
  // course type
  // acedemy name  --- need to add
  //  details  ---  need to add
  // rating , star rating, total purchased are added by default

  //name .
  // image.
  // status.
  // duration.
  // old_price-----need to add in the frontend
  // new_price.
  // ratings-----need to add in the frontend
  // total_purchased----need to add in the frontend
  // course_type.
  // details----need to add in the frontend
  // acedemy_name----need to add in the frontend

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
    courseOldPrice: "",
    courseAcedemyName: "",
    courseDetails: "",
  });
  const [certiAdminData, setCertiAdminData] = useState({
    certiName: "",
    certiDuration: "",
    certiPrice: "",
    certiType: "",
    certiStatus: "",
    certiOldPrice: "",
    certiDetails: "",
    certiAcedemyName: "",
  });
  //course form data
  const courseFormData = new FormData();
  courseFormData.append("courseName", courseAdminData.courseName);
  courseFormData.append("CourseImg", cousreImg);
  courseFormData.append("courseStatus", courseAdminData.courseStatus);
  courseFormData.append("courseDuration", courseAdminData.courseDuration);
  courseFormData.append("coursePrice", courseAdminData.coursePrice);
  courseFormData.append("courseType", courseAdminData.courseType);
  courseFormData.append("courseOldPrice", courseAdminData.courseOldPrice);
  courseFormData.append("courseAcedemyName", courseAdminData.courseAcedemyName);
  courseFormData.append("courseDetails", courseAdminData.courseDetails);

  //Certificate form data
  const certiFormData = new FormData();
  certiFormData.append("certiName", certiAdminData.certiName);
  certiFormData.append("certiDuration", certiAdminData.certiDuration);
  certiFormData.append("certiPrice", certiAdminData.certiPrice);
  certiFormData.append("certiType", certiAdminData.certiType);
  certiFormData.append("certiStatus", certiAdminData.certiStatus);
  certiFormData.append("certiImg", certificateImg);
  certiFormData.append("certiOldPrice", certiAdminData.certiOldPrice);
  certiFormData.append("certiDetails", certiAdminData.certiDetails);
  certiFormData.append("certiAcedemyName", certiAdminData.certiAcedemyName);

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
      courseOldPrice: "",
      courseAcedemyName: "",
      courseDetails: "",
    });
    setCertiAdminData({
      certiName: "",
      certiDuration: "",
      certiPrice: "",
      certiType: "",
      certiStatus: "",
      certiOldPrice: "",
      certiDetails: "",
      certiAcedemyName: "",
    });
  }

  // function for handle the course img delete function
  function handleDeleteImg() {
    setCourseImg(false);
  }
  //function for handle the certi img delete function
  function handleCertiImgDelete() {
    setCertificateImg(false);
  }

  // function fot handel submit
  async function handleAdminSubmitBtn(e) {
    e.preventDefault();
    try {
      if (
        Object.values(courseAdminData).every((i) => i.length > 0) &&
        Object.values(certiAdminData).every((i) => i.length > 0)
      ) {
        //course api
        const courseResponse = await axios.post(
          `${url}/courseImageData`,
          courseFormData
        );
        //  certificate
        const certificateResponse = await axios.post(
          `${url}/addCertificateData`,
          certiFormData
        );
        if (courseResponse.data.message && certificateResponse.data.message) {
          console.log("success");
        } else {
          console.log("error");
        }
      } else {
        toast.error("Please fill all the details to submit", {
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
    } catch (error) {
      console.log(error);
    }
  }

  console.log(typeof cousreImg);
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
                {/* flex-col */}
                {/* courseOldPrice: "", courseAcedemyName: "", courseDetails: "", */}
                <div className="course-trend">
                  <p>Course old price</p>
                  <input
                    type="text"
                    placeholder="Status"
                    name="courseOldPrice"
                    id=""
                    value={courseAdminData.courseOldPrice}
                    onChange={(e) => handleCourseData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-trend">
                  <p>Acedemy name</p>
                  <input
                    type="text"
                    placeholder="Status"
                    name="courseAcedemyName"
                    id=""
                    value={courseAdminData.courseAcedemyName}
                    onChange={(e) => handleCourseData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-trend">
                  <p>Course Details</p>
                  <input
                    type="text"
                    placeholder="Status"
                    name="courseDetails"
                    id=""
                    value={courseAdminData.courseDetails}
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
                  <div
                    className={
                      certificateImg ? "course-img-prev" : "certiBorder"
                    }
                  >
                    {cousreImg ? (
                      <img
                        className="prev-img-course-certificate"
                        src={cousreImg ? URL.createObjectURL(cousreImg) : ""}
                      />
                    ) : (
                      <img
                        className="noPrevImgPlaceholder"
                        src={assets.no_prev_image}
                      />
                    )}
                  </div>
                  {cousreImg ? (
                    <img
                      onClick={() => {
                        handleDeleteImg();
                      }}
                      className="courseCerti-del"
                      src={assets.delete_logo}
                      alt=""
                    />
                  ) : (
                    <p className="noImage">No Image</p>
                  )}
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
                  {/* flex-col */}
                  <div className="course-trend-prev">
                    <p className="prev-headings">Course old price :</p>
                    <p className="courseCerti-data">
                      {courseAdminData.courseOldPrice.length > 0
                        ? courseAdminData.courseOldPrice
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-trend-prev">
                    <p className="prev-headings">Acedemy Name :</p>
                    <p className="courseCerti-data">
                      {courseAdminData.courseAcedemyName.length > 0
                        ? courseAdminData.courseAcedemyName
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-trend-prev">
                    <p className="prev-headings">Course Details :</p>
                    <p className="courseCerti-data">
                      {courseAdminData.courseDetails.length > 0
                        ? courseAdminData.courseDetails
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
                {/* flex-col */}
                {/* certiOldPrice: "", certiDetails: "", certiAcedemyName: "", */}
                <div className="course-trend">
                  <p>Certificate old price</p>
                  <input
                    type="text"
                    value={certiAdminData.certiOldPrice}
                    placeholder="Status"
                    name="certiOldPrice"
                    id=""
                    onChange={(e) => handleCertiData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-trend">
                  <p>Acedemy Name</p>
                  <input
                    type="text"
                    value={certiAdminData.certiAcedemyName}
                    placeholder="Status"
                    name="certiAcedemyName"
                    id=""
                    onChange={(e) => handleCertiData(e)}
                  />
                </div>
                {/* flex-col */}
                <div className="course-trend">
                  <p>Certificate Details</p>
                  <input
                    type="text"
                    value={certiAdminData.certiDetails}
                    placeholder="Status"
                    name="certiDetails"
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
                  <div
                    className={
                      certificateImg ? "course-img-prev" : "certiBorder"
                    }
                  >
                    {certificateImg ? (
                      <img
                        className="prev-img-course-certificate"
                        src={
                          certificateImg
                            ? URL.createObjectURL(certificateImg)
                            : ""
                        }
                      />
                    ) : (
                      <img
                        className="noPrevImgPlaceholder"
                        src={assets.no_prev_image}
                      />
                    )}
                  </div>
                  {certificateImg ? (
                    <img
                      className="Certi-del"
                      onClick={() => handleCertiImgDelete()}
                      src={assets.delete_logo}
                      alt=""
                    />
                  ) : (
                    <p className="noImage">No Image</p>
                  )}
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
                  {/* flex-col */}
                  <div className="course-trend-prev">
                    <p className="prev-headings">Certificate old price :</p>
                    <p className="courseCerti-data">
                      {certiAdminData.certiOldPrice.length > 0
                        ? certiAdminData.certiOldPrice
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-trend-prev">
                    <p className="prev-headings">Acedemy Name :</p>
                    <p className="courseCerti-data">
                      {certiAdminData.certiAcedemyName.length > 0
                        ? certiAdminData.certiAcedemyName
                        : "No Data available"}
                    </p>
                  </div>
                  {/* flex-col */}
                  <div className="course-trend-prev">
                    <p className="prev-headings">Certificate Details :</p>
                    <p className="courseCerti-data">
                      {certiAdminData.certiDetails.length > 0
                        ? certiAdminData.certiDetails
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
            onClick={(e) => handleAdminSubmitBtn(e)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCertificate;
