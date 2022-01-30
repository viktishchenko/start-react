/**
 * rafce
 */

import React, { useState, useEffect } from "react";

const MultipleInputs = () => {
  /**
   *
   *   const [firstName, setFirstName] = useState("");
   *   const [email, setEmail] = useState("");
   *   const [age, setAge] = useState("");
   *
   */

  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  /**
   * nfn ↓
   */

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("person :>> ", { ...person });
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: Date.now().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    } else {
      console.log("empty value");
    }
  };

  return (
    <>
      <h2>multiple inputs</h2>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='firstName'>Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={person.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email : </label>
          <input
            type='text'
            id='email'
            name='email'
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Age : </label>
          <input
            type='text'
            id='age'
            name='age'
            value={person.age}
            onChange={handleChange}
          />
        </div>
        <button type='submit' onClick={handleSubmit}>
          add person
        </button>
      </form>
      {people.map((el) => {
        const { id, firstName, email, age } = el;
        return (
          <div key={id} className='item'>
            <h4>{firstName}</h4>
            <p>{age}</p>
            <p>{email}</p>
          </div>
        );
      })}
    </>
  );
};

export default MultipleInputs;
