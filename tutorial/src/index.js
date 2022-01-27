import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// SETUP VARS

const firstBook = {
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg",
};

const secondBook = {
  title: "Little Blue Truck's Valentine",
  author: "Alice Schertle",
  img: "https://images-na.ssl-images-amazon.com/images/I/817-Vrzp%2BtL._AC_UL200_SR200,200_.jpg",
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        cost={7}
        cover='Hardcover'
      >
        <p style={{ padding: "0.5rem", backgroundColor: "aliceblue" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          adipisci?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        sales=' Sale!'
        cover='Paperback'
        onsales={1.25}
      />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, price, onsales, cost, sales, cover } = props;
  return (
    <section className='book'>
      <img src={img} alt='book' />
      <h4 style={{ color: "#4360a2", fontSize: "1.2rem", paddingTop: "1rem" }}>
        {title}
      </h4>
      <h3>{author}</h3>
      {/* <h3>{author.toUpperCase()}</h3> */}
      <p>{price}</p>
      <p>
        ${cost}
        {onsales}
        <span
          style={{
            backgroundColor: "#ff8300",
            marginLeft: "5px",
          }}
        >
          {sales}
        </span>
      </p>
      <p>{cover}</p>
      {props.children}
    </section>
  );
};

// const Book = ({
//   img,
//   title,
//   author,
//   price,
//   onsales,
//   cost,
//   sales,
//   cover,
//   children,
// }) => {
//   // const { img, title, author, price, onsales, cost, sales, cover } = props;
//   return (
//     <section className='book'>
//       <img src={img} alt='book' />
//       <h4 style={{ color: "#4360a2", fontSize: "1.2rem", paddingTop: "1rem" }}>
//         {title}
//       </h4>
//       <h3>{author}</h3>
//       {/* <h3>{author.toUpperCase()}</h3> */}
//       <p>{price}</p>
//       <p>
//         ${cost}
//         {onsales}
//         <span
//           style={{
//             backgroundColor: "#ff8300",
//             marginLeft: "5px",
//           }}
//         >
//           {sales}
//         </span>
//       </p>
//       <p>{cover}</p>
//       {children}
//     </section>
//   );
// };

// const Book = (props) => {
//   return (
//     <section className='book'>
//       <img src={props.img} alt='book' />
//       <h4 style={{ color: "#4360a2", fontSize: "1.2rem", paddingTop: "1rem" }}>
//         {props.title}
//       </h4>
//       <h3>{props.author}</h3>
//       {/* <h3>{author.toUpperCase()}</h3> */}
//       <p>{props.price}</p>
//       <p>
//         ${props.cost}
//         {props.onsales}
//         <span
//           style={{
//             backgroundColor: "#ff8300",
//             marginLeft: "5px",
//           }}
//         >
//           {props.sales}
//         </span>
//       </p>
//       <p>{props.cover}</p>
//     </section>
//   );
// };

// const Book = () => {
//   return (
//     <article className='book'>
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src='https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL200_SR200,200_.jpg'
//     alt='book'
//   />
// );

// const Title = () => {
//   const title = "I Love You to the Moon and Back";
//   return (
//     <h4 style={{ color: "#4360a2", fontSize: "1.2rem", paddingTop: "1rem" }}>
//       {title}
//     </h4>
//   );
// };
// const author = "Amelia Hepworth";
// const Author = () => {
//   return (
//     <Fragment>
//       <h3>{author.toUpperCase()}</h3>
//       {/* <p>{let num = 7}</p> :>> need return value! */}
//       <p style={{ fontSize: "0.8rem" }}>{6 + 6}</p>
//     </Fragment>
//   );
// };

/* const BookList = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello,World!")
  );
}; */

ReactDOM.render(<BookList />, document.getElementById("root"));
