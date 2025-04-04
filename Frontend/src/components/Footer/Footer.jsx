import React from "react";
import "../Footer/Footer.css";
import { ImInstagram } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import assets from "../../assets/asset";

const Footer = () => {
  return (
    <>
      <div className="footer-main-content" id="footer">
        <img className="light-flower" src={assets.light_flower_icon} alt="" />
        <div className="footer-sub-content">
          <ul className="nav-menu">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>

          <ul className="courses">
            <li>
              <a href="">Udemy Business</a>
            </li>
            <li>
              <a href="">Teach On Udemy</a>
            </li>
            <li>
              <a href="">Get The App</a>
            </li>
          </ul>

          <ul className="support">
            <li>
              <a href="">Hel And Support</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="social-icon-container">
          <div className="social-icon-sub-container">
            <a href="" className="follow-us">
              Follow Us :
            </a>
            <div className="social-content">
              <ImInstagram className="social-icon-list" />
              <FaFacebookSquare className="social-icon-list" />
              <FaTwitter className="social-icon-list" />
              <FaYoutube className="social-icon-list" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
