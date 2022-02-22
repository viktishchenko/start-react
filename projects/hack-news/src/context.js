import React, { useContext } from "react";
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

import reducer from "reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

/**
 * nf
 */
const initialState = () => {};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>;
};

/**
 * enf
 */

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
