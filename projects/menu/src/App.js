/**
 *rafce
 */
import React, { useState } from "react";
import Menu from "./Menu.js";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((el) => el.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      return setMenuItems(items);
    }
    const newItems = items.filter((el) => el.category === category);
    return setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
