/**
 * rafce
 */

import React, { useEffect, useRef } from "react";

/**
 * preserves value, just like useState, but
 * DOES NOT trigger re-render
 * target DOM nodes/element
 */

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  /**
   * nfn
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <h2>useRef example</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
