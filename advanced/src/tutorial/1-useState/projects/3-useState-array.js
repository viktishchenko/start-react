/**
 * imrs → rafce
 */

import React from "react"; // we can use {useState} here instead of React.useState([]) down below
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPerson = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPerson);
  };
  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h3>{name}</h3>
            <button
              onClick={() => {
                removeItem(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button
        className='btn'
        onClick={() => {
          setPeople([]);
        }}
      >
        remove item
      </button>
    </>
  );
};

export default UseStateArray;
