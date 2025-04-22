import React, { useContext, useEffect, useState } from "react";
import "../ManageContact/ManageContact.css";
import AdminNav from "../components/AdminNav/AdminNav.jsx";
import AdminNavTop from "../components/AdminNav-top/AdminNavTop.jsx";
import ManageGallery from "../ManageGallery/ManageGallery.jsx";
import assets from "../assets/asset.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { globalStore } from "../components/context/StoreContext.jsx";

const ManageContact = () => {
  // const [storeImgToDisplay,setStoreImgToDisplay]=useState([])// for storing the image to display in gallery
  const {
    image,
    setIamge,
    setStoreImgToDisplay,
    editData,
    callUseEffect,
    setCallUseEffect,
    saveId,
    setSaveId,
    setEditData,
    editImg,
    setEditImg,
  } = useContext(globalStore);
  const navigate = useNavigate();
  const [btns, setBtns] = useState("");
  // const [image, setIamge] = useState(false); // for upload the image
  const [nameDesc, setNameDesc] = useState({ Name: "", Description: "" }); // for handle the state data for image name and description
  const [contactSection, setContactSection] = useState({
    companyName: "",
    address: "",
    phone: "",
    instaUrl: "",
    linkedInUrl: "",
  });

  // for setting the data in form for edit
  useEffect(() => {
    if (callUseEffect) {
      for (let d in editData) {
        // getting image for edit
        // setIamge(editData[d].imageurl)
        //  //------------------------------
        setEditImg(editData[d].imageurl);
        // console.log(editData[d].imageurl);
        setNameDesc({
          Name: editData[d].name,
          Description: editData[d].description,
        });
        setContactSection({
          companyName: editData[d].companyName,
          address: editData[d].address,
          phone: editData[d].phone,
          instaUrl: editData[d].instaUrl,
          linkedInUrl: editData[d].linkedInUrl,
        });
      }
    }
    // setNameDesc({Name:})
  }, [editData.length > 0]);

  //function for storing image in the state variable
  function handleImage(e) {
    setIamge(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  // console.log(storeImgToDisplay)
  // function for storing the  imageName and Image Description
  function handleNameDesc(e) {
    const { name, value } = e.target;
    setNameDesc((prev) => ({ ...prev, [name]: value }));
  }

  // function for handle the contact section data
  function handleContactSection(e) {
    const { name, value } = e.target;
    setContactSection((prev) => ({ ...prev, [name]: value }));
  }

  //function for handle back to page
  function handleBackPage() {
    setEditImg(null); //--------------------------------------
    setEditData([]); //--------------------------------------
    setSaveId(null);
    setBtns("cancel");
    navigate("/Gallery");
  }

  //function for edit the image

  async function handleEditImg() {
    setIamge(false);
    setEditImg(null);
  }

  //function for handle the submit of the form data and api call to post the data
  async function handleSubmit(e) {
    setCallUseEffect(false);
    setStoreImgToDisplay((prev) => [...prev, image]);
    e.preventDefault();
    setBtns("update");
    const formData = new FormData();
    formData.append("name", nameDesc.Name);
    formData.append("description", nameDesc.Description);
    formData.append("image", image);
    formData.append("companyName", contactSection.companyName);
    formData.append("address", contactSection.address);
    formData.append("phone", Number(contactSection.phone));
    formData.append("instaUrl", contactSection.instaUrl);
    formData.append("linkedInUrl", contactSection.linkedInUrl);

    // api call for posting the contact form data to the backend
    if (
      nameDesc.Name.length > 1 &&
      nameDesc.Description.length > 1 &&
      contactSection.companyName.length > 1 &&
      contactSection.address.length > 1 &&
      contactSection.instaUrl.length > 1 &&
      contactSection.phone.length > 1 &&
      contactSection.linkedInUrl.length > 1 &&
      saveId === null
    ) {
      console.log("normal api call");
      const response = await axios.post(
        "http://192.168.1.82:4000/contactdetail",
        formData
      );
      if (response.data.success) {
        setNameDesc({ Name: "", Description: "" });
        setIamge(false);
        setContactSection({
          companyName: "",
          address: "",
          phone: "",
          instaUrl: "",
          linkedInUrl: "",
        });
        toast.success("data uploaded successfully", {
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
    }
    //error message
    else if (
      nameDesc.Name.length == 0 &&
      nameDesc.Description.length == 0 &&
      contactSection.companyName.length == 0 &&
      contactSection.address.length == 0 &&
      contactSection.instaUrl.length == 0 &&
      contactSection.phone.length == 0 &&
      contactSection.linkedInUrl.length == 0 &&
      saveId === null
    ) {
      console.log(formData);
      toast.error("please fill the form", {
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
    //FOR UPDATE THE CONTACT DETAILS API (i.e edit)
    else if (
      nameDesc.Name.length !== 0 &&
      nameDesc.Description.length !== 0 &&
      contactSection.companyName.length !== 0 &&
      contactSection.address.length !== 0 &&
      contactSection.instaUrl.length !== 0 &&
      contactSection.phone.length !== 0 &&
      contactSection.linkedInUrl.length !== 0 &&
      saveId !== null
    ) {
      console.log("update api call");
      const response = await axios.post(
        `http://192.168.1.82:4000/contactdetailUpdate/${saveId}`,
        formData
      );

      if (response.data.success) {
        setNameDesc({ Name: "", Description: "" });
        setIamge(false);
        setContactSection({
          companyName: "",
          address: "",
          phone: "",
          instaUrl: "",
          linkedInUrl: "",
        });
        toast.success("data updated successfully", {
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
      } else {
        toast.error("error accour while upload", {
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
    }
  }

  console.log(image, editImg);

  return (
    <div className="gallery-container">
      <AdminNav />
      <AdminNavTop />
      <div className="Admin-center">
        <ManageGallery />
        <div className="contact-details">
          <h1>Add Contact Details</h1>
          <hr className="contact-hr" />
          {/* flex */}
          <div className="contact-details-sub">
            {/* flex -parent */}
            <div className="left-contact">
              {/* flex-column */}
              {/* border-dotted */}
              <div className="upload-image">
                <p>Upload Contact Image</p>
                <label htmlFor="upload" className="upload">
                  <img src={assets.image_upload} alt="" />
                </label>
                <input
                  onChange={(e) => handleImage(e)}
                  type="file"
                  id="upload"
                  required
                  hidden
                />
              </div>
              {/* flex-column */}
              <form className="form-content" onSubmit={(e) => handleSubmit(e)}>
                <div className="name-container">
                  <label>Image Name</label>
                  <input
                    value={nameDesc.Name}
                    name="Name"
                    onChange={(e) => handleNameDesc(e)}
                    type="text"
                    placeholder="Name"
                  />
                </div>

                <div className="description-container">
                  <label>Image Description</label>
                  <div className="des-div">
                    <textarea
                      name="Description"
                      onChange={(e) => handleNameDesc(e)}
                      value={nameDesc.Description}
                      className="text-area"
                      cols={300}
                      type="text"
                      placeholder="Description"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="right-contact">
              <p className="preview">Preview</p>
              {/* flex */}
              <div className="right-side-preview">
                <div className={image ? "image-pre" : "border-image"}>
                  {image ? (
                    <img
                      className="delete"
                      onClick={() => handleEditImg(editImg)}
                      src={assets.delete_logo}
                      alt=""
                    />
                  ) : null}

                  {editImg ? (
                    <img
                      src={editImg}
                      className={editImg ? "pre-image" : "image-available"}
                    />
                  ) : (
                    <img
                      className={!image ? "image-available" : "pre-image"}
                      src={
                        image
                          ? URL.createObjectURL(image)
                          : assets.no_prev_image
                      }
                      alt="No image available"
                    />
                  )}
                  {editImg ? (
                    <span className={!editImg ? "center-text" : "none"}>
                      {editImg ? "" : "No image"}
                    </span>
                  ) : (
                    <span className={!image ? "center-text" : "none"}>
                      No image
                    </span>
                  )}
                </div>
                {/* flex-column -parent*/}
                <div className="details-right">
                  {/* flex-column */}
                  <div className="name-detail">
                    <h2>Image Name</h2>
                    {/* support team */}
                    <p>{nameDesc.Name ? nameDesc.Name : ""}</p>
                  </div>

                  <div className="image-detail">
                    <h2>Image Description</h2>
                    {/* Help desk and support staff in office */}
                    <p>{nameDesc.Description ? nameDesc.Description : ""}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact -section -details */}
        <div className="contact-section">
          <h1>Add Contact Section Detail</h1>
          <hr className="section-hr" />
          {/* flex-col */}
          <form className="col-flex" onSubmit={(e) => handleSubmit(e)}>
            <div className="company">
              <label htmlFor="">Company Name</label>
              <input
                type="text"
                name="companyName"
                onChange={(e) => handleContactSection(e)}
                value={contactSection.companyName}
                placeholder="Enter Title Name"
              />
            </div>
            {/* address:"",phone:"", instaUrl:"", linkedInUrl:"" */}
            <div className="address">
              <label htmlFor="">Address</label>
              <input
                type="text"
                name="address"
                onChange={(e) => handleContactSection(e)}
                value={contactSection.address}
                placeholder="Enter Company Address"
              />
            </div>

            <div className="phone">
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                name="phone"
                onChange={(e) => handleContactSection(e)}
                value={contactSection.phone}
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="insta">
              <label htmlFor="">Instagram URL</label>
              <input
                type="text"
                name="instaUrl"
                onChange={(e) => handleContactSection(e)}
                value={contactSection.instaUrl}
                placeholder="Instagram URL"
              />
            </div>

            <div className="linkedIn">
              <label htmlFor="">LinkedIn URL</label>
              <input
                type="text"
                name="linkedInUrl"
                onChange={(e) => handleContactSection(e)}
                value={contactSection.linkedInUrl}
                placeholder="linkedIn URL"
              />
            </div>
          </form>
        </div>

        {/* cancel-update */}
        <div className="cancel-update">
          <button
            className={btns === "cancel" ? "greenBackground" : "cancel"}
            onClick={() => handleBackPage()}
          >
            cancel
          </button>
          <button
            type="submit"
            // btns === "update" ? : "update"
            className={"greenBackground"}
            onClick={(e) => handleSubmit(e)}
          >
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageContact;
