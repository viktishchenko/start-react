import React, { useState, useContext } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>;
};

/**
 *  context with custom hook
 *  enf
 *
 *  export const useGlobalContext = () => {
 *    return useContext(AppContext);
 *  };
 */

export { AppContext, AppProvider };
