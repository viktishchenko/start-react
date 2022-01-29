/**
 * rafce
 */

import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getGithubUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users); // :>> !!! infinite loop !!!
    /**
     * setUsers(users) :>> infinite loop
     * if
     * useEffect will not contain an empty array
     * at the end:
     * useEffect(() => {
     * getGithubUsers();
     * }, []);
     *    ↑
     */
    console.log("users :>> ", users);
  };

  useEffect(() => {
    getGithubUsers();
  }, []);
  return (
    <>
      <h2>useEffect fetch data</h2>
      <h2>github users</h2>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
