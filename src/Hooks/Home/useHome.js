import React, { useState, useEffect, useContext } from "react";
//firease
import {
  getDocs,
  collection,
  getFirestore,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import {
  ref,
  onValue,
  set,
  remove,
  update,
  getDatabase,
} from "firebase/database";
import app from "../../Services/firebase";
import { DataContext } from "../../Context";
import { async } from "@firebase/util";
import { uid } from "uid";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export const useHome = () => {
  const {
    data,
    setData,
    judul,
    setJudul,
    deskripsi,
    setDeskripsi,
    userId,
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
    //todo
    toggleEditJudulTodo,
    setToggleEditJudulTodo,
    toggleAddJudulTodo,
    setToggleAddJudulTodo,
    toggleEditTodo,
    setToggleEditTodo,
    judulTodo,
    setJudulTodo,
    todo,
    setTodo,
    //komentar
    toggleEditKomentar,
    setToggleEditKomentar,
    komentar,
    setKomentar,
  } = useContext(DataContext);
  const [urutan, setUrutan] = useState(0);
  const db = getFirestore(app);
  const realtimedb = getDatabase(app);
  const getCollection = collection(db, "apa");
  const OnChangeJudul = (e) => {
    setJudul(e.target.value);
  };
  const OnChangeDeskripsi = (e) => {
    setDeskripsi(e.target.value);
  };
  const GetData = (e) => {
    setData([]);
    onValue(ref(realtimedb), (snapshot) => {
      const databd = snapshot.val();
      setData([]);

      Object.entries(databd).map(([key, val], i) => {
        Object.entries(val).map(([key, value], i) => {
          if (key === "card") {
            setData(value);
            setIsLoading(true);
          } else {
          }
        });
      });
    });
  };

  const getId = (id, ket) => {
    if (ket === "card") {
      const hasil = data.findIndex((x) => x.id_card === id);
      return hasil;
    } else if (ket === "task") {
      const hasil = data
        .map((x) => x.task?.findIndex((y) => y.id_task === id))
        .filter((x) => x >= 0)
        .join();
      return hasil;
    } else if (ket === "keduanya") {
      let hasil = [];
      data?.forEach((x, idxCard) => {
        x.task?.forEach((y, idxTask) => {
          if (y.id_task === id) {
            hasil.push({
              noUrutCard: idxCard,
              noUrutTask: idxTask,
            });
          }
        });
      });
      return hasil;
    } else if (ket === "judul todo") {
      let hasil = [];
      data?.forEach((x, idxCard) => {
        x.task?.forEach((y, idxTask) => {
          y.todo?.forEach((z, idxJudulTodo) => {
            hasil.push({
              z,
            });
          });
        });
      });
    }
  };

  // add judul card
  const onChangeJudulCard = (e) => {
    setJudulCard(e.target.value);
  };
  const addJudulCard = (e) => {
    const uuid = uid(16);

    if (judulCard.length > 0) {
      setIsLoading(true);
      set(ref(realtimedb, `todolist/card/${e ? Object.keys(e).length : 0}`), {
        judul_card: judulCard,
        id_card: uuid,
      })
        .then((res) => {
          setJudulCard("");
          setIsLoading(false);
        })
        .catch((error) => {
          setJudulCard("");
          console.log(error);
          setIsLoading(false);
        });
    }
  };
  // add judul task
  const onChangeTask = (e) => {
    setJudulTask(e.target.value);
  };
  const addJudulTask = (e) => {
    const uuid = uid(16);
    console.log(e, "ini dari props");

    console.log(getId(e.id_task, "keduanya"), "ini dari get index ");
    const noUrutCard = getId(e.id_card, "card");
    const noUrut = getId(e.id_task, "keduanya");

    if (judulTask.length > 0) {
      setIsLoading(true);
      set(
        ref(
          realtimedb,

          `todolist/card/${
            e.id_task ? noUrut[0].noUrutCard : noUrutCard
          }/task/${
            e.task ? e.task.length : e.id_task ? noUrut[0].noUrutTask : 0
          }`
        ),

        {
          judul_task: judulTask,
          deskripsi_task: e.deskripsi_task ? e.deskripsi_task : "",
          id_task: e.id_task ? e.id_task : uuid,
          todo: e.todo ? e.todo : "",
          komentar: e.komentar ? e.komentar : "",
          tag: e.tag ? e.tag : "",
        }
      )
        .then((res) => {
          setJudulTask("");
          setIsLoading(false);
        })
        .catch((error) => {
          setJudulTask("");
          setIsLoading(false);
          console.log(error);
        });
    }
  };
  //add deskripsi
  const onChangeDeskripsiTask = (e) => {
    setDeskripsiTask(e.target.value);
  };
  const addDeskripsiTask = (e) => {
    const noUrut = getId(e.id_task, "keduanya");
    if (deskripsiTask.length > 0) {
      set(
        ref(
          realtimedb,
          `todolist/card/${noUrut[0].noUrutCard}/task/${noUrut[0].noUrutTask}`
        ),

        {
          judul_task: e.judul_task,
          deskripsi_task: deskripsiTask,
          id_task: e.id_task,
          todo: e.todo ? e.todo : "",
          komentar: e.komentar ? e.komentar : "",
          tag: e.tag ? e.tag : "",
        }
      )
        .then((res) => {
          setDeskripsiTask("");
          setIsLoading(false);
        })
        .catch((error) => {
          setDeskripsiTask("");
          setIsLoading(false);
          console.log(error);
        });
    }
  };
  //menghapus task
  const removeTask = (e) => {
    const noUrut = getId(e.id_task, "keduanya");

    console.log(e);
    console.log(noUrut);
    console.log(
      data
        .filter((x, i) => i === noUrut[0].noUrutCard)[0]
        .task.filter((x, i) => i !== noUrut[0].noUrutTask)
    );
    const filteredTask = data
      .filter((x, i) => i === noUrut[0].noUrutCard)[0]
      .task.filter((x, i) => i !== noUrut[0].noUrutTask);

    setIsLoading(true);
    set(
      ref(
        realtimedb,

        `todolist/card/${noUrut[0].noUrutCard}/task`
      ),

      filteredTask
    )
      .then((res) => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };
  //menghapus card
  const removeCard = (e) => {
    const filteredCard = data.filter((x, i) => x.id_card !== e.id_card);

    setIsLoading(true);
    set(
      ref(
        realtimedb,

        `todolist/card`
      ),

      filteredCard
    )
      .then((res) => {
        setIsLoading(false);
        console.log(res);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };
  //add judul todo
  const addJudulTodo = (e) => {
    const uuid = uid(16);
    console.log(e, "ini dari props");

    console.log(getId(e.id_task, "keduanya"), "ini dari get index ");
    const noUrutCard = getId(e.id_card, "card");
    const noUrut = getId(e.id_task, "keduanya");
  };
  return {
    data,
    setData,
    OnChangeJudul,
    OnChangeDeskripsi,
    judul,
    setJudul,
    GetData,
    taskId,
    setTaskId,

    onChangeJudulCard,
    judulCard,
    setJudulCard,
    addJudulCard,
    judulTask,
    setJudulTask,
    onChangeTask,
    addJudulTask,
    isLoading,
    setIsLoading,
    onChangeDeskripsiTask,
    deskripsiTask,
    setDeskripsiTask,
    addDeskripsiTask,
    toggleEditDeskripsiTask,
    setToggleEditDeskripsiTask,
    toggleEditJudulTask,
    setToggleEditJudulTask,
    removeTask,
    removeCard,
    dataPopUp,
    setDataPopUp,
    //todo
    toggleEditJudulTodo,
    setToggleEditJudulTodo,
    toggleAddJudulTodo,
    setToggleAddJudulTodo,
    toggleEditTodo,
    setToggleEditTodo,
    judulTodo,
    setJudulTodo,
    todo,
    setTodo,
    //komentar
    toggleEditKomentar,
    setToggleEditKomentar,
    komentar,
    setKomentar,
    addJudulTodo,
  };
};
