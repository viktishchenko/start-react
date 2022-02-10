import React from "react";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

const App = () => {
  if (false) {
    return (
      <div className='loading'>
        <h2>loading...</h2>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
