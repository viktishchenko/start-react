/**
 * rafce
 */
import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  /**
   * nfn
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: Date.now().toString(), name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <h2>useReducer tutorial</h2>
      {showModal && <Modal />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type='submit'>add smth</button>
      </form>
      {people.map((el) => {
        // const { id, name } = el;
        return (
          <div key={el.id}>
            <h4>{el.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
