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

  //

  //function untuk mendapatkan id card dan task
  // const getId = (id, ket) => {
  //   if (ket === "card") {
  //     const hasil = data.findIndex((x) => x.id_card === id);
  //     return hasil;
  //   } else if (ket === "task") {
  //     const hasil = data
  //       .map((x) => x.task?.findIndex((y) => y.id_task === id))
  //       .filter((x) => x >= 0)
  //       .join();
  //     return hasil;
  //   } else if (ket === "keduanya") {
  //     const hasil = data.map((x) =>
  //       x.task?.map((y) => {
  //         if (y.id_task === id) {
  //           const no_urut_card = x?.findIndex(
  //             (cardData) => cardData.id_card === x.id_card
  //           );
  //           const no_urut_task = x?.findIndex(
  //             (cardTask) => cardTask.id_card === y.id_task
  //           );
  //           return {
  //             id_card: no_urut_card,
  //             id_task: no_urut_task,
  //           };
  //         }
  //       })
  //     );
  //     return hasil;
  //   }
  // };

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
        }
      )
        .then((res) => {
          setJudulTask("");
          setIsLoading(false);

          GetData();
        })
        .catch((error) => {
          setJudulTask("");
          setIsLoading(false);
          console.log(error);
        });
    }
    // console.log(
    //   e.task.filter((x) => x.id_task !== "1e2831215428afb2"),
    //   "filter"
    // );
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
        }
      )
        .then((res) => {
          setDeskripsiTask("");

          GetData();
        })
        .catch((error) => {
          setDeskripsiTask("");

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
      // task.filter((x) => x.id_task !== "1e2831215428afb2"),
      // "filter"
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
          setJudulTask("");
          setIsLoading(false);

          GetData();
        })
        .catch((error) => {
          setJudulTask("");
          setIsLoading(false);
          console.log(error);
        });
    
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
    // Menghapus,
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
  };
};
