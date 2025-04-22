import React, { useEffect, useState } from "react";
import assets from "../../assets/asset.js";
import "../aboutPage/About.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TbPoint } from "react-icons/tb";
import { ImInstagram } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const navigate = useNavigate();

  console.log(aboutData);
  useEffect(() => {
    async function handleFetch() {
      const response = await axios.get(
        "http://192.168.1.82:4000/contactdetail"
      );
      if (response.data.success) {
        console.log(response.data.result);
        setAboutData(response.data.result[0]); //--------- for fetching the all data ---------------
      } else {
        return;
      }
    }

    handleFetch();
  }, []);

  return (
    // width-80%
    <div className="about-content">
      {/* flex-column */}
      <div className="about-inner">
        {/* flex */}
        <div className="about-nav">
          <h1>About Us</h1>
          {/* flex */}
          <div onClick={() => navigate("/")} className="back-button">
            <img src={assets.left_arrow} alt="" />
            <p>Back</p>
          </div>
        </div>
        {/* image-content */}
        <div className="img-content" style={{ position: "relative" }}>
          {aboutData["imageurl"] ? (
            <img src={aboutData["imageurl"]} alt="" />
          ) : (
            <p
              style={{
                color: "red",
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "40%",
              }}
            >
              No image available
            </p>
          )}
        </div>

        {/* details */}
        <div className="about-details">
          <h1>Contact Details :</h1>
          {/* flex-column */}
          <div className="inner-container">
            {/* flex-column */}
            <div className="company-name">
              <div className="detail-main">
                <TbPoint className="point" />
                <p className="detail-head">Company Name :</p>
              </div>
              <p className="detail-sub">
                {aboutData["companyName"]
                  ? aboutData["companyName"]
                  : "no details available"}
              </p>
            </div>

            <div className="company-address">
              <div className="detail-main">
                <TbPoint className="point" />
                <p className="detail-head">Address :</p>
              </div>
              <p className="detail-sub">
                {aboutData["address"]
                  ? aboutData["address"]
                  : "no details available"}
              </p>
            </div>

            <div className="Phone">
              <div className="detail-main">
                <TbPoint className="point" />
                <p className="detail-head">Phone :</p>
              </div>
              <p className="detail-sub">
                {" "}
                +91 -{" "}
                {aboutData["phone"]
                  ? aboutData["phone"]
                  : "no details available"}
              </p>
            </div>

            <div className="Instagram">
              <div className="detail-main">
                <TbPoint className="point" />
                <p className="detail-head">Instagram :</p>
              </div>
              <p className="detail-sub">
                {aboutData["instaUrl"]
                  ? aboutData["instaUrl"]
                  : "no details available"}
              </p>
            </div>

            <div className="linkedInUrl">
              <div className="detail-main">
                <TbPoint className="point" />
                <p className="detail-head">LinkedIn :</p>
              </div>
              <p className="detail-sub">
                {aboutData["linkedInUrl"]
                  ? aboutData["linkedInUrl"]
                  : "no details available"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}

      {/* flex */}
      <div className="about-foot">
        <div className="left-about">
          <ul className="about-li">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>

          <ul className="about-li">
            <li>Udemy Business</li>
            <li>Tech On Udemy</li>
            <li>Get The App</li>
          </ul>

          <ul className="about-li">
            <li>Help and Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="right-about">
          <div className="about-logo">
            <a href="">Follow us :</a>
            <div className="about-icons">
              <ImInstagram className="about-footer-logo" />
              <FaFacebookSquare className="about-footer-logo" />
              <FaTwitter className="about-footer-logo" />
              <FaYoutube className="about-footer-logo" />
            </div>
          </div>
        </div>
      </div>
      {/* footer-end */}
    </div>
  );
};

export default About;
