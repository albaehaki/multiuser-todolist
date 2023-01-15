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
    // console.log(onValue());
    // console.log("get data jalan");
    setData([]);
    onValue(ref(realtimedb), (snapshot) => {
      const databd = snapshot.val();
      setData([]);
      // setIsLoading(true);
      // console.log(Object.keys(databd));
      Object.entries(databd).map(([key, val], i) => {
        // console.log(val, key, i);
        // // setData([val, "12"]);
        // // console.log(Object.values(val), "ke 2");
        // if (key === "todolist") {
        //   console.log(val, "ini if");
        // } else {
        //   console.log("ini kalau gagal");
        // }
        // setData((oldArray) => [...oldArray, val]);
        Object.entries(val).map(([key, value], i) => {
          // console.log(value, key, i);
          if (key === "card") {
            // console.log(value, "ini if");
            setData(value);
            setIsLoading(true);
          } else {
            // console.log("ini kalau gagal");
          }
        });
        // Object.values(val).map((todo) => {
        // console.log(todo, "ke 2");
        // Object.values(todo).map((todo3) => {
        //   console.log(todo3, "ke 3");
        //   setData((oldArray) => [...oldArray, todo3]);
        // });
        // setData((oldArray) => [...oldArray, todo]);
        // });
      });
      // if (databd !== null) {
      //   Object.values(databd).map((todo) => {
      //     setData((oldArray) => [todo[0]]);
      //   });
      // }
    });
  };
  // const dapatDB = async () => {
  //   const sudahDapatDB = await getDocs(getCollection);
  //   setData(sudahDapatDB.docs?.map((x) => ({ ...x.data(), id: x.id })));
  //   // return sudahDapatDB.docs?.map((x) => ({ ...x.data(), id: x.id }));
  //   // return console.log(sudahDapatDB);
  // };
  // return dapatDB();

  const Menghapus = async (e) => {
    console.log(taskId[0].id);
    try {
      await deleteDoc(doc(db, "apa", taskId[0].id));
      // console.log("berhasil");
      GetData();
    } catch (e) {
      // console.log(e);
    }
  };
  // add judul card
  const onChangeJudulCard = (e) => {
    // console.log(e.target.value);
    setJudulCard(e.target.value);
  };
  const addJudulCard = (e) => {
    // console.log("add judul jalan");
    const uuid = uid(16);
    // console.log(Object.keys(e).length);
    // const coba = 1;
    if (judulCard.length > 0) {
      setIsLoading(true);
      set(ref(realtimedb, `todolist/card/${e ? Object.keys(e).length : 0}`), {
        judul_card: judulCard,
        id_card: uuid,
        no_urut: e ? Object.keys(e).length : 0,
      })
        .then((res) => {
          setJudulCard("");
          setIsLoading(false);
          // return console.log(res, "berhasil");
        })
        .catch((error) => {
          setJudulCard("");
          // console.log(error);
          setIsLoading(false);
        });
    }
  };
  // add judul card
  const onChangeTask = (e) => {
    // console.log(e.target.value);
    setJudulTask(e.target.value);
  };
  const addJudulTask = (e) => {
    const uuid = uid(16);
    // console.log(uid(16));
    // console.log(e ? "a" : "b");
    // console.log(e);
    // if (e.task) {
    //   console.log(e.task.length, "bisa");
    //   setUrutan(e.task.length);
    // }
    // console.log(urutan);
    if (judulTask.length > 0) {
      setIsLoading(true);
      set(
        ref(
          realtimedb,
          // `todolist/card/${e.id_card}/task/${urutan}`
          `todolist/card/${e.no_urut}/task/${e.task ? e.task.length : 0}`
        ),

        {
          judul_task: judulTask,
          deskripsi_task: e.deskripsi_task ? e.deskripsi_task : "",
          id_task: e.id_task ? e.id_task : uuid,
          no_urut: e.task ? e.task.length : 0,
          no_urut_card: e.no_urut,
        }
      )
        .then((res) => {
          setJudulTask("");
          setIsLoading(false);
          // return console.log(res, "berhasil");
          GetData();
        })
        .catch((error) => {
          setJudulTask("");
          setIsLoading(false);
          // console.log(error);
        });
    }
  };
  //add deskripsi
  const onChangeDeskripsiTask = (e) => {
    // console.log(e);
    setDeskripsiTask(e.target.value);
  };
  const addDeskripsiTask = (e) => {
    if (deskripsiTask.length > 0) {
      // setIsLoading(true);
      set(
        ref(realtimedb, `todolist/card/${e.no_urut_card}/task/${e.no_urut}`),

        {
          judul_task: e.judul_task,
          deskripsi_task: deskripsiTask,
          id_task: e.id_task,
          no_urut: e.no_urut,
          no_urut_card: e.no_urut_card,
        }
      )
        .then((res) => {
          setDeskripsiTask("");
          // setIsLoading(false);
          // return console.log(res, "berhasil");
          GetData();
        })
        .catch((error) => {
          setDeskripsiTask("");
          // setIsLoading(false);
          // console.log(error);
        });
    }
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
    Menghapus,
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
  };
};
