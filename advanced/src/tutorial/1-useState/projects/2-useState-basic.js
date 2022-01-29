/**
 * start with use
 * component must be uppercase
 * invoke inside function/component body
 * don't call hooks conditionally (
 * see down below and useEffect 1-st task
 * )
 *
 * imrs → rafce
 */

import React, { useState } from "react";

const UseStateBasic = () => {
  /**
   *   console.log(useState(1)); // Array [1, f]
   *   let value = useState("banana")[0]; // banana
   *   value = useState("banana")[1]; // f
   */

  const [text, setText] = useState("random title");
  const clickHandler = () => {
    if (text === "random title") {
      setText("new title"); // new title
    } else {
      setText("random title");
    }
  };

  return (
    <div>
      <h2>useState basic example</h2>
      <h3>{text}</h3>
      <button type='button' className='btn' onClick={clickHandler}>
        change title
      </button>
    </div>
  );
};

export default UseStateBasic;
