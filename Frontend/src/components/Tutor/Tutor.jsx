import React from "react";
import "../Tutor/Tutor.css";
import { tutors } from "../../assets/asset";
import TutorDetail from "../TutotorDetail/TutorDetail";

const Tutor = () => {
  return (
    <div className="tutor-container">
      <div className="tutor-head">
        <h2>Meet Our Popular Tutors</h2>
      </div>

      <div className="tutor-img-container" id="tutor">
        {tutors.map((tutor) => {
          return (
            <TutorDetail
              key={tutor.id}
              name={tutor.tutorName}
              img={tutor.tutorImage}
              design={tutor.designation}
              courseCount={tutor.courseCount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tutor;
