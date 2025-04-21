import React, { useEffect, useState } from "react";
import assets from "../../assets/asset.js";
import "../aboutPage/About.css";
import {useNavigate} from "react-router-dom"
import axios from "axios"

const About = () => {

  const [aboutData, setAboutData]=useState([])
  const navigate =useNavigate()

  useEffect(()=>{
    async function handleFetch(){
      const response = await axios.get('http://192.168.1.82:4000/contactdetail')
     if(response.data.success){
      console.log(response.data.result)
      setAboutData(response.data.result[0])//--------- for fetching the all data ---------------
     }else{
      return
     }
    }
   
    handleFetch()
  },[])


  return (
    <div className="about-content">
      {/* flex */}
      <div className="nav-bar">
      <h1 className="about-heading">About Us</h1>
        <div className="left-nav">
          <img src={assets.left_arrow} alt="" />
          <span onClick={()=>navigate('/')}>Back</span>
        </div>
      </div>

      <div className="about-main-content-2">
        <div className="img-cont-2">
          <img
            className="contact-img-2"
            src={assets.certification_img_2}
            alt=""
          />
        </div>
      </div>
      {/* flex-column */}
      <div className="about-main-content-3">
        <div className="img-cont-2">
          <div className="detail-cont">
            <h1>Contact Details</h1>
            <div className="detail">
              <div className="company-name">
                <div className="inner-company">
                  <p className="company-head">1. Company Name</p>
                  <p className={aboutData["name"]?"company-details":"company-red"}> {aboutData["name"] ? aboutData["name"]: "no data found"}</p>
                </div>
              </div>
              <div className="company-address">
                <div className="inner-address">
                  <p className="company-head">2. Address</p>
                  <p className={aboutData["address"]?"company-details":"company-red"}> {aboutData["address"]? aboutData["address"]:"no data found"}</p>
                </div>
              </div>
              <div className="company-phone">
                <div className="inner-phone">
                  <p className="company-head">3. Phone</p>
                  <p className={aboutData["phone"]?"company-details":"company-red"}> +91 - {aboutData["phone"]? aboutData["phone"]:"no data found"}</p>
                </div>
              </div>
              <div className="company-insta">
                <div className="inner-ista">
                  <p className="company-head">4. Instagram URL</p>
                  <p className={aboutData["instaUrl"]?"company-details":"company-red"}>{aboutData["instaUrl"]? aboutData["instaUrl"]:"no data found"}</p>
                </div>
              </div>
              <div className="company-linked">
                <div className="inner-linkedIn">
                  <p className="company-head">5. LinkedIn URL</p>
                  <p className={aboutData["linkedInUrl"]?"company-details":"company-red"}>{aboutData["linkedInUrl"]?aboutData["linkedInUrl"]:"no data found"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
