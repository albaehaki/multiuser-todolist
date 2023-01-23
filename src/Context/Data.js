import React, { useContext, createContext, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = (props) => {
  const [data, setData] = useState([]);
  const [dataPopUp, setDataPopUp] = useState([]);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [userId, setUserId] = useState();
  const [taskId, setTaskId] = useState();
  const [judulCard, setJudulCard] = useState("");
  const [judulTask, setJudulTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [deskripsiTask, setDeskripsiTask] = useState("");
  const [toggleEditDeskripsiTask, setToggleEditDeskripsiTask] = useState(false);
  const [toggleEditJudulTask, setToggleEditJudulTask] = useState(false);
  const [toggleAddJudulTodo, setToggleAddJudulTodo] = useState(false);
  const [toggleEditJudulTodo, setToggleEditJudulTodo] = useState(false);
  const [toggleEditTodo, setToggleEditTodo] = useState(false);
  const [judulTodo, setJudulTodo] = useState("");
  const [todoOpenName, setTodoOpenName] = useState("");
  const [todo, setTodo] = useState("");
  const [todoOpenId, setTodoOpenId] = useState("");
  const [kondisiTodo, setKondisiTodo] = useState(false);
  const [toggleEditKomentar, setToggleEditKomentar] = useState(false);
  const [komentar, setKomentar] = useState("");

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
        dataPopUp,
        setDataPopUp,
        toggleEditJudulTodo,
        setToggleEditJudulTodo,
        toggleEditTodo,
        setToggleEditTodo,
        toggleAddJudulTodo,
        setToggleAddJudulTodo,
        judulTodo,
        setJudulTodo,
        todo,
        setTodo,
        todoOpenId,
        setTodoOpenId,
        todoOpenName,
        setTodoOpenName,
        kondisiTodo,
        setKondisiTodo,
        toggleEditKomentar,
        setToggleEditKomentar,
        komentar,
        setKomentar,
      }}
      {...props}
    />
  );
};
