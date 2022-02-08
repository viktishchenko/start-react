import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ idx, rgb, weight, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${idx > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='persent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {/* <p className='color-value'>{rgbToHex(...rgb)}</p> */}
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
