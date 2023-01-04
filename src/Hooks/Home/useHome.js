import React, { useState, useEffect, useContext } from "react";
//firease
import { getDocs, collection, getFirestore } from "firebase/firestore";
import app from "../../Services/firebase";
import { DataContext } from "../../Context";
import { async } from "@firebase/util";

export const useHome = () => {
  const { data, setData, judul, setJudul, deskripsi, setDeskripsi, userId } =
    useContext(DataContext);
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
      return console.log(sudahDapatDB);
    };
    return dapatDB();
  };
  return {
    data,
    setData,
    OnChangeJudul,
    OnChangeDeskripsi,
    judul,
    setJudul,
    GetData,
  };
};
