import React, { useContext, createContext, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [userId, setUserId] = useState();
  const [taskId, setTaskId] = useState([]);

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
        taskId,
        setTaskId,
      }}
      {...props}
    />
  );
};
