/**
 * rafce
 *
 * second parametr (
 * array or list of dependences
 * see down below ↓
 * !!!empty array → only initial render!!!
 * )
 */

import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  function checkSize() {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log("render");
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h2>window width</h2>
      <h2>→ {size}px ←</h2>
    </>
  );
};

export default UseEffectCleanup;
