import React, { useContext } from "react";
import "../components/CertificationList.css";
import Certificate from "./Certificate.jsx";
import assets, { certificates } from "../assets/asset.js";
import { fetchUserData } from "./data/data.jsx";
import SkeletonAnimation from "./SkeletonAnim/SkeletonAnimation.jsx";
import { globalStore } from "./context/StoreContext.jsx";

const CertificationList = () => {
  {
    /*API_URL :"http://localhost:4000/CertificationCourse" */
  }

  const { error, isLoading } = fetchUserData(
    "http://192.168.1.82:4000/Certification"
  );

  const { certificateFilterData } = useContext(globalStore);

  return (
    <>
      <div className="course-top-link">
        <a className="toplink" href="">
          View More Courses
        </a>
      </div>

      <img className="right-arrow-2" src={assets.right_arrow} />

      <div className="certification-list-container">
        {isLoading ? (
         <SkeletonAnimation count={3} />
        ) : 
        error ? (
          <p style={{ color: "red", fontSize: "20px" }}>
            {error} {":("}
          </p>
        ) : (
          certificateFilterData.map((certificate, i) => {
            let images;
            if (i % 2 == 0) {
              images = certificates[1].img;
            } else {
              images = certificates[2].img;
            }
            return (
              <Certificate
                key={certificate.id}
                id={certificate.id}
                certificationName={certificate.name}
                img={images}
                trending={certificate.status}
                duration={certificate.duration}
                price={certificate.new_price}
                totalPurchase={certificate.total_purchased}
                certificate_type={certificate.course_type}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default CertificationList;
