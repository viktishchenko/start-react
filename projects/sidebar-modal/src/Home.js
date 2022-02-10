import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

const Home = () => {
  /**
   *  get context data from context.js
   *  import { useContext } from "react";
   *  import { AppContext } from "./context";
   *
   *  const ourData = useContext(AppContext);
   *  console.log("ourData :>> ", ourData);
   */

  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars />
      </button>
      <button className='btn'>show modal</button>
    </main>
  );
};

export default Home;
