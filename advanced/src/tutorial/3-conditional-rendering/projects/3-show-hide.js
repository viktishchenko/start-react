/**
 * rafce
 */

import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h2 style={{ marginBottom: "1.5rem" }}>conditional rendering</h2>
      <h4>→ useEffect with cleanup function ←</h4>
      <button
        className='btn'
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  /**
   * nfn
   */
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <>
      <h2 style={{ marginTop: "1.5rem" }}>window</h2>
      <h2>size: {size}px</h2>
    </>
  );
};

export default ShowHide;
