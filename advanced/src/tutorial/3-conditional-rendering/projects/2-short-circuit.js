/**
 * rafce
 *
 * short-circuit evaluation
 * ternary operator
 */

import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(true);
  //   const firstValue = text || "Hello, World!";
  //   const secondValue = text && "Hello, World!";

  const toggleErrorBtn = () => {
    setIsError(!isError);
    isError
      ? (document.querySelector(".btn").innerHTML = "check error")
      : (document.querySelector(".btn").innerHTML = "toggle error");
    console.log("isError :>> ", isError);
  };

  return (
    <div>
      <h2>short circuit</h2>
      {/* <h3>value one: {firstValue}</h3>
      <h3>value two: {secondValue}</h3> */}
      <h3>{text || "hi, there!"}</h3>
      <button
        style={{ marginBottom: "2rem" }}
        className='btn'
        onClick={toggleErrorBtn}
      >
        toggle error
      </button>
      {isError && <h3>Error ...</h3>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h3>there is no error!</h3>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
