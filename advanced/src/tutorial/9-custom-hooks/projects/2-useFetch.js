import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((req) => {
        if (req.status >= 200 && req.status <= 299) {
          //   console.log("data :>> ", data); // pending
          return req.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error("something goes wrong");
        }
      })
      .then((res) => {
        // console.log("res :>> ", res); // data
        setData(res);
        setIsLoading(false);
      });
  }, [url]);

  //   return { isLoading, isError, data };
  return [isLoading, isError, data];
};
