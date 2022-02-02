import React from "react";
/**
 * iml
 */
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>error page</h2>
      <Link to='/' className='btn'>
        back home
      </Link>
    </div>
  );
};

export default Error;
