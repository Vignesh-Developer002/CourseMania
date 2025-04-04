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
          if (data.length === 20) {
            setUserData(data);
          } else if (data.length === 30) {
            setCertificateData(data);
          }
          setUserData(data);
          setIsLoading(false);
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
