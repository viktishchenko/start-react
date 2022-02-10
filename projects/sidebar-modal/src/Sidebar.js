import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  /**
   *  context data from hook
   *  import { useGlobalContext } from "./context";
   *
   *  const contextData = useGlobalContext();
   *  console.log("contextData :>> ", contextData);
   */

  return (
    <aside className={"sidebar"}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((item) => {
          const { id, url, text, icon } = item;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
