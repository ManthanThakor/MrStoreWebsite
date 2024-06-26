
import React, { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [state, setState] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const value = { state, setState, categories, setCategories, products, setProducts };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
