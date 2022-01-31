/**
 * more components
 * fix - context api, redux (for more complex cases)
 *
 * rafce
 */
import React, { useState } from "react";
import { data } from "../../../data";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((el) => el.id !== id);
    });
  };
  return (
    <>
      <h2>prop drilling</h2>
      <List people={people} removePerson={removePerson} />
    </>
  );
};

/**
 * nfn
 */
const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((el) => {
        return <SinglePerson key={el.id} {...el} removePerson={removePerson} />;
      })}
    </>
  );
};

/**
 * nfn
 */
const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button
        onClick={() => {
          removePerson(id);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default PropDrilling;
