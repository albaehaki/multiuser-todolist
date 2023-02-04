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
    todoOpenId,
    setTodoOpenId,
    todoOpenName,
    setTodoOpenName,
    kondisiTodo,
    setKondisiTodo,
    //komentar
    toggleEditKomentar,
    setToggleEditKomentar,
    komentar,
    setKomentar,
    //dnd
    indexCardDrag,
    setIndexCardDrag,
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
    } else if (ket === "cardxTask") {
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
    } else if (ket === "cardxTaskxTodo") {
      let hasil = [];
      data?.forEach((x, idxCard) => {
        x.task?.forEach((y, idxTask) => {
          y.todo?.forEach((z, idxTodo) => {
            if (z.id_judul_todo === id) {
              hasil.push({
                noUrutCard: idxCard,
                noUrutTask: idxTask,
                noUrutTodo: idxTodo,
              });
            }
          });
        });
      });
      return hasil;
    } else if (ket === "cardxTaskxKomen") {
      let hasil = [];
      data?.forEach((x, idxCard) => {
        x.task?.forEach((y, idxTask) => {
          y.komentar?.forEach((z, idxKomen) => {
            if (z.id_komentar === id) {
              hasil.push({
                noUrutCard: idxCard,
                noUrutTask: idxTask,
                noUrutKomen: idxKomen,
              });
            }
          });
        });
      });
      return hasil;
    } else if (ket === "cardxTaskxTodoxList") {
      if (Array.isArray(data)) {
        let hasil = [];
        data.forEach((x, idxCard) => {
          if (Array.isArray(x.task)) {
            x.task.forEach((y, idxTask) => {
              if (Array.isArray(y.todo)) {
                y.todo.forEach((z, idxTodo) => {
                  if (Array.isArray(z.list_todo)) {
                    z.list_todo.forEach((l, idxList) => {
                      if (l.id_todo === id) {
                        hasil.push({
                          noUrutCard: idxCard,
                          noUrutTask: idxTask,
                          noUrutTodo: idxTodo,
                          noUrutList: idxList,
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
        return hasil;
      } else {
        return "data is not an array";
      }
    }
  };
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
  //   } else if (ket === "cardxTask") {
  //     let hasil = [];
  //     data?.forEach((x, idxCard) => {
  //       x.task?.forEach((y, idxTask) => {
  //         if (y.id_task === id) {
  //           hasil.push({
  //             noUrutCard: idxCard,
  //             noUrutTask: idxTask,
  //           });
  //         }
  //       });
  //     });
  //     return hasil;
  //   } else if (ket === "cardxTaskxTodo") {
  //     let hasil = [];
  //     data?.forEach((x, idxCard) => {
  //       x.task?.forEach((y, idxTask) => {
  //         y.todo?.forEach((z, idxJudulTodo) => {
  //           hasil.push({
  //             z,
  //           });
  //         });
  //       });
  //     });
  //   } else if (ket === "cardxTaskxTodoxList") {
  //     let hasil = [];
  //     data?.forEach((x, idxCard) => {
  //       x.task?.forEach((y, idxTask) => {
  //         y.todo?.forEach((z, idxJudulTodo) => {
  //           hasil.push({
  //             z,
  //           });
  //         });
  //       });
  //     });
  //   }
  // };

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
          // GetData();
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
    const noUrut = getId(e.id_task, "cardxTask");

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
          todo: e.todo ? e.todo : [],
          komentar: e.komentar ? e.komentar : [],
          tag: e.tag ? e.tag : "",
        }
      )
        .then((res) => {
          setJudulTask("");
          setIsLoading(false);
          // GetData();
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
    const noUrut = getId(e.id_task, "cardxTask");
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
          todo: e.todo ? e.todo : [],
          komentar: e.komentar ? e.komentar : [],
          tag: e.tag ? e.tag : "",
        }
      )
        .then((res) => {
          setDeskripsiTask("");
          setIsLoading(false);
          // GetData();
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
    const noUrut = getId(e.id_task, "cardxTask");

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
        // GetData();
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
        // GetData();
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

    const noUrut = getId(
      e.id_task ? e.id_task : e.id_judul_todo,
      e.id_task ? "cardxTask" : "cardxTaskxTodo"
    );
    console.log(noUrut);
    if (judulTodo.length > 0) {
      set(
        ref(
          realtimedb,
          `todolist/card/${noUrut[0].noUrutCard}/task/${
            noUrut[0].noUrutTask
          }/todo/${
            // e.todo ? e.todo.length : e.id_judul_todo ? noUrut[0].noUrutTodo : 0
            e.id_judul_todo ? noUrut[0].noUrutTodo : e.todo ? e.todo.length : 0
          }`
        ),

        {
          judul_todo: judulTodo,
          id_judul_todo: e.id_judul_todo ? e.id_judul_todo : uuid,
          list_todo: e.list_todo ? e.list_todo : [],
        }
      )
        .then((res) => {
          setJudulTodo("");
          setIsLoading(false);
          // GetData();
        })
        .catch((error) => {
          setJudulTodo("");
          setIsLoading(false);
          console.log(error);
        });
    }
  };
  //remove judul todo
  const removeJudulTodo = (e) => {
    const noUrut = getId(e.id_judul_todo, "cardxTaskxTodo");

    const judulTodoFiltered = data
      .filter((a, i) => i === noUrut[0].noUrutCard)[0]
      .task.filter((b, i) => i === noUrut[0].noUrutTask)[0]
      .todo.filter((c, i) => i !== noUrut[0].noUrutTodo);

    set(
      ref(
        realtimedb,
        `todolist/card/${noUrut[0].noUrutCard}/task/${noUrut[0].noUrutTask}/todo`
      ),

      judulTodoFiltered
    )
      .then((res) => {
        // setJudulTodo("");
        setIsLoading(false);
        // GetData();
      })
      .catch((error) => {
        // setJudulTodo("");
        setIsLoading(false);
        console.log(error);
      });
  };
  //add nama todo
  const addNamaTodo = (e, edit, checked) => {
    const uuid = uid(16);
    console.log(e, "ini dari props", edit, checked);
    const noUrut = getId(
      edit ? e.id_todo : e.id_judul_todo,
      edit ? "cardxTaskxTodoxList" : "cardxTaskxTodo"
    );
    if (todo.length > 0 || edit) {
      set(
        ref(
          realtimedb,
          `todolist/card/${noUrut[0].noUrutCard}/task/${
            noUrut[0].noUrutTask
          }/todo/${noUrut[0].noUrutTodo}/list_todo/${
            e.list_todo
              ? e.list_todo.length
              : e.id_todo
              ? noUrut[0].noUrutList
              : 0
          }`
        ),

        {
          nama_todo: edit ? e.nama_todo : todo,
          id_todo: e.id_todo ? e.id_todo : uuid,
          kondisi: e.kondisi ? e.kondisi : edit ? checked : false,
        }
      )
        .then((res) => {
          setTodo("");
          setIsLoading(false);
          // GetData();
        })
        .catch((error) => {
          setTodo("");
          setIsLoading(false);
          console.log(error);
        });
    }
  };

  //remove todo

  const removeTodo = (e, edit, checked) => {
    const noUrut = getId(e.id_todo, "cardxTaskxTodoxList");

    const judulTodoFiltered = data
      .filter((a, i) => i === noUrut[0].noUrutCard)[0]
      .task.filter((b, i) => i === noUrut[0].noUrutTask)[0]
      .todo.filter((c, i) => i === noUrut[0].noUrutTodo)[0]
      .list_todo.filter((d, i) => i !== noUrut[0].noUrutList);

    set(
      ref(
        realtimedb,
        `todolist/card/${noUrut[0].noUrutCard}/task/${noUrut[0].noUrutTask}/todo/${noUrut[0].noUrutTodo}/list_todo`
      ),

      judulTodoFiltered
    )
      .then((res) => {
        // setJudulTodo("");
        setIsLoading(false);
        // GetData();
      })
      .catch((error) => {
        // setJudulTodo("");
        setIsLoading(false);
        console.log(error);
      });
  };

  //add komentar
  const addKomentar = (e) => {
    const uuid = uid(16);
    console.log(e, "ini dari props");

    const noUrut = getId(e.id_task, "cardxTask");
    console.log(noUrut);
    if (komentar.length > 0) {
      set(
        ref(
          realtimedb,
          `todolist/card/${noUrut[0].noUrutCard}/task/${
            noUrut[0].noUrutTask
          }/komentar/${e.komentar ? e.komentar.length : 0}`
        ),

        {
          user: "zacky",
          id_komentar: uuid,
          komentar: komentar,
        }
      )
        .then((res) => {
          setKomentar("");
          setIsLoading(false);
          // GetData();
        })
        .catch((error) => {
          setKomentar("");
          setIsLoading(false);
          console.log(error);
        });
    }
  };
  const removeKomentar = (e) => {
    const noUrut = getId(e.id_komentar, "cardxTaskxKomen");
    console.log(noUrut, e);
    const judulTodoFiltered = data
      .filter((a, i) => i === noUrut[0].noUrutCard)[0]
      .task.filter((b, i) => i === noUrut[0].noUrutTask)[0]
      .komentar.filter((c, i) => i !== noUrut[0].noUrutKomen);

    set(
      ref(
        realtimedb,
        `todolist/card/${noUrut[0].noUrutCard}/task/${noUrut[0].noUrutTask}/komentar`
      ),

      judulTodoFiltered
    )
      .then((res) => {
        // setJudulTodo("");
        setIsLoading(false);
        // GetData();
      })
      .catch((error) => {
        // setJudulTodo("");
        setIsLoading(false);
        console.log(error);
      });
  };

  //tandai task
  const addTag = (e) => {
    const uuid = uid(16);
    console.log(e, "ini dari props");

    const noUrut = getId(e.id_task, "cardxTask");
    console.log(noUrut);

    set(
      ref(
        realtimedb,
        `todolist/card/${noUrut[0].noUrutCard}/task/${noUrut[0].noUrutTask}`
      ),

      {
        judul_task: e.judul_task,
        deskripsi_task: e.deskripsi_task,
        id_task: e.id_task,
        todo: e.todo ? e.todo : [],
        komentar: e.komentar ? e.komentar : [],
        tag: "zacky",
      }
    )
      .then((res) => {
        // setKomentar("");
        setIsLoading(false);
        // GetData();
      })
      .catch((error) => {
        // setKomentar("");
        setIsLoading(false);
        console.log(error);
      });
  };
  // drag and drop
  const dndCard = (indexCardDrop) => {
    console.log({ indexCardDrop: indexCardDrop, indexCardDrag: indexCardDrag });

    const cardDrag = data.filter((a, index) => index === indexCardDrag)[0];
    const filtered = data.filter((a, index) => index !== indexCardDrag);
    // console.log(cardDrag);
    // console.log(filtered, "selain card drag");

    filtered.splice(indexCardDrop, 0, cardDrag);
    // console.log(filtered, "ini hasil ");
    set(
      ref(realtimedb, `todolist/card`),

      filtered
    )
      .then((res) => {
        // setJudulTodo("");
        setIsLoading(false);
        // GetData();
      })
      .catch((error) => {
        // setJudulTodo("");
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
    addTag,
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
    removeTodo,

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
    addNamaTodo,
    todoOpenId,
    setTodoOpenId,
    removeJudulTodo,
    todoOpenName,
    setTodoOpenName,
    kondisiTodo,
    setKondisiTodo,
    //komentar
    toggleEditKomentar,
    setToggleEditKomentar,
    komentar,
    setKomentar,
    addJudulTodo,
    addKomentar,
    removeKomentar,
    //drag and drop
    indexCardDrag,
    setIndexCardDrag,
    dndCard,
  };
};
