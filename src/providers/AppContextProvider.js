import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [basketItem, setBasketItem] = useState([]);

  return (
    <AppContext.Provider value={{ basketItem, setBasketItem }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
