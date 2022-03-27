import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};
// const fetchData = async () => {
//   setLoading(true);
//   const response = await fetch(url);
//   const data = await response.json();
//   setLoading(false);
//   setCocktails(data);
// };

// useEffect(() => {
//   fetchData();
// }, []);

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
