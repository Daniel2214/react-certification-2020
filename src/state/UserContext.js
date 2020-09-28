import React, { useState, useEffect, createContext } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "./Helpers";

export const UserContext = createContext(null);

export const State = ({ children }) => {
  const [session, setSession] = useState(loadFromLocalStorage("userSession"));

  useEffect(() => {
    saveToLocalStorage(session, "userSession");
  }, [session]);

  return (
    <UserContext.Provider value={[session, setSession]}>
      {children}
    </UserContext.Provider>
  );
};


