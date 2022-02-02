import React from "react";
/**
 * npm i react-router-dom@5.2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";

/**
 * rafce
 */

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/people' element={<People />} />
        <Route path='*' element={<Error />} />
        <Route path='/people/person/:id' element={<Person />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
