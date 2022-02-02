/**
 * rafce
 */
import React from "react";
import Product from "./Product";
import { useFetch } from "../../9-custom-hooks/projects/origin/2-useFetch";
// import defaultImage from "../../../assets/default-image.jpeg";

const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);

  return (
    <>
      {/* <img src={defaultImage} /> */}
      <h2>prop types tutorial</h2>
      <h2>products</h2>
      <section className='products'>
        {products.map((el) => {
          return <Product key={el.id} {...el} />;
        })}
      </section>
    </>
  );
};

export default Index;
