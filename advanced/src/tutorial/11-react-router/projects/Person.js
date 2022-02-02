import React, { useState, useEffect } from "react";
/**
 * iml
 */
import { Link, useParams } from "react-router-dom";
import { data } from "../../../data";

const Person = () => {
  const [name, setName] = useState("default name");
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((el) => {
      return el.id === parseInt(id);
    });
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <Link className='btn' to='/people'>
        back to people
      </Link>
    </div>
  );
};

export default Person;
