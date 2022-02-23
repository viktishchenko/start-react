import React from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'></div>;
  }

  return <h2>Stories component</h2>;
};

export default Stories;
