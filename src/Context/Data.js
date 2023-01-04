import React, { useContext, createContext, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [userId, setUserId] = useState();

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        judul,
        setJudul,
        deskripsi,
        setDeskripsi,
        userId,
        setUserId,
      }}
      {...props}
    />
  );
};
