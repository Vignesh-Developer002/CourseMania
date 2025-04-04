import { createContext, useEffect, useState } from "react";
import { fetchUserData } from "../data/data.jsx";
import React from "react";
export const globalStore = createContext(null);

const StoreContext = ({ children }) => {
  const [cartItems, setCartItems] = useState({}); // course adding object
  const [certiItem, setCertiItem] = useState({}); // certificate adding object
  const { courseData } = fetchUserData("http://192.168.1.82:4000/courses"); // length ===20 (course)
  const { certificateData } = fetchUserData(
    "http://192.168.1.82:4000/Certification"
  ); // length ===30 (Certificate)

  //search for course
  const [searchCourse, setSearchCourse] = useState("");
  //entire course and certificate api data
  const [courseCertiData, setCourseCertiData] = useState([]);
  const [searchErr, setSearchErr] = useState("");

  //combing api data for showing in coursePage
  const [apiData, setApiData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);// setting api data to the state
  const [searchClick,setSearchClick]=useState(false)
  console.log(searchClick)
  useEffect(() => {
    let entireApiData = courseData.concat(certificateData);
    setApiData(entireApiData);
  }, [isClicked]);

  //search result storing state for display in header.jsx component
  const [filterSearchResult, setFilterSearchResult] = useState([]);
  console.log(filterSearchResult.length);
  useEffect(() => {
    let res = courseCertiData.map((data) => data.name.toLowerCase());
    for (let value of res) {
      if (value.slice(0, 2) === searchCourse) {
        filterSearchResult.push(value);
      } else if (filterSearchResult.length === 9) {
        setFilterSearchResult([]);
      } else {
        setSearchErr("No data found");
      }
    }
  }, [searchCourse]);

  // logic for combining  entire api data
  let courseCertificateApiResult;
  useEffect(() => {
    courseCertificateApiResult = courseData.concat(certificateData);
    setCourseCertiData(courseCertificateApiResult);
  }, [searchCourse]);

  // for perticular course page data and certificate page data
  const [coursesPage, setCoursePage] = useState([]);

  // course filter state
  const [isChecheck, setIsChecked] = useState({
    freeCourse: false,
    paidCourse: false,
  });
  const [courseFilterData, setCourseFilterData] = useState([]);

  // course filter type
  let courses;
  useEffect(() => {
    if (!isChecheck.freeCourse && !isChecheck.paidCourse) {
      setCourseFilterData(courseData);
    } else if (isChecheck.freeCourse && isChecheck.paidCourse) {
      setCourseFilterData(courseData);
    } else if (isChecheck.freeCourse) {
      courses = courseData.filter((course) => course.course_type === "free");
      setCourseFilterData(courses);
    } else if (isChecheck.paidCourse === true) {
      courses = courseData.filter((course) => course.course_type === "paid");
      setCourseFilterData(courses);
    }
  }, [isChecheck.freeCourse, isChecheck.paidCourse, courseData]);

  //certificate filter state
  const [isCertificateChecked, setIsCertificateChecked] = useState({
    freeCertificate: false,
    paidCertificate: false,
  });
  //certificate filter state data
  const [certificateFilterData, setCertificateFilterData] = useState([]);

  //certificate filter
  let certificates;
  useEffect(() => {
    if (
      !isCertificateChecked.freeCertificate &&
      !isCertificateChecked.paidCertificate
    ) {
      setCertificateFilterData(certificateData);
    } else if (
      isCertificateChecked.freeCertificate &&
      isCertificateChecked.paidCertificate
    ) {
      setCertificateFilterData(certificateData);
    } else if (isCertificateChecked.freeCertificate) {
      certificates = certificateData.filter(
        (certi) => certi.course_type === "free"
      );
      setCertificateFilterData(certificates);
    } else if (isCertificateChecked.paidCertificate) {
      certificates = certificateData.filter(
        (certi) => certi.course_type === "Paid"
      );
      setCertificateFilterData(certificates);
    }
  }, [
    isCertificateChecked.freeCertificate,
    isCertificateChecked.paidCertificate,
    certificateData,
  ]);

  //course ternding filter
  const [courseTrend, setCourseTrend] = useState({
    All: "All",
    BestSeller: "Best Seller",
    Trending: "Trending",
    Popular: "Popular",
    New: "New",
  });
  // course trend filter state data
  const [courseValue, setCourseValue] = useState("");

  // course trend filter logic
  let courseTrends;
  useEffect(() => {
    if (courseValue === "All") {
      setCourseFilterData(courseData);
    } else if (courseValue === "Best Seller") {
      courseTrends = courseData.filter(
        (course) => course.status === "Best Seller"
      );
      setCourseFilterData(courseTrends);
    } else if (courseValue === "Trending") {
      courseTrends = courseData.filter(
        (course) => course.status === "Trending"
      );
      setCourseFilterData(courseTrends);
    } else if (courseValue === "Popular") {
      courseTrends = courseData.filter((course) => course.status === "Popular");
      setCourseFilterData(courseTrends);
    } else if (courseValue === "New") {
      courseTrends = courseData.filter((course) => course.status === "New");
      setCourseFilterData(courseTrends);
    }
  }, [courseValue]);

  // certificate trending filter
  const [certificateTrend, setCertificateTrend] = useState({
    BestSeller: "Best Seller",
    Trending: "Trending",
    Popular: "Popular",
    All: "All",
  });
  // certificate trend filter state data
  const [certificateValue, setCertificateValue] = useState("");

  // certificate trend filter logic
  let certiTrend;
  useEffect(() => {
    if (certificateValue === "Best Seller") {
      certiTrend = certificateData.filter(
        (certi) => certi.status === "Best Seller"
      );
      setCertificateFilterData(certiTrend);
      console.log(certiTrend);
    } else if (certificateValue === "Trending") {
      certiTrend = certificateData.filter(
        (certi) => certi.status === "Trending"
      );
      setCertificateFilterData(certiTrend);
    } else if (certificateValue === "Popular") {
      certiTrend = certificateData.filter(
        (certi) => certi.status === "Popular"
      );
      setCertificateFilterData(certiTrend);
    } else if (certificateValue === "All") {
      setCertificateFilterData(certificateData);
    }
  }, [certificateValue]);

  //selecting perticular course page
  function selectCourse(courseId) {
    let selectedCourse = courseData.find((course) => course.id === courseId);
    setCoursePage(selectedCourse);
  }

  // selecting perticular certificate
  function selectCertificate(courseId) {
    let selectedcertificate = certificateData.find(
      (course) => course.id === courseId
    );
    setCoursePage(selectedcertificate);
  }

  // add to cart for Course
  function addToCart(itemId) {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  }

  //remove from cart for course
  function removeFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  // ----------------------------------------------//

  //function for certificate add
  function addToCartCerti(itemId) {
    if (!certiItem[itemId]) {
      setCertiItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCertiItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  }

  //remove from certicart
  function removeFromCerti(itemId) {
    setCertiItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  // getting total for course
  function getTotal() {
    let total = 0;
    for (let value in cartItems) {
      if (cartItems[value] > 0) {
        let cartTotal = courseData.find((item) => item.id === Number(value));
        total += cartTotal.old_price * cartItems[value];
      }
    }
    return total;
  }

  // getting total for certificate
  function getCertificateTotal() {
    let total1 = 0;
    for (let value in certiItem) {
      if (certiItem[value] > 0) {
        let certiTotal = certificateData.find(
          (item) => item.id === Number(value)
        );
        total1 += Number(certiTotal.old_price) * certiItem[value];
      }
    }
    return total1;
  }

  const contextValue = {
    cartItems,
    certiItem,
    addToCart,
    removeFromCart,
    getTotal,
    addToCartCerti,
    removeFromCerti,
    getCertificateTotal,
    selectCourse,
    coursesPage,
    selectCertificate,
    isChecheck,
    setIsChecked,
    courseFilterData,
    isCertificateChecked,
    setIsCertificateChecked,
    certificateFilterData,
    certificateTrend,
    setCertificateTrend,
    setCertificateValue,
    courseTrend,
    setCourseTrend,
    setCourseValue,
    searchCourse,
    setSearchCourse,
    filterSearchResult,
    setFilterSearchResult,
    searchErr,
    apiData,
    setIsClicked,
    setSearchClick,
    searchClick
  };

  return (
    <globalStore.Provider value={contextValue}>{children}</globalStore.Provider>
  );
};

export default StoreContext;
