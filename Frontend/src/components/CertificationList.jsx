import React, { useContext } from "react";
import "../components/CertificationList.css";
import Certificate from "./Certificate.jsx";
import assets from "../assets/asset.js";
import { fetchUserData } from "./data/data.jsx";
import SkeletonAnimation from "./SkeletonAnim/SkeletonAnimation.jsx";
import { globalStore } from "./context/StoreContext.jsx";
import { FaArrowRight } from "react-icons/fa";

const CertificationList = () => {
  // let certificateURL = "http://localhost:4000/Certification";

const url = "http://localhost:4000"

  const { error, isLoading } = fetchUserData(
    `${url}/Certification`
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

      <div className="animated-arrow-bg">
      <FaArrowRight className="animated-arrow-1" />
      </div>

      <div className="certification-list-container">
        {isLoading ? (
          <SkeletonAnimation count={3} />
        ) : error ? (
          <p style={{ color: "red", fontSize: "20px" }}>
            {error} {":("}
          </p>
        ) : (
          certificateFilterData.map((certificate, i) => {
            // let images;
            // if (i % 2 == 0) {
            //   images = certificates[1].img;
            // } else {
            //   images = certificates[2].img;
            // }
            return (
              <Certificate
                key={certificate.id}
                id={certificate.id}
                certificationName={certificate.name}
                img={certificate.image}
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
