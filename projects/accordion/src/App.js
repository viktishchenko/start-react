import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

const App = () => {
  const [question] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about smth</h3>
        <section className='info'>
          {question.map((el) => {
            return <SingleQuestion key={el.id} {...el} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
