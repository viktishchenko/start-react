import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
// IMPORT DATA
import { books } from "./data";
// IMPORT COMPONENT
import Book from "./Book";
import { res } from "./testing/testing";

/* 
=============
with spread
=============
*/

function BookList() {
  console.log("res :>> ", res);
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
