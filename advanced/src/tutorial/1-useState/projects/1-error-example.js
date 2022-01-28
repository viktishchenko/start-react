/**
 * rfce
 */

import React from "react";

function ErrorExample() {
  let title = "new random title";
  // nfn
  const clickHandler = () => {
    title = "another one";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>useState error example</h2>
      <h3>{title}</h3>
      <button type='button' className='btn' onClick={clickHandler}>
        chenge title
      </button>
    </React.Fragment>
  );
}

export default ErrorExample;
