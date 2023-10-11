import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] =
    useState[{ name: "raven", email: "raven@umbrella.com", dob: "09/11/2001" }];
  return <UserContext.Provider value={user}></UserContext.Provider>;
};

export const UseUser = () => useContext(UserContext);
