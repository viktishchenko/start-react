import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg'
    alt='book image'
  />
);

const Title = () => {
  const title = "I Love You to the Moon and Back";
  return (
    <h4 style={{ color: "#4360a2", fontSize: "1.2rem", paddingTop: "1rem" }}>
      {title}
    </h4>
  );
};
const author = "Amelia Hepworth";
const Author = () => {
  return (
    <Fragment>
      <h3>{author.toUpperCase()}</h3>
      {/* <p>{let num = 7}</p> :>> need return value! */}
      <p style={{ fontSize: "0.8rem" }}>{6 + 6}</p>
    </Fragment>
  );
};

/* const BookList = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello,World!")
  );
}; */

ReactDOM.render(<BookList />, document.getElementById("root"));
