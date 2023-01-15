import React, { useContext, createContext, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [userId, setUserId] = useState();
  const [taskId, setTaskId] = useState({});
  const [judulCard, setJudulCard] = useState("");
  const [judulTask, setJudulTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [deskripsiTask, setDeskripsiTask] = useState("");
  const [toggleEditDeskripsiTask, setToggleEditDeskripsiTask] = useState(false);
  const [toggleEditJudulTask, setToggleEditJudulTask] = useState(false);

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
        judulCard,
        setJudulCard,
        judulTask,
        setJudulTask,
        isLoading,
        setIsLoading,
        deskripsiTask,
        setDeskripsiTask,
        toggleEditDeskripsiTask,
        setToggleEditDeskripsiTask,
        toggleEditJudulTask,
        setToggleEditJudulTask,
      }}
      {...props}
    />
  );
};
