import React from "react";
import { useEffect, useState } from "react";

const Error = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await fetch("https://swappi.dev/api/people/1/");

        if (!response.ok) {
          const errorMessage = `Failed to fetch data. Status: ${response.status}`;
          throw new Error(errorMessage);
        } else {
          const result = await response.json();
          console.log(result);
          setData(result);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchedData();
  }, []);

  return (
    <div>
      <h2>에러테스트</h2>
      {data ? <p>{JSON.stringify(data)}</p> : <p>에러:{error}</p>}
    </div>
  );
};

export default Error;
