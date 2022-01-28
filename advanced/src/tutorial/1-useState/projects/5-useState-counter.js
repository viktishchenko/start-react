/**
 * rafce
 */
import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  const complexCounter = () => {
    setTimeout(() => {
      //   setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <h2>useState counter example</h2>
      <h2>regular counter</h2>
      <h1 style={{ margin: "3rem 0" }}>{value}</h1>
      <button
        className='btn'
        onClick={() => {
          setValue(value + 1);
        }}
      >
        increase
      </button>
      <button className='btn' onClick={reset}>
        reset
      </button>
      <button
        className='btn'
        onClick={() => {
          setValue(value - 1);
        }}
      >
        decrease
      </button>
      <h2 style={{ marginTop: "3rem" }}>async counter</h2>
      <h1 className='output' style={{ margin: "3rem 0" }}>
        {value}
      </h1>
      <button className='btn' onClick={complexCounter}>
        increase
      </button>
    </>
  );
};

export default UseStateCounter;
