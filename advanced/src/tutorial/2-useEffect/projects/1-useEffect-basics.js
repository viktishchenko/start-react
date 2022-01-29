/**
 * by default runs after every re-render
 * cleanup function
 *
 * second parametr (
 * array or list of dependences
 * see down below ↓
 * !!!empty array → only initial render!!!
 * )
 *
 * imrse / rafce
 */

import React, { useState, useEffect } from "react";
//nfn anfn met
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("render useEffect"); // :>> run second after every re-render
    if (value >= 1) {
      document.title = `New Messages (${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("Hello,World!");
  }, []);

  console.log("render component"); // :>> run first

  return (
    <div>
      <h2>useEffect basics</h2>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default UseEffectBasics;
