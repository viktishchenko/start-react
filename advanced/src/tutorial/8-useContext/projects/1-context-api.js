/**
 * more components
 * fix - context api, redux (for more complex cases)
 *
 * rafce
 */
import React, { useState, useContext } from "react";
import { data } from "../../../data";

const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((el) => el.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <h2>ContextAPI / useContext</h2>
      <List />
    </PersonContext.Provider>
  );
};

/**
 * nfn
 */
const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((el) => {
        return <SinglePerson key={el.id} {...el} />;
      })}
    </>
  );
};

/**
 * nfn
 */
const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
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

export default ContextAPI;
