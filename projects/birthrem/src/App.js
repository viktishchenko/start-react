import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  /**
   * nfn
   */
  const toggleBtnHandler = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday's today</h3>
        <List people={people} />
        <button onClick={toggleBtnHandler}>clear all</button>
      </section>
    </main>
  );
};

export default App;
