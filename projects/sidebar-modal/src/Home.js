import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

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
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
