import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  console.log("quiz :>> ", quiz);
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>setup quiz</h2>
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              className='form-input'
              type='number'
              name='amount'
              id='amount'
              min={1}
              max={50}
              value={quiz.amount}
              onChange={handleChange}
            />
          </div>
          {/* category */}
          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              className='form-input'
              name='category'
              id='category'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sports'>sports</option>
              <option value='history'>history</option>
              <option value='politics'>politics</option>
            </select>
          </div>
          {/* difficalty */}
          <div className='form-control'>
            <label htmlFor='difficalty'>select difficalty</label>
            <select
              className='form-input'
              name='difficalty'
              id='difficalty'
              value={quiz.difficalty}
              onChange={handleChange}
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}
          <button className='submit-btn' type='submit' onClick={handleSubmit}>
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
