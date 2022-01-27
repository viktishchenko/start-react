import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// SETUP VARS
const books = [
  {
    id: 1,
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    title: "Little Blue Truck's Valentine",
    author: "Alice Schertle",
    img: "https://images-na.ssl-images-amazon.com/images/I/817-Vrzp%2BtL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    title: "Golden Girls: Goodnight, Girls",
    author: "Samantha Brooke",
    img: "https://images-na.ssl-images-amazon.com/images/I/914QgVSAVTL._AC_UL200_SR200,200_.jpg",
  },
];

/* 
=============
with spread
=============
*/

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

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

// function BookList() {
//   return (
//     <section className='booklist'>
//       {books.map((book) => {
//         return <Book key={book.id} book={book} />;
//       })}
//     </section>
//   );
// }

// const Book = (props) => {
//   const { img, title, author } = props.book;
//   return (
//     <section className='book'>
//       <img src={img} alt='book' />
//       <h4 style={{ color: "#4360a2", fontSize: "1.2rem", paddingTop: "1rem" }}>
//         {title}
//       </h4>
//       <h3>{author}</h3>
//     </section>
//   );
// };

ReactDOM.render(<BookList />, document.getElementById("root"));
