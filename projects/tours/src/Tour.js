import React from "react";

const Tour = ({ id, name, info, price, image }) => {
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{info}</p>
        <button className='delete-btn'>not interesting</button>
      </footer>
    </article>
  );
};

export default Tour;
