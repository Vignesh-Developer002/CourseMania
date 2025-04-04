import React, { useContext } from "react";
import "../components/Certification.css";
import { globalStore } from "./context/StoreContext";

const Certification = () => {
  const {
    isCertificateChecked,
    setIsCertificateChecked,
    certificateTrend,
    setCertificateTrend,
    setCertificateValue,
  } = useContext(globalStore);

  // free certificate handler
  function handleFreeCertificate() {
    setIsCertificateChecked((prev) => ({
      ...prev,
      freeCertificate: !isCertificateChecked.freeCertificate,
    }));
  }

  // paid certificate handler
  function handlePaidCertificate() {
    setIsCertificateChecked((prev) => ({
      ...prev,
      paidCertificate: !isCertificateChecked.paidCertificate,
    }));
  }

  // certificate trend handler
  function handleTrends(e) {
    setCertificateValue(e.target.value);
  }

  return (
    <>
      <div className="certification-main">
        <div className="certification">
          <h3>Certifications Courses</h3>
        </div>
      </div>
      <div className="certificate-filter">
        <div className="free-certificate">
          <input
            type="checkbox"
            checked={isCertificateChecked.freeCertificate}
            onChange={() => handleFreeCertificate()}
            name="freeCourses"
            id="freeCourses"
          />
          <span className="Certificate">Free Certifications</span>
        </div>
        <div className="free-certificate">
          <input
            type="checkbox"
            checked={isCertificateChecked.paidCertificate}
            onChange={() => handlePaidCertificate()}
            name="paidCourses"
            id="paidCourses"
          />
          <span className="Certificate">Paid Certifications</span>
        </div>
        <div className="sorted-list">
          <span className="sort">Sort :</span>
          <select
            className="select-option"
            onChange={(e) => handleTrends(e)}
            id=""
          >
            <option className="Best-seller" value="All">
              {certificateTrend.All}
            </option>
            <option className="Best-seller" value="Best Seller">
              {certificateTrend.BestSeller}
            </option>
            <option className="Best-seller" value="Trending">
              {certificateTrend.Trending}
            </option>
            <option className="Best-seller" value="Popular">
              {certificateTrend.Popular}
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Certification;
