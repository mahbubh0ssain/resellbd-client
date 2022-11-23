import React, { createContext } from "react";

export const AuthContext = createContext("");
const auth = getAuth
const Authprovider = ({ children }) => {

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default Authprovider;
