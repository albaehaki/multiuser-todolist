import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Dialog,
  Button,
  Avatar,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Add, Edit, Remove } from "@mui/icons-material";
import { useHome } from "../Hooks/Home/useHome";
import PopUpUserTag from "./popupUsersTag";

export const Popup = ({
  openDialog,
  handleCloseDialog,

  userUid,
}) => {
  const {
    data,
    taskId,

    onChangeDeskripsiTask,
    deskripsiTask,
    setDeskripsiTask,
    addDeskripsiTask,
    isLoading,
    setIsLoading,
    toggleEditDeskripsiTask,
    setToggleEditDeskripsiTask,
    toggleEditJudulTask,
    setToggleEditJudulTask,
    judulTask,
    setJudulTask,
    addJudulTask,
    onChangeTask,
    removeTask,
    dataPopUp,
    setDataPopUp,
    addTag,

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
    addJudulTodo,
    addNamaTodo,
    todoOpenId,
    setTodoOpenId,
    removeJudulTodo,
    todoOpenName,
    setTodoOpenName,
    removeTodo,

    komentar,
    setKomentar,
    addKomentar,
    removeKomentar,
    users,
    openDialogTag,
    handleCloseDialogTag,
    handleOpenDialogTag,
    addTimeSheet,
  } = useHome();
  const [timeSheet, setTimeSheet] = useState({});

  useEffect(() => {
    data.map((item, i) => {
      item.task?.map((itemtask) => {
        if (taskId === itemtask.id_task) {
          setDataPopUp(itemtask);
        }
      });
    });
  }, [isLoading, taskId]);
  const getTimdeData = (data) => {
    const sekarang = new Date(data);
    const tahun = sekarang.getFullYear();
    const bulan = sekarang.getMonth(); // 0-11 (Januari-Desember)
    const tanggal = sekarang.getDate();
    const jam = sekarang.getHours();
    const menit = sekarang.getMinutes();
    const detik = sekarang.getSeconds();
    return `${bulan}/${tanggal}/${tahun}/${jam}:${menit}:${detik}`;
  };

  const getDurasi = (data) => {
    const startDate = new Date(data.start);
    const endDate = new Date(data.end);

    const selisihBulan = endDate.getMonth() - startDate.getMonth();
    const selisihHari = endDate.getDate() - startDate.getDate();
    const selisihTahun = endDate.getFullYear() - startDate.getFullYear();
    const selisihJam = endDate.getHours() - startDate.getHours();
    const selisihMenit = endDate.getMinutes() - startDate.getMinutes();
    const selisihDetik = endDate.getSeconds() - startDate.getSeconds();

    return `${Math.abs(selisihBulan)}/${Math.abs(selisihHari)}/${Math.abs(selisihTahun)}/${Math.abs(selisihJam)}:${Math.abs(selisihMenit)}:${Math.abs(selisihDetik)}`;
}


 console.log(getDurasi(timeSheet))
  return (
    <>
      {/* Dialog */}
      <Dialog
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "rgb(255,255,255,0.4)",

            width: "80vw",
            maxWidth: "100vw",
            height: "70vh",

            boxShadow: "none",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgb(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
          },
        }}
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",

            mb: "5px",
            borderRadius: "5px",
          }}
          container
        >
          <Grid item xs={10}>
            {toggleEditJudulTask ? (
              <TextField
                sx={{
                  pb: "10px",
                  "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                }}
                size="small"
                multiline
                rows={1}
                fullWidth
                value={judulTask}
                onChange={(e) => {
                  onChangeTask(e);
                }}
              ></TextField>
            ) : (
              <Typography variant="h6">{dataPopUp.judul_task}</Typography>
            )}
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={2}>
            <Button
              onClick={() => {
                // console.log("test judul");
                if (!toggleEditJudulTask) {
                  setToggleEditJudulTask(true);
                  setJudulTask(dataPopUp.judul_task);
                } else {
                  setToggleEditJudulTask(false);
                  addJudulTask(dataPopUp);
                }
              }}
            >
              {users?.filter((item) => item.uid === userUid)[0]?.role ===
              "admin" ? (
                toggleEditJudulTask ? (
                  <Add />
                ) : (
                  <Edit />
                )
              ) : (
                ""
              )}
            </Button>
          </Grid>
        </Grid>

        <Box
          sx={{
            backgroundColor: "white",
            py: "5px",
            px: "5px",

            borderRadius: "5px",
          }}
        >
          {dataPopUp.deskripsi_task ? (
            toggleEditDeskripsiTask ? (
              <>
                <TextField
                  sx={{
                    pb: "10px",
                    "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                  }}
                  size="small"
                  multiline
                  rows={5}
                  fullWidth
                  value={deskripsiTask}
                  onChange={(e) => {
                    onChangeDeskripsiTask(e);
                  }}
                ></TextField>
                <ListItemButton
                  type="submit"
                  onClick={() => {
                    if (
                      users?.filter((item) => item.uid === userUid)[0]?.role ===
                      "admin"
                    ) {
                      setToggleEditDeskripsiTask(false);
                      addDeskripsiTask(dataPopUp);
                    }
                  }}
                  sx={{
                    borderRadius: "10px",
                    backgroundColor: "white",
                    padding: "0px",
                  }}
                >
                  <ListItem>
                    <ListItemIcon
                      sx={{ m: "auto", backgroundColor: "", padding: "0px" }}
                    >
                      <Add
                        sx={{ m: "auto", display: "grid", padding: "0px" }}
                      />
                    </ListItemIcon>
                    <ListItemText sx={{ backgroundColor: "" }}>
                      Add Deskripsi
                    </ListItemText>
                  </ListItem>
                </ListItemButton>
              </>
            ) : (
              <>
                {" "}
                <Typography variant="subtitle1">
                  {dataPopUp.deskripsi_task.replace(/n\//g, "<br>")}
                </Typography>
                <Button
                  sx={{
                    borderRadius: "10px",

                    color: "black",
                    mt: "10px",
                  }}
                  fullWidth
                  onClick={() => {
                    if (
                      users?.filter((item) => item.uid === userUid)[0]?.role ===
                      "admin"
                    ) {
                      setDeskripsiTask(dataPopUp.deskripsi_task);
                      setToggleEditDeskripsiTask(true);
                    }
                  }}
                >
                  Edit
                </Button>
              </>
            )
          ) : (
            <>
              <TextField
                sx={{
                  pb: "10px",
                  "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                }}
                size="small"
                multiline
                rows={5}
                fullWidth
                value={deskripsiTask}
                onChange={(e) => {
                  onChangeDeskripsiTask(e);
                }}
              ></TextField>
              <ListItemButton
                type="submit"
                onClick={() => {
                  if (
                    users?.filter((item) => item.uid === userUid)[0]?.role ===
                    "admin"
                  ) {
                    setToggleEditDeskripsiTask(false);
                    addDeskripsiTask(dataPopUp);
                  }
                }}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "0px",
                }}
              >
                <ListItem>
                  <ListItemIcon
                    sx={{ m: "auto", backgroundColor: "", padding: "0px" }}
                  >
                    <Add sx={{ m: "auto", display: "grid", padding: "0px" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ backgroundColor: "" }}>
                    Add Deskripsi
                  </ListItemText>
                </ListItem>
              </ListItemButton>
            </>
          )}
        </Box>
        {/* StartTIme */}

        <Box>
          <Grid
            sx={{
              backgroundColor: "white",
              py: "5px",
              px: "5px",
              mb: "5px",
              mt: "15px",
              borderRadius: "5px",
            }}
            container
          >
            <Grid item xs={10}>
              <Typography
                sx={{
                  backgroundColor: "white",
                  my: "5px",
                  mx: "5px",
                  borderRadius: "5px",
                  fontWeight: "800",
                }}
              >
                Waktu Pengerjaan
              </Typography>
            </Grid>
            <Grid
              gap={2}
              sx={{ display: "flex", justifyContent: "right" }}
              item
              xs={2}
            >
              {timeSheet.start === undefined ? (
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    // const now = new Date();
                    // const formattedTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
                    // console.log(formattedTime);
                    const sekarang = new Date();
                    setTimeSheet({ start: sekarang, end: "" });
                    // const tahun = sekarang.getFullYear();
                    // const bulan = sekarang.getMonth(); // 0-11 (Januari-Desember)
                    // const tanggal = sekarang.getDate();
                    // const jam = sekarang.getHours();
                    // const menit = sekarang.getMinutes();
                    // const detik = sekarang.getSeconds();
                    // console.log(sekarang);
                    // console.log(
                    //   `Tanggal saat ini: ${tanggal}/${bulan + 1}/${tahun}`
                    // );
                    // console.log(`Waktu saat ini: ${jam}:${menit}:${detik}`);
                    addTimeSheet("start", {id: userUid, data: sekarang})
                  }}
                >
                  Start
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    const sekarang = new Date();
                    addTimeSheet("stop", {id: userUid, data: sekarang})
                    setTimeSheet({ start: timeSheet.start, end: sekarang });
                  }}
                >
                  Stop
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid>
            <Typography>zaky</Typography>
          </Grid>
          <Grid>
            <Typography>
              Mulai :{getTimdeData(timeSheet?.start)}
              {/* {timeSheet.start !== undefined ? timeSheet.start : "00.00"} */}
            </Typography>
            <Typography>
              Selesai : {getTimdeData(timeSheet?.end)}
              {/* {timeSheet.end !== undefined ? timeSheet.end : "00.00"} */}
            </Typography>
            <Typography>Durasi: {getDurasi(timeSheet)}</Typography>
          </Grid>
        </Box>
        {/* end Time */}
        {/* todo */}
        <Typography sx={{ my: "20px", fontWeight: "600", fontSize: "16" }}>
          Checkbox
        </Typography>

        <Box>
          {dataPopUp.todo?.map((itemTodo, i) => (
            <>
              <Grid
                key={i}
                sx={{
                  backgroundColor: "white",
                  py: "5px",
                  px: "5px",

                  mb: "5px",
                  mt: "15px",
                  borderRadius: "5px",
                }}
                container
              >
                <Grid item xs={10}>
                  {toggleEditJudulTodo &&
                  todoOpenId === itemTodo.id_judul_todo ? (
                    <TextField
                      sx={{
                        mb: "10px",
                        "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                      }}
                      size="small"
                      multiline
                      rows={1}
                      fullWidth
                      value={judulTodo}
                      onChange={(e) => {
                        setJudulTodo(e.target.value);
                      }}
                    ></TextField>
                  ) : (
                    <Typography
                      sx={{
                        backgroundColor: "white",
                        my: "5px",
                        mx: "5px",

                        borderRadius: "5px",
                        fontWeight: "800",
                      }}
                    >
                      {itemTodo.judul_todo.substring(0, 10) + "..."}
                    </Typography>
                  )}
                </Grid>
                <Grid
                  gap={2}
                  sx={{ display: "flex", justifyContent: "right" }}
                  item
                  xs={2}
                >
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      if (
                        users?.filter((item) => item.uid === userUid)[0]
                          ?.role === "admin"
                      ) {
                        setTodoOpenId(itemTodo.id_judul_todo);
                        addJudulTodo(itemTodo);
                        // console.log(dataPopUp);
                        setToggleEditJudulTodo(!toggleEditJudulTodo);
                        if (itemTodo.id_judul_todo) {
                          setJudulTodo(itemTodo.judul_todo);
                        }
                      }
                    }}
                  >
                    {toggleEditJudulTodo ? <Add /> : <Edit />}
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      if (
                        users?.filter((item) => item.uid === userUid)[0]
                          ?.role === "admin"
                      ) {
                        removeJudulTodo(itemTodo);
                      }
                    }}
                  >
                    <Remove />
                  </Button>
                </Grid>
              </Grid>

              <FormGroup sx={{ mr: "20px" }}>
                {itemTodo.list_todo?.map((item, index) => (
                  <Grid container>
                    <Grid xs={11} item>
                      <FormControlLabel
                        key={index}
                        control={<Checkbox checked={item.kondisi} />}
                        label={item.nama_todo.substring(0, 20) + "..."}
                        onClick={(e) => {
                          addNamaTodo(item, true, e.target.checked);
                        }}
                      />
                    </Grid>
                    <Grid xs={1} item>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          if (
                            users?.filter((item) => item.uid === userUid)[0]
                              ?.role === "admin"
                          ) {
                            removeTodo(item);
                          }
                        }}
                      >
                        <Remove />
                      </Button>
                    </Grid>
                  </Grid>
                ))}
                {toggleEditTodo && todoOpenName === itemTodo.id_judul_todo ? (
                  <TextField
                    sx={{
                      mb: "10px",
                      "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                    }}
                    size="small"
                    multiline
                    rows={1}
                    fullWidth
                    value={todo}
                    onChange={(e) => {
                      setTodo(e.target.value);
                    }}
                  ></TextField>
                ) : (
                  ""
                )}
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    if (
                      users?.filter((item) => item.uid === userUid)[0]?.role ===
                      "admin"
                    ) {
                      setTodoOpenName(itemTodo.id_judul_todo);
                      setToggleEditTodo(!toggleEditTodo);
                      if (toggleEditTodo) {
                        addNamaTodo(itemTodo, false);
                      }
                    }
                  }}
                >
                  <Add />
                </Button>
              </FormGroup>
            </>
          ))}
          <Grid
            sx={{
              backgroundColor: "white",
              py: "5px",
              px: "5px",

              mb: "5px",
              mt: "15px",
              borderRadius: "5px",
            }}
            container
          >
            <Grid item xs={10}>
              {toggleAddJudulTodo ? (
                <TextField
                  sx={{
                    mb: "10px",
                    "& .MuiOutlinedInput-root": { borderRadius: "10px" },
                  }}
                  size="small"
                  multiline
                  rows={1}
                  fullWidth
                  value={judulTodo}
                  onChange={(e) => {
                    // onChangeTask(e);
                    setJudulTodo(e.target.value);
                  }}
                ></TextField>
              ) : (
                <Typography
                  sx={{
                    backgroundColor: "white",
                    my: "5px",
                    mx: "5px",

                    borderRadius: "5px",
                    fontWeight: "800",
                  }}
                >
                  Todo
                </Typography>
              )}
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "right" }} item xs={2}>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  if (
                    users?.filter((item) => item.uid === userUid)[0]?.role ===
                    "admin"
                  ) {
                    addJudulTodo(dataPopUp);

                    setToggleAddJudulTodo(!toggleAddJudulTodo);
                  }
                }}
              >
                <Add />
              </Button>
            </Grid>
          </Grid>
        </Box>
        {/* tag */}

        {!dataPopUp.tag ? (
          <IconButton
            onClick={() => {
              // console.log("test");
              if (
                users?.filter((item) => item.uid === userUid)[0]?.role ===
                "admin"
              ) {
                handleOpenDialogTag();
              } else {
                addTag(
                  dataPopUp,
                  users?.filter((item) => item.uid === userUid)[0]?.name
                );
              }
            }}
            sx={{ m: "5px", padding: "0px", width: 32, height: 32 }}
          >
            <Add sx={{ m: "auto", padding: "0px", width: 32, height: 32 }} />
          </IconButton>
        ) : (
          <Grid sx={{ display: "flex" }}>
            {users?.filter((item) => item.uid === userUid)[0]?.role ===
            "admin" ? (
              <IconButton
                onClick={() => {
                  console.log(dataPopUp, "addtag jalan");
                  handleOpenDialogTag(
                    dataPopUp,
                    users?.filter((item) => item.uid === userUid)[0]?.name
                  );
                }}
                sx={{ m: "5px", padding: "0px", width: 32, height: 32 }}
              >
                <Add
                  sx={{ m: "auto", padding: "0px", width: 32, height: 32 }}
                />
              </IconButton>
            ) : (
              ""
            )}
            <Avatar
              sx={{
                width: 48,
                height: 48,

                backgroundColor: "white",
                color: "lightcoral",
                "&:hover": { color: "white", backgroundColor: "lightcoral" },
              }}
            >
              {dataPopUp.tag.slice(0, 3)}
            </Avatar>
          </Grid>
        )}

        <Typography
          sx={{
            backgroundColor: "white",
            maxWidth: "200px",
            py: "5px",
            px: "5px",

            my: "15px",
            borderRadius: "5px",

            fontWeight: "800",
            letterSpacing: "5px",
          }}
          variant="h7"
        >
          Comment
        </Typography>
        {dataPopUp.komentar
          ? dataPopUp.komentar.map((item) => (
              <>
                <Grid container>
                  <Grid item xs={10}>
                    <Typography>
                      <b>{item.user}</b> :{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      fullWidth
                      onClick={() => {
                        removeKomentar(item);
                      }}
                    >
                      <Remove />
                    </IconButton>
                  </Grid>
                </Grid>
                <Typography
                  sx={{
                    backgroundColor: "white",
                    py: "5px",
                    px: "5px",
                    mb: "15px",
                    borderRadius: "5px",
                  }}
                >
                  {item.komentar}
                </Typography>
              </>
            ))
          : ""}

        <form
          onSubmit={(e) => {
            e.preventDefault();

            addKomentar(
              dataPopUp,
              users?.filter((item) => item.uid === userUid)[0]?.name
            );
          }}
        >
          <Grid sx={{ mb: "10px", backgroundColor: "white" }} container>
            <Grid item xs={11}>
              <TextField
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {},
                }}
                size="small"
                value={komentar}
                onChange={(e) => setKomentar(e.target.value)}
              ></TextField>
            </Grid>
            <Grid
              sx={{ pl: "10px" }}
              container
              direction="row"
              justifyContent="flex-end"
              item
              xs={1}
            >
              <Button
                variant="contained"
                color="success"
                type="submit"
                // fullWidth
                onClick={() => {
                  // removeJudulTodo(itemTodo);
                }}
              >
                <Add />
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid sx={{ mt: "10px" }} container spacing={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              sx={{
                backgroundColor: "#E0144C",
                // borderRadius: "10px",

                color: "white",
              }}
              onClick={() => {
                removeTask(dataPopUp);
                handleCloseDialog();
              }}
            >
              Delete
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                color: "black",
                // mt: "10px",
              }}
              onClick={() => {
                handleCloseDialog();
              }}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </Dialog>
      <PopUpUserTag
        openDialogTag={openDialogTag}
        handleCloseDialogTag={handleCloseDialogTag}
        userUid={userUid}
      />
    </>
  );
};
