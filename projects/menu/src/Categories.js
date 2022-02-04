import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((el, idx) => {
        return (
          <button
            type='button'
            key={idx}
            className='filter-btn'
            onClick={() => {
              filterItems(el);
            }}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
