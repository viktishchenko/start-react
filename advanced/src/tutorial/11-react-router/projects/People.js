import React, { useState } from "react";
import { data } from "../../../data";
/**
 * iml
 */
import { Link } from "react-router-dom";

const People = () => {
  const [people] = useState(data);

  return (
    <div>
      <h2>people</h2>
      {people.map((el) => {
        return (
          <div className='item' key={el.id}>
            <h4> {el.name}</h4>
            <Link to={`/people/person/${el.id}`}>learn more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;
