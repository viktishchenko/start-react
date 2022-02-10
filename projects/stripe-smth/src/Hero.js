import React, { useContext } from "react";
import phonrImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const data = useGlobalContext();
  console.log("data :>> ", data);
  return <h2>Hero component</h2>;
};

export default Hero;
