/**
 * rafce
 */
import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  /**
   * nfn
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: Date.now().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      <h2>useReducer tutorial</h2>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
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
      {state.people.map((el) => {
        // const { id, name } = el;
        return (
          <div className='item' key={el.id}>
            <h4>{el.name}</h4>
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: el.id })}
            >
              remove item
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
