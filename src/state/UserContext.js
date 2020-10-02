import React, { useState, useEffect, createContext } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "./Helpers";

export const UserContext = createContext(null);

export const State = ({ children }) => {
  const [session, setSession] = useState(loadFromLocalStorage("userSession"));

  useEffect(() => {
    saveToLocalStorage(session, "userSession");
  }, [session]);

  const clearSession = () => {
    setSession(null);
  }

  const addUser = (user) => {
    setSession(user);
  }

  return (
    <UserContext.Provider value={[session, clearSession, addUser]}>
      {children}
    </UserContext.Provider>
  );
};


