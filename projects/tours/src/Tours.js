import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className='title'>
        <h2>ours tours</h2>
        <div className='underline'></div>
        <div>
          {tours.map((el) => {
            return <Tour key={el.id} {...el} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
