import React, { useState, useEffect, useContext } from "react";
//firease
import {
  getDocs,
  collection,
  getFirestore,
  deleteDoc,
  doc,
} from "firebase/firestore";
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
  const getCollection = collection(db, "apa");
  const OnChangeJudul = (e) => {
    setJudul(e.target.value);
  };
  const OnChangeDeskripsi = (e) => {
    setDeskripsi(e.target.value);
  };
  const GetData = (e) => {
    const dapatDB = async () => {
      const sudahDapatDB = await getDocs(getCollection);
      setData(sudahDapatDB.docs?.map((x) => ({ ...x.data(), id: x.id })));
      // return sudahDapatDB.docs?.map((x) => ({ ...x.data(), id: x.id }));
      // return console.log(sudahDapatDB);
    };
    return dapatDB();
  };
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
