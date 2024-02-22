import React, { useContext, createContext, useState } from "react";

export const DataLoginContext = createContext({});

export const DataLoginProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false)

  return (
    <DataLoginContext.Provider
      value={{ email, setEmail, password, setPassword, loginLoading, setLoginLoading }}
      {...props}
    />
  );
};
