/**
 * rafce
 */
import React from "react";
import { useFetch } from "./2-useFetch";
const url = "https://api.github.com/users";

const FetchExample = () => {
  /**
   * custom hook
   */

  const [isLoading, isError, data] = useFetch(url);
  //   const { isLoading, isError, data } = useFetch(url);

  if (isLoading) {
    return (
      <>
        <h2>loading...</h2>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <h2>Error...</h2>
        <h4>something goes wrong ¯\_(ツ)_/¯</h4>
      </>
    );
  }

  return (
    <>
      <h2>custom hooks / fetch data</h2>
      <p>hooray, our data is here...</p>
      {data.map((el) => {
        return (
          <div key={el.id} className='item'>
            <h4>{el.login}</h4>
          </div>
        );
      })}
    </>
  );
};

export default FetchExample;
