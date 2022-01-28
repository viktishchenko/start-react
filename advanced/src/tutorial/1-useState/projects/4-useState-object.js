/**
 * rafce
 */

import React, { Fragment, useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  const onClickHandler = () => {
    setPerson({ ...person, message: "new message" });
  };
  return (
    <Fragment>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={onClickHandler}>
        change message
      </button>
    </Fragment>
  );
};

export default UseStateObject;
