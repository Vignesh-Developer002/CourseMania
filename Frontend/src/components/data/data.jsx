import { useState, useEffect } from "react";

export function fetchUserData(url) {
  const [courseData, setUserData] = useState([]); // length === 20 course data
  const [certificateData, setCertificateData] = useState([]); //  length === 30 certificate data
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function userData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("No data found :(");
        } else {
          const data = await response.json();
          let courseDt = data.map((d) => d["star_rating"]);
          const certiDt = data.map((d) => d["star_rating"]);

          if (courseDt === true) {
            // (data.length === 6)
            setUserData(data);
          } else {
            // (data.length === 7)
            console.log(certiDt);
            setCertificateData(data);
          }
          setUserData(data);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    userData();
  }, []);
  return { courseData, certificateData, error, isLoading };
}
