import React, { useContext, createContext, useState } from "react";

export const DataLoginContext = createContext({});

export const DataLoginProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false)
  const [fireUuid, setFireUuid] = useState(null);
  return (
    <DataLoginContext.Provider
      value={{ email, setEmail, password, setPassword, loginLoading, setLoginLoading, fireUuid, setFireUuid, }}
      {...props}
    />
  );
};
