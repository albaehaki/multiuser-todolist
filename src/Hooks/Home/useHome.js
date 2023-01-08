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
  } = useContext(DataContext);
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
    setData([]);
    onValue(ref(realtimedb), (snapshot) => {
      const databd = snapshot.val();
      setData([]);
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
          console.log(value, key, i);
          if (key === "card") {
            console.log(value, "ini if");
            setData(value);
          } else {
            console.log("ini kalau gagal");
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
      console.log("berhasil");
      GetData();
    } catch (e) {
      console.log(e);
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
  };
};
