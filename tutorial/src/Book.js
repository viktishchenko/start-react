import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    console.log("btn was clicked!");
  };
  const clickComplexBtn = () => {
    console.log(author);
  };
  return (
    <section className='book'>
      <img src={img} alt='book' />
      <h4
        onClick={() => {
          console.log(title);
        }}
        style={{ color: "#4360a2", fontSize: "1.2rem", paddingTop: "1rem" }}
      >
        {title}
      </h4>
      <h3>{author}</h3>
      <button onClick={clickHandler}>click me!</button>
      <button
        onClick={() => {
          clickComplexBtn(author);
        }}
      >
        complex btn!
      </button>
    </section>
  );
};

export default Book;
